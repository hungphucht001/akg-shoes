import React,{useState, memo} from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faQ } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./Products.scss";
const cx = classNames.bind(styles);

const propTypes = {
    
}
const dataSortBy = ["Cũ nhất", "Mới nhất", "Giá: Tăng dần", "Giá: Giảm dần"];

function Sort(props) {
    const [sortTitle, setSortTitle] = useState("Sắp xếp theo");
    const [isShowSortBy, setIsShowSortBy] = useState(false);

    const handleToggleSortBy = () => setIsShowSortBy(!isShowSortBy);

    const handleSort = (title) => {
        setSortTitle(title);
        setIsShowSortBy(false);
    };
    return(

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
    )    
    
}

Sort.propTypes = propTypes

export default memo(Sort)
