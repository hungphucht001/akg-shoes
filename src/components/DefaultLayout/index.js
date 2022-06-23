import React from 'react'

import PropTypes from 'prop-types'
import Header from '../Header'

const propTypes = {
    
}

function DefaultLayout({children}) {
    return (
        <div>
            <Header/>
           {children}
        </div>
    )
}

DefaultLayout.propTypes = propTypes

export default DefaultLayout
