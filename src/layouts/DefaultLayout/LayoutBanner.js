import React from 'react'

import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'

const propTypes = {
    
}

function LayoutBanner({children}) {
    return (
        <div>
            <Header/>
           {children}
           <Footer/>
        </div>
    )
}

LayoutBanner.propTypes = propTypes

export default LayoutBanner
