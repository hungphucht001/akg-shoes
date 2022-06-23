import React from 'react'

import PropTypes from 'prop-types'
import NavBar from '../NavBar'
import classNames from 'classnames/bind'
import styles from '../Header/Header.scss'
const cx = classNames.bind(styles)

const propTypes = {
    
}

function DefaultLayout({children}) {
    return (
        <div className={cx('wrapper')}>   
            <NavBar/>
            <div className={cx('stuff')}></div>
            {children}
        </div>
    )
}

DefaultLayout.propTypes = propTypes

export default DefaultLayout
