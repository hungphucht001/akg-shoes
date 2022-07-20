import React, { useState, useEffect} from "react";

import { useLocation } from 'react-router-dom'
import NumberFormat from "react-number-format";

import PropTypes from "prop-types";

import styles from "./Detail.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import * as apiProduct from "~/services/productApi"

const cx = classNames.bind(styles);

const propTypes = {};

function Detail(props) {
    
    const [data, setData] = useState({});
    const [isEmpty, setIsEmpty] = useState(false)
    const location = useLocation()
    
    useEffect(()=>{
        const slug = location.pathname.split('/')[2]
        const getData = async()=>{
            const result = await apiProduct.product(slug);
            if(!result) setIsEmpty(true)
            else setData(result)
            window.screenTop(0)
        }
        getData()

    }, [location])

    return (
        <div className={cx("detail")}>
            <div className={cx("container")}>
                {data.price && <div className={cx("row")}>
                    <div className={cx("col-6")}>
                        <img src={data.avatar} alt=""/>
                    </div>
                    <div className={cx("col-6")}>
                        <div className={cx("wrap-content")}>
                            <div className={cx('name')}>
                                <h2>{data.name}</h2>
                            </div>
                            <div className={cx("price")}>
                                <span className={cx("sale")}>
                                <NumberFormat
                                    thousandSeparator={true}
                                    displayType={"text"}
                                    value={data.price.replace('.00',"")}
                                />
                            đ</span>
                                <span>1,140,000 đ</span>
                            </div>
                            {/* <div className={cx('sizes')}>
                                <h4>Available sizes</h4>
                                <div className={cx('list-size')}>
                                    list size
                                </div>
                            </div> */}
                            <div className={cx('amount')}>
                                <span className={cx('btn decrease')}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </span>
                                <span className={cx('number')}>
                                    1
                                </span>
                                <span className={cx('btn increase')}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </span>
                            </div>
                            <div className={cx('btn btn-add')}>
                                <button className={cx('btn btn-add')} >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>}
                {isEmpty && <p>Sản phẩm không tồn tại</p>}
            </div>
        </div>
    );
}

Detail.propTypes = propTypes;

export default Detail;
