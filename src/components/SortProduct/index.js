import React, { useState, memo } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faQ } from "@fortawesome/free-solid-svg-icons";

//redux
import { useDispatch, useSelector } from "react-redux";
import { sortProduct, emptyProduct } from "~/redux/actions";
import { sortProductSelector } from "~/redux/selectors"

import classNames from "classnames/bind";
import styles from "./SortProduct.scss";

const cx = classNames.bind(styles);

const propTypes = {};
const dataSortBy = ["Cũ nhất", "Mới nhất", "Giá: Tăng dần", "Giá: Giảm dần"];

function SortProduct(props) {
    const [sortTitle, setSortTitle] = useState("Sắp xếp theo");
    const [isShowSortBy, setIsShowSortBy] = useState(false);

    const dispatch = useDispatch();

    const pag = useSelector(sortProductSelector)

    const handleToggleSortBy = () => setIsShowSortBy(!isShowSortBy);

    const handleSort = (title) => {

        dispatch(emptyProduct())

        setTimeout(() => {
            switch (title) {
                case "Cũ nhất": {
                    dispatch(
                        sortProduct({
                            ...pag,
                            page: 1,
                            type: "asc",
                            col: "id",
                        })
                    );
                    break;
                }

                case "Mới nhất": {
                    dispatch(
                        sortProduct({
                            ...pag,
                            page: 1,
                            type: "desc",
                            col: "id",
                        })
                    );
                    break;
                }
                case "Giá: Tăng dần": {
                    dispatch(
                        sortProduct({
                            ...pag,
                            page: 1,
                            type: "asc",
                            col: "price",
                        })
                    );
                    break;
                }
                case "Giá: Giảm dần": {
                    dispatch(
                        sortProduct({
                            ...pag,
                            page: 1,
                            type: "desc",
                            col: "price",
                        })
                    );
                    break;
                }
                default: {
                    dispatch(
                        sortProduct({
                            ...pag,
                            page: 1,
                            type: "asc",
                            col: "id",
                        })
                    );
                    break;
                }

            }
        }, 500)

        setSortTitle(title);
        setIsShowSortBy(false);
    };
    return (
        <div className={cx("sort")}>
            <div onClick={handleToggleSortBy} className={cx("sort-title")}>
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
    );
}

SortProduct.propTypes = propTypes;

export default memo(SortProduct);
