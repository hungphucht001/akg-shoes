import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import NavBar from '../NavBar'
import {Link} from 'react-router-dom'
import Cart from '../Cart'

import classNames from 'classnames/bind'
import styles from './Header.scss'

import routes from '~/config/routes'
const cx = classNames.bind(styles)

const propTypes = {
    
}

function Header(props) {
    const [isShowCart, setIsShowCart] = useState(false);
    const handleClick = () => {
        setIsShowCart(!isShowCart)
    }

    useEffect(() => {
        const handleScroll = () =>{
            setIsShowCart(false)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    return (
        <div className={cx('header')}>
            <div className={cx('wrapper')} style={{backgroundImage: 'url("/images/background-header.png")'}}>   
                <NavBar handleClick = {handleClick} />
                <div className={cx('stuff')}></div>
                <div className={cx('title')}>
                    <h1>
                        Fashionable, quality, durable and best shoes for everyone
                    </h1>
                </div>
                <div className={cx('center')}>
                    <Link to={routes.products} className={cx('btn-shop-now')}>SHOP NOW</Link>
                </div>
                <div className={cx('container')}>
                    <div className={cx('site-box-image')}>
                        <div>
                            <img src='/images/header-1.png'/>
                        </div>
                        <div>
                            <img src='/images/header-2.png'/>
                        </div>
                        <div>
                            <img src='/images/header-3.png'/>
                        </div>
                        <div>
                            <img src='/images/header-4.png'/>
                        </div>
                    </div>
                </div>
            </div>
            <Cart handleClose={handleClick} show={isShowCart} />
        </div>
    )
}

Header.propTypes = propTypes

export default Header
