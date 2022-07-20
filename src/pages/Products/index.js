import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import {useSelector, useDispatch} from 'react-redux'
import {addProduct, addPage} from '~/redux/actions'

import ItemProduct from "~/components/ItemProduct";

import styles from "./Products.scss";
import classNames from "classnames/bind";

import * as apiProduct from "~/services/productApi";
import SideBar from "~/components/SideBar";

import { productListSelector, sortProductSelector} from '~/redux/selectors'
import SortProduct from "~/components/SortProduct";
import Loading from "~/components/Loading";

const cx = classNames.bind(styles);

const propTypes = {};

function Products(props) {

    const [isShowFilter, setIsShowFilter] = useState(true);
    const [totalPage, setTotalPage] = useState(0);
    const [page, setPage] = useState(0);
    
    //using redux
    const dispatch = useDispatch()
    const data = useSelector(productListSelector)
    const pag = useSelector(sortProductSelector)
    
    useEffect(() => {
        const getData = async () => {
            if(pag.page > 0){
                const temp = await apiProduct.allProduct(pag);
                dispatch(addProduct(temp.data))
                setTotalPage(temp.pagination._totalPages);
            }
            else dispatch(addPage({
                ...pag,
                page: 1
            }))
        };
        getData();
       
    }, [dispatch, pag]);

    const fetchMoreData = () => {
        setTimeout(() => {
            dispatch(addPage({
                ...pag,
                page: pag.page + 1,
            }))
        }, 1500);
    };

    const handleToggleShowFilter = () => setIsShowFilter(!isShowFilter);

    return (
        <div className={cx("products container-fluid mb-100")}>
            <div className={cx("header-products")}>
                <div>
                    <h3>All Product</h3>
                </div>
                <div className={cx("feature")}>
                    <div
                        onClick={handleToggleShowFilter}
                        className={cx(
                            "filter-toggle",
                            isShowFilter && "active"
                        )}
                    >
                        <span className={cx("filter-toggle-text")}>
                            {isShowFilter ? "Ẩn" : "Hiện"} bộ lọc
                        </span>
                        <span className={cx("filter-toggle-icon")}></span>
                    </div>

                    <SortProduct />
                </div>
            </div>
            <div className={cx("product-list")}>
                {isShowFilter && <SideBar/>}
                {
                    data && <InfiniteScroll
                    dataLength={data.length}
                    next={fetchMoreData}
                    className={cx("row")}
                    hasMore={data.length < totalPage}
                    loader={<Loading/>}
                >
                    {data.map((item, index) => (
                        <div className={cx("col-3 mb-10")} key={index}>
                            <ItemProduct item={item} />
                        </div>
                    ))}
                </InfiniteScroll>
                }
            </div>
        </div>
    );
}

Products.propTypes = propTypes;

export default Products;
