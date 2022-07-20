import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './Footer.scss'

const cx = classNames.bind(styles)

const propTypes = {
    
}

function Footer(props) {
    return (
        <div className={cx('footer')}>
            <div className={cx('footer-top')}>
                <div className={cx('container center')}>
                    <div className={cx('logo')}>
                        <img src= 'images/logo-akg-white.png' alt='logo'/> 
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A enim ante ac porttitor eget diam turpis eget.</p>
                    <p>Privacy | Terms of Condition</p>
                </div>
            </div>
            <hr/>
            <div className={cx('footer-bottom text-center')}>
                <span>©AKG 2022. All Rights Reserved</span>
            </div>
        </div>
    )
}

Footer.propTypes = propTypes

export default Footer
