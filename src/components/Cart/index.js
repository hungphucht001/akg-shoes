import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import styles from './Cart.scss'
import classNames from 'classnames/bind'


const cx = classNames.bind(styles)

const propTypes = {
    
}

function Cart(props) {
    
    const {show, handleClose} = props

    return (
        <div className={cx('cart-component', show ? 'show':'')}>
            <div className={cx('cart-header')}>
                <span>My cart</span>
                <button onClick={handleClose}><FontAwesomeIcon icon={faRightLong} /></button>
            </div>
        </div>
    )
}

Cart.propTypes = propTypes

export default Cart
