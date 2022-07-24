import React, { memo, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import styles from './Cart.scss';
import classNames from 'classnames/bind';
import ItemCart from '../ItemCart';
import { Drawer } from 'antd';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { cartComponentSelector } from '~/redux/selectors'
import { toggleCartComponent } from '~/redux/actions'

const cx = classNames.bind(styles);

function Cart(props) {

    const [visible, setVisible] = useState(false);
    const cartComponent = useSelector(cartComponentSelector)
    const dispatch = useDispatch()

    const isShow = cartComponent.visible

    const onClose = () => {
        dispatch(toggleCartComponent(false))
    };

    useEffect(() => {
        setVisible(isShow)
    }, [dispatch, isShow]);

    return (
        <Drawer
            className='cart-component'
            closable={false}
            placement="right"
            onClose={onClose}
            visible={visible}
        >
            <div className='cart-body'>
                <div className={cx('cart-header')}>
                    <span>My cart</span>
                    <button onClick={onClose}>
                        <FontAwesomeIcon icon={faRightLong} />
                    </button>
                </div>
                <div className={cx('cart-content')}>
                    <ItemCart />
                    <ItemCart />
                    <ItemCart />
                    <ItemCart />
                    <ItemCart />
                    <ItemCart />
                    <ItemCart />
                </div>
                <div className={cx('cart-footer')}>
                    <div className={cx('wrap-total')}>
                        <span className={cx('total-title')}>Total:</span>
                        <span className={cx('total-price')}>200.000.000 đ</span>
                    </div>
                    <div className={cx('wrap-btn')}>
                        <button>Cart</button>
                        <button>Pay</button>
                    </div>
                </div>
            </div>
        </Drawer>
    );
}

export default memo(Cart);
