import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';

import styles from './ItemProduct.scss';

import routes from '~/config/routes';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

const cx = classNames.bind(styles);

const propTypes = {};

function ItemProduct(props) {
    const { item, index } = props;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const handleLoading = setTimeout(() => {
            setLoading(false)
        }, 700)
        return () => {
            clearTimeout(handleLoading)
        }
    }, [])
    return (
        <>{index && <h3>{index}</h3>}
            <Card
                hoverable
                loading={loading}

            >
                <Link
                    style={{
                        padding: 15,
                    }}
                    to={routes.products + item.slug}
                >
                    <img alt={item.avatar} src={item.avatar} />
                </Link>
                <Meta title={item.name} description={
                    <span className='price'>
                        <NumberFormat
                            thousandSeparator={true}
                            displayType={"text"}
                            value={item.price.replace('.00', "")}
                        />
                        đ
                    </span>
                } />
            </Card></>
    );
}

ItemProduct.propTypes = propTypes;

export default ItemProduct;
