import React, { useState, memo } from 'react'
import PropTypes from 'prop-types'
import styles from './ItemCart.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove, faAdd, faMinus } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

const propTypes = {

}

function ItemCart(props) {

    const { item } = props
    const [amount, setAmount] = useState(item.amount);

    const handleDecrease = () => {
        setAmount(prev => {
            if (prev === 1) {
                return 1;
            }
            return prev - 1;
        })
    }

    const handleIncrease = () => {
        setAmount(prev => {
            return prev + 1;
        })
    }

    const handleRemove = () => {
        //dispatch action remove in store cart
    }

    return (
        <div className={cx('cart-item')}>
            <div className={cx('item-image')}>
                <img src="images/image 8.png" alt='image' />
            </div>
            <div className={cx('item-content')}>
                <h4 className={cx('item-title')}>
                    {item.name}
                </h4>
                <div className={cx('item-price')}>
                    <span>
                        {amount} x {item.price}
                    </span>
                </div>
                <div className={cx('item-amount')}>
                    <FontAwesomeIcon onClick={handleDecrease} className={cx('item-icon')} icon={faMinus} />
                    <span className={cx('amount-title')}>
                        {amount}
                    </span>
                    <FontAwesomeIcon onClick={handleIncrease} className={cx('item-icon')} icon={faAdd} />
                </div>
            </div>
            <div className={cx('item-remove')}>
                <FontAwesomeIcon onClick={handleRemove} className={cx('item-icon')} icon={faRemove} />
            </div>
        </div>
    )
}

ItemCart.propTypes = propTypes

export default memo(ItemCart)
