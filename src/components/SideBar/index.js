import React, { useState, memo } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faQ } from "@fortawesome/free-solid-svg-icons";

//redux

import { useDispatch, useSelector } from 'react-redux'
import {sortProduct, emptyProduct} from '~/redux/actions'
import {sortProductSelector} from '~/redux/selectors'


import classNames from "classnames/bind";
import styles from "./SideBar.scss";
const cx = classNames.bind(styles);

const propTypes = {};

function SideBar(props) {
    const [isShowSortBy, setIsShowSortBy] = useState(false);
    const [checked, setChecked] = useState("men");

    const dispatch = useDispatch()

    const pag = useSelector(sortProductSelector)

    const handleCheck = (val) => {
        dispatch(sortProduct({
            ...pag,
            s: val === 'women'? 2: 1     
        }));
        dispatch(emptyProduct())
        setChecked(val);
    };

    return (
        <div className="filter">
            <div className="filter-title">
                <h4>Category</h4>
            </div>
            <div>
                <div>
                    <input
                        id="men"
                        checked={checked === "men"}
                        onChange={() => handleCheck("men")}
                        type="radio"
                    />
                    <label for="men">Men's shoes</label>
                </div>
                <div>
                    <input
                        id="women"
                        checked={checked === "women"}
                        onChange={() => handleCheck("women")}
                        type="radio"
                    />
                    <label for="women">Women's shoes</label>
                </div>
            </div>
            <div className="filter-title">
                <h4>Filter</h4>
            </div>
            <div className="filter-item">
                <div>
                    <span>Color</span>
                    <div className={cx("icon-filter")}>
                        {isShowSortBy ? (
                            <FontAwesomeIcon icon={faAngleUp} />
                        ) : (
                            <FontAwesomeIcon icon={faAngleDown} />
                        )}
                    </div>
                </div>
            </div>
            <div className="filter-item">
                <div>
                    <span>Size</span>
                    <div className={cx("icon-filter")}>
                        {isShowSortBy ? (
                            <FontAwesomeIcon icon={faAngleUp} />
                        ) : (
                            <FontAwesomeIcon icon={faAngleDown} />
                        )}
                    </div>
                </div>
            </div>
            <div className="filter-item">
                <div>
                    <span>Price</span>
                    <div className={cx("icon-filter")}>
                        {isShowSortBy ? (
                            <FontAwesomeIcon icon={faAngleUp} />
                        ) : (
                            <FontAwesomeIcon icon={faAngleDown} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

SideBar.propTypes = propTypes;

export default memo(SideBar);
