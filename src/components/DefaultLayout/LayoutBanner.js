import React from 'react'

import PropTypes from 'prop-types'
import Header from '../Header'

const propTypes = {
    
}

function LayoutBanner({children}) {
    return (
        <div>
            <Header/>
           {children}
        </div>
    )
}

LayoutBanner.propTypes = propTypes

export default LayoutBanner
