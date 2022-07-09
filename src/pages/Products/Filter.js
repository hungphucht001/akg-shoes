import React,{useState, memo} from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faQ } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./Products.scss";
const cx = classNames.bind(styles);

const propTypes = {
    
}

function Filter(props) {
    
    const [isShowSortBy, setIsShowSortBy] = useState(false);
    
    return (
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
    )
}

Filter.propTypes = propTypes

export default memo(Filter)
