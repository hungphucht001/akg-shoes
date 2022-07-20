import React, {useState, memo} from 'react'
import PropTypes from 'prop-types'
import styles from './ItemCart.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove, faAdd, faMinus } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

const propTypes = {
    
}

function ItemCart(props) {

    const [quanlity, setquanlity] = useState(3);

    const handleMinus = () =>{
        setquanlity(prev => {
            if(prev === 1){
                console.log('xóa nha');
                return 1;
            }

            return prev - 1;
        })
    }
    const handlePlus = () =>{
        setquanlity(prev => {
            return prev + 1;
        })
    }
    const handleRemove = () =>{
        //dispatch action remove in store cart
    }
    return (
        <div className={cx('cart-item')}>
            <div className={cx('item-image')}>
                <img src="images/image 8.png" alt='image' />
            </div>
            <div className={cx('item-content')}>
                <h4 className={cx('item-title')}>
                    Giày Converse Run Star Giày Converse Run Star 
                </h4>
                <div className={cx('item-price')}>
                    <span>
                    {quanlity} x 100.000.000đ
                    </span>
                </div>
                <div className={cx('item-quanlity')}>
                    <FontAwesomeIcon onClick={handleMinus} className={cx('item-icon')} icon={faMinus} />
                    <span className={cx('quanlity-title')}>
                        {quanlity}
                    </span>
                    <FontAwesomeIcon onClick={handlePlus} className={cx('item-icon')} icon={faAdd} />
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
