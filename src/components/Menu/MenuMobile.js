import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import routes from '~/config/routes'

import { useDispatch } from 'react-redux';
import { toggleCartComponent } from '~/redux/actions'

import classNames from 'classnames/bind';
import styles from './Menu.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClock, faRightLeft, faRightLong } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'antd';
import Search from '../Search';
const cx = classNames.bind(styles);
const propTypes = {

}

function MenuMobile(props) {

    const [isShow, setIsShow] = useState(false);

    const dispatch = useDispatch()

    const handleShowCartComponent = () => {
        dispatch(toggleCartComponent(true))
    };

    const handleShow = () => {
        setIsShow(!isShow)
    }
    const [visibleModelSearch, setVisibleModelSearch] = useState(false);

    const showModal = () => {
        setVisibleModelSearch(true);
    };

    const handleCancel = () => {
        setVisibleModelSearch(false);
    };

    return (
        <div className={cx('wrapper wrapper-menu menu-mobile')}>
            <div className={cx('logo')}>
                <Link to={routes.home}><img src="/images/logo-akg.png" alt="logo" /></Link>
            </div>
            <div className={cx('menu')}>
                <div onClick={handleShow} className={cx('toggle-menu')}>
                    <FontAwesomeIcon className={cx('icon-bars')} icon={faBars} />
                </div>
                <div className={cx('menu-content', isShow && 'show')}>
                    <div className={cx('menu-header')}>
                        <h4>
                            Menu
                        </h4>
                        <FontAwesomeIcon onClick={handleShow} icon={faRightLong} />
                    </div>
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
                        <li className={cx('menu-item')}>
                            <a onClick={showModal} className={cx('nav-link')}>Search</a>
                        </li>
                        <li className={cx('menu-item')}>
                            <Link to='/wishlist' className={cx('nav-link')}>Wishlist</Link>
                        </li>
                        <li className={cx('menu-item')}>
                            <a onClick={handleShowCartComponent} className={cx('nav-link')}>Cart(0)</a>
                        </li>
                    </ul>
                    <Modal
                        visible={visibleModelSearch}
                        width={1000}
                        closable={false}
                        onCancel={handleCancel}
                        footer={null}
                    >
                        <Search />
                    </Modal>
                </div>
            </div>
        </div>
    )
}

MenuMobile.propTypes = propTypes

export default memo(MenuMobile)
