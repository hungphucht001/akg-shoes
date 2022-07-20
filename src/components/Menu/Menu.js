import React, { memo } from 'react'
import {Link} from 'react-router-dom'
import routes from '~/config/routes'

import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import styles from './Menu.scss'
const cx = classNames.bind(styles);
const propTypes = {
    
}

function Menu(props) {

    const handleClick = () =>{

    }

    return (
        <div className={cx('wrapper wrapper-menu menu-desktop')}>
            <div className={cx('menu-left')}>
                <ul className={cx('nav')}>
                    <li className={cx('menu-item')}>
                        <Link to='/stories' className={cx('nav-link')}>Stories</Link>
                    </li>
                    <li className={cx('menu-item')}>
                        <Link to='/new-in' className={cx('nav-link')}>New In</Link>
                    </li>
                    <li className={cx('menu-item')}>
                        <Link to={routes.products} className={cx('nav-link')}>All Products</Link>
                    </li>
                </ul>
            </div>
            <div className={cx('logo')}>
                <Link to={routes.home}><img src="/images/logo-akg.png" alt="logo"/></Link>
            </div>
            <div className={cx('menu-right')}>
                <ul className={cx('nav')}>
                    <li className={cx('menu-item')}>
                        <Link to={routes.search} className={cx('nav-link')}>Search</Link>
                    </li>
                    <li className={cx('menu-item')}>
                        <Link to='/wishlist' className={cx('nav-link')}>Wishlist</Link>
                    </li>
                    <li className={cx('menu-item')}>
                        <a onClick={handleClick} className={cx('nav-link')}>Cart(0)</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

Menu.propTypes = propTypes

export default memo(Menu)
