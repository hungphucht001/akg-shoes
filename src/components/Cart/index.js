import React, { memo, useState, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import styles from './Cart.scss';
import classNames from 'classnames/bind';
import ItemCart from '../ItemCart';
import { Drawer } from 'antd';
import { useNavigate } from 'react-router-dom';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { cartComponentSelector } from '~/redux/selectors'
import { toggleCartComponent } from '~/redux/actions'

const cx = classNames.bind(styles);

function Cart(props) {

    const [visible, setVisible] = useState(false);

    const [data, setData] = useState(JSON.parse(localStorage.getItem('carts')) || []);
    const cartComponent = useSelector(cartComponentSelector)
    const dispatch = useDispatch()
    const isShow = cartComponent.visible

    const navigate = useNavigate()

    const onClose = () => {
        dispatch(toggleCartComponent(false))
    };

    useEffect(() => {
        setVisible(isShow)
    }, [dispatch, isShow]);

    const total = useMemo(() => {
        return data.reduce((total, item) => {
            return total + (item.price * item.amount)
        }, 0)
    }, [])

    const handleToCart = () => {
        dispatch(toggleCartComponent(false))
        setTimeout(() => {
            navigate('/cart')
        }, 500)
    }
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
                    {
                        data && data.map((item, index) => <ItemCart item={item} key={item.slug + index} />)
                    }
                </div>
                {data && <div className={cx('cart-footer')}>
                    <div className={cx('wrap-total')}>
                        <span className={cx('total-title')}>Total:</span>
                        <span className={cx('total-price')}>{total}đ</span>
                    </div>
                    <div className={cx('wrap-btn')}>
                        <button onClick={handleToCart}>Cart</button>
                        <button>Pay</button>
                    </div>
                </div>}
            </div>
        </Drawer>
    );
}

export default memo(Cart);
