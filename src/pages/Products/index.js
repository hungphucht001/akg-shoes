import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

import ItemProduct from "~/components/ItemProduct";

import styles from "./Products.scss";
import classNames from "classnames/bind";

import * as apiProduct from "~/services/productApi";
import Filter from "./Filter";
import Sort from "./Sort";

const cx = classNames.bind(styles);

const propTypes = {};

function Products(props) {

    const [isShowFilter, setIsShowFilter] = useState(true);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
        const getData = async () => {
            const temp = await apiProduct.allProduct(page);
            setData((prev) => {
                return prev.concat(temp.data);
            });
            setTotalPage(temp.pagination._totalPages);
        };
        getData();
    }, [page]);

    const fetchMoreData = () => {
        setTimeout(() => {
            setPage(page => page + 1);
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

                    <Sort />
                </div>
            </div>
            <div className={cx("product-list")}>
                {isShowFilter && <Filter/>}
                <InfiniteScroll
                    dataLength={data.length}
                    next={fetchMoreData}
                    className={cx("row")}
                    hasMore={data.length < totalPage}
                    loader={<h4 className={cx("text-center")}>Loading...</h4>}
                >
                    {data.map((item, index) => (
                        <div className={cx("col-3 mb-10")} key={index}>
                            <ItemProduct item={item} />
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        </div>
    );
}

Products.propTypes = propTypes;

export default Products;
