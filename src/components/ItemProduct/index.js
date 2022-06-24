import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

import classNames from 'classnames/bind'
import styles from './ItemProduct.scss'
const cx = classNames.bind(styles)

const propTypes = {
    
}

function ItemProduct(props) {

    const { item, index } = props

    return (
        <div className={cx('item')}>
           {index &&  <h3>{index}</h3>}
           <Link to='/detail'><img src={item.img} alt=''/></Link>
            
            <div className={cx('bottom')}>
                <div>
                    <Link to='/detail'><h4>{item.title}</h4></Link>
                    <span>$39.00</span>
                </div>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faCartPlus} />
                </div>
            </div>
        </div>
    )
}

ItemProduct.propTypes = propTypes

export default ItemProduct
