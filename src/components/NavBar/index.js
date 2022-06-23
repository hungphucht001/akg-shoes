import React,{useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import styles from './NavBar.scss'

const cx = classNames.bind(styles);

const propTypes = {
    
}
const NavBar = (props=> {

    const {handleClick} = props

    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const handlerScroll = ()=> setIsScroll(window.scrollY >= 20)
        window.addEventListener('scroll', handlerScroll)
        return () => window.removeEventListener('scroll', handlerScroll)
    },[]);

    return (
        <div className={cx('nav-bar', isScroll? 'scroll':'')}>
            <div className={cx('wrapper')}>
                <div className={cx('menu-left')}>
                    <ul className={cx('nav')}>
                        <li className={cx('menu-item')}>
                            <Link to='/stories' className={cx('nav-link')}>Stories</Link>
                        </li>
                        <li className={cx('menu-item')}>
                            <Link to='/new-in' className={cx('nav-link')}>New In</Link>
                        </li>
                        <li className={cx('menu-item')}>
                            <Link to='/products' className={cx('nav-link')}>All Products</Link>
                        </li>
                    </ul>
                </div>
                <div className={cx('logo')}>
                    <Link to='/'><img src="/images/logo-akg.png" alt="logo"/></Link>
                </div>
                <div className={cx('menu-right')}>
                    <ul className={cx('nav')}>
                        <li className={cx('menu-item')}>
                            <Link to='/search' className={cx('nav-link')}>Search</Link>
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
        </div>
    )

});

NavBar.propTypes = propTypes

export default NavBar
