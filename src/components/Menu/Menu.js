import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import routes from '~/config/routes'

import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import styles from './Menu.scss'
import Search from '../Search';
const cx = classNames.bind(styles);

import { useDispatch } from 'react-redux';
import { toggleCartComponent } from '~/redux/actions'
import { Modal } from 'antd';

const propTypes = {

}

function Menu(props) {

    const [user, setUser] = useState(() => {
        const userLocal = JSON.parse(localStorage.getItem('user'))
        if (userLocal) {
            return userLocal;
        }
        return {}
    });

    const dispatch = useDispatch()

    const handleShowCartComponent = () => {
        dispatch(toggleCartComponent(true))
    };

    const [visibleModelSearch, setVisibleModelSearch] = useState(false);

    const showModal = () => {
        setVisibleModelSearch(true);
    };

    const handleCancel = () => {
        setVisibleModelSearch(false);
    };

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
                <Link to={routes.home}><img src="/images/logo-akg.png" alt="logo" /></Link>
            </div>
            <div className={cx('menu-right')}>
                <ul className={cx('nav')}>
                    <li className={cx('menu-item')}>
                        <a onClick={showModal} className={cx('nav-link')}>Search</a>
                    </li>
                    {user.name ?
                        <li className={cx('menu-item')}>
                            <Link to='/me' className={cx('nav-link')}>{user.name}</Link>
                        </li>
                        :
                        <li className={cx('menu-item')}>
                            <Link to='/login' className={cx('nav-link')}>Login</Link>
                        </li>
                    }

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


    )
}

Menu.propTypes = propTypes

export default memo(Menu)
