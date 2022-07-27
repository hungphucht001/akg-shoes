import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind';
import styles from './NavBar.scss'
import Cart from '../../components/Cart'
import { Menu, MenuMobile } from '~/components/Menu';
import Search from '~/components/Search';

const cx = classNames.bind(styles);
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


export default NavBar
