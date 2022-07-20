import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames/bind'
import styles from './Loading.scss'

const cx = classNames.bind(styles)

const propTypes = {
    
}

function Loading(props) {
    return (
        <div className={cx('loading-container')}>
            <div className={cx('spinner')}></div>
        </div>
    )
}

Loading.propTypes = propTypes

export default Loading
