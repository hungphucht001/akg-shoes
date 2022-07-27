import React from 'react'
import { Link } from 'react-router-dom'
import './SearchItem.scss'

function SearchItem(props) {

    const { item } = props

    return (
        <Link to={`/products/${item.slug}`} >
            <div className='search-result'>
                <div className='single-image'>
                    <img src={item.avatar} />
                </div>
                <div className='content'>
                    <h3>{item.name}</h3>
                </div>
            </div>
        </Link>
    )
}

export default SearchItem
