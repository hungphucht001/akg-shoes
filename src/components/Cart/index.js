import React, {memo} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import styles from './Cart.scss'
import classNames from 'classnames/bind'
import ItemCart from '../ItemCart'


const cx = classNames.bind(styles)

const propTypes = {
    
}

function Cart(props) {
    const {show, onClose} = props
    return (
        <div className={cx('cart-component', show ? 'show':'')}>
            <div className={cx('cart-header')}>
                <span>My cart</span>
                <button onClick={onClose}><FontAwesomeIcon icon={faRightLong} /></button>
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
                    <span className={cx('total-title')}>
                        Total: 
                    </span>
                    <span  className={cx('total-price')}>
                        200.000.000 đ
                    </span>
                </div>
                <div className={cx('wrap-btn')}>
                    <button>
                        Cart
                    </button>
                    <button>
                        Pay
                    </button>
                </div>
            </div>
        </div>
    )
}

Cart.propTypes = propTypes

export default memo(Cart)
