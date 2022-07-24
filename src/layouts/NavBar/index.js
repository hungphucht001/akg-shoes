import React, { useState, useEffect, useRef, useCallback, useInsertionEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import styles from './NavBar.scss'
import routes from '~/config/routes'
import Cart from '../../components/Cart'
import { Menu, MenuMobile } from '~/components/Menu';
import Search from '~/components/Search';

const cx = classNames.bind(styles);

const propTypes = {

}
const NavBar = (props => {

    const [isShowSearch, setIsShowSearch] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    const [menu, setMenu] = useState(
        window.innerWidth > 768 ? <Menu /> : <MenuMobile />
    );

    useEffect(() => {
        setIsScroll(window.scrollY >= 20)
        const handleScroll = () => {
            setIsScroll(window.scrollY >= 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768)
                setMenu(<MenuMobile />)
            else setMenu(<Menu />)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return (
        <div className={cx('nav-bar', isScroll ? 'scroll' : '')}>
            {menu}
            <Cart />
            {isShowSearch && <Search />}
        </div>
    )
});

NavBar.propTypes = propTypes

export default NavBar
