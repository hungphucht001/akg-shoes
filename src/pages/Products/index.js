import React, { useState } from "react";
import PropTypes from "prop-types";
import ItemProduct from "~/components/ItemProduct";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faQ } from "@fortawesome/free-solid-svg-icons";

import styles from "./Products.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const propTypes = {};

const data = [
    {
        title: "Athletic Shoe",
        img: "/images/section-201.png",
    },
    {
        title: "Maroon Wedget",
        img: "/images/section-202.png",
    },
    {
        title: "GreenLeather Shoe",
        img: "/images/section-203.png",
    },
    {
        title: "Athletic Shoe",
        img: "/images/section-201.png",
    },
    {
        title: "Maroon Wedget",
        img: "/images/section-202.png",
    },
    {
        title: "GreenLeather Shoe",
        img: "/images/section-203.png",
    },
    {
        title: "Athletic Shoe",
        img: "/images/section-201.png",
    },
    {
        title: "Maroon Wedget",
        img: "/images/section-202.png",
    },
    {
        title: "GreenLeather Shoe",
        img: "/images/section-203.png",
    },
    {
        title: "Athletic Shoe",
        img: "/images/section-201.png",
    },
    {
        title: "Maroon Wedget",
        img: "/images/section-202.png",
    },
    {
        title: "GreenLeather Shoe",
        img: "/images/section-203.png",
    },
];

const dataSortBy = ["Cũ nhất", "Mới nhất", "Giá: Tăng dần", "Giá: Giảm dần"];

function Products(props) {
    const [isShowSortBy, setIsShowSortBy] = useState(false);
    const [isShowFilter, setIsShowFilter] = useState(true);
    const [sortTitle, setSortTitle] = useState("Sắp xếp theo");

    const handleToggleSortBy = () => setIsShowSortBy(!isShowSortBy);

    const handleSort = (title) => {
        setSortTitle(title);
        setIsShowSortBy(false);
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

                    <div className={cx("sort")}>
                        <div
                            onClick={handleToggleSortBy}
                            className={cx("sort-title")}
                        >
                            <span>{sortTitle}</span>
                            <div className={cx("icon-sort")}>
                                {isShowSortBy ? (
                                    <FontAwesomeIcon icon={faAngleUp} />
                                ) : (
                                    <FontAwesomeIcon icon={faAngleDown} />
                                )}
                            </div>
                        </div>
                        {isShowSortBy && (
                            <ul className={cx("sort-by")}>
                                {dataSortBy.map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleSort(item)}
                                        className={cx("sortitem-sort-by")}
                                    >
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <div className={cx("product-list")}>
                {isShowFilter && (
                    <div className="filter">
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
                )}
                <div className={cx("row")}>
                    {data.map((item, index) => (
                        <div className={cx("col-3 mb-10")} key={index}>
                            <ItemProduct item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

Products.propTypes = propTypes;

export default Products;
