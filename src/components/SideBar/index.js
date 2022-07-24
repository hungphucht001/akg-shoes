import React, { useState, memo } from 'react';
import NumberFormat from "react-number-format";

//redux
import { useDispatch, useSelector } from 'react-redux';
import { sortProduct, emptyProduct } from '~/redux/actions';
import { sortProductSelector } from '~/redux/selectors';

import classNames from 'classnames/bind';
import styles from './SideBar.scss';
import { Radio, Slider } from 'antd';

const propTypes = {};

function SideBar(props) {
    const [value, setValue] = useState('men');
    const [inputValuePrice, setInputValuePrice] = useState([50000, 5000000]);

    const dispatch = useDispatch();
    const pag = useSelector(sortProductSelector);

    const onChangePrice = (newValue) => {
        setInputValuePrice(newValue);
    };

    const formatter = (value) => {
        return `${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').replace('.00', '')} đ`;
    };

    const onChange = (e) => {
        const val = e.target.value;
        setValue(val);
        dispatch(emptyProduct());

        setTimeout(() => {
            dispatch(
                sortProduct({
                    ...pag,
                    s: val === 'women' ? 2 : 1,
                }),
            );
        }, 1000);
    };

    return (
        <div className="filter">
            <div className="filter-title mb-10">
                <h4>Category</h4>
            </div>
            <Radio.Group className='radio-group' onChange={onChange} value={value}>
                <Radio value={'women'}>Women's shoes</Radio>
                <Radio value={'men'}>Men's shoes</Radio>
            </Radio.Group>
            <div className="filter-title mt-20 mb-10">
                <h4>Price</h4>
            </div>
            <div>
                <Slider
                    onChange={onChangePrice}
                    tipFormatter={formatter}
                    min={50000}
                    max={5000000}
                    range
                    defaultValue={inputValuePrice}
                />
                <div className='limit_price'>
                    <span>
                        <NumberFormat
                            thousandSeparator={true}
                            displayType={"text"}
                            value={inputValuePrice[0]}
                        />
                        đ
                    </span>
                    <span className='space'>-</span>
                    <span>
                        <NumberFormat
                            thousandSeparator={true}
                            displayType={"text"}
                            value={inputValuePrice[1]}
                        />
                        đ
                    </span>
                </div>
            </div>
        </div>
    );
}

SideBar.propTypes = propTypes;

export default memo(SideBar);