import React, { useEffect } from "react";
import PropTypes from "prop-types";

import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";

import styles from "./ItemProduct.scss";

import routes from "~/config/routes";

const cx = classNames.bind(styles);

const propTypes = {};

function ItemProduct(props) {
    const { item, index } = props;

    return (
        <div className={cx("item")}>
            {index && <h3>{index}</h3>}
            <Link to={routes.products + item.slug}>
                <img src={item.avatar} alt="" />
            </Link>

            <div className={cx("bottom")}>
                <div>
                    <Link to={routes.products + item.slug}>
                        <h4 title={item.name}>{item.name}</h4>
                    </Link>
                    <span>
                        <NumberFormat
                            thousandSeparator={true}
                            displayType={"text"}
                            value={item.price.replace('.00',"")}
                        />
                        đ
                    </span>
                </div>
                <div className={cx("icon")}>
                    <FontAwesomeIcon icon={faCartPlus} />
                </div>
            </div>
        </div>
    );
}

ItemProduct.propTypes = propTypes;

export default ItemProduct;
