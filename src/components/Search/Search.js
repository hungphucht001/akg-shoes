import React, { useRef, useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSpinner,
    faXmark,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import './Search.scss';
import { useDebounce } from '~/hooks';

import * as apiProduct from '~/services/productApi'
import SearchItem from '../SearchItem';

function Search(props) {
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');

    const debouncedValue = useDebounce(value, 100);

    const inputRef = useRef()

    const handleChangeValue = (e) => {
        setValue(e.target.value)
    }

    const handleClear = () => {
        setValue('')
        inputRef.current.focus()
    }

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true)
            const results = await apiProduct.search(debouncedValue)
            setSearchResult(results)
            setLoading(false)
        }

        fetchApi();
    }, [debouncedValue]);


    return (
        <div className="search-container container">
            <div className="search-header">
                <div className="search-inner">
                    <div className="search-form">
                        <input
                            ref={inputRef}
                            value={value}
                            type="text"
                            className="search-input"
                            placeholder="Search..."
                            onChange={handleChangeValue}
                        />
                    </div>
                    <div className="btn-wrap">
                        <div className="wrap-icon">
                            {loading && (
                                <button className="btn btn-loading">
                                    <FontAwesomeIcon icon={faSpinner} />
                                </button>
                            )}
                            {value.length > 0 && (
                                <button onClick={handleClear} className="btn btn-clear">
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            )}
                        </div>
                        <button className="btn btn-submit">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="search-results">
                {searchResult && searchResult.map((item, index) => <SearchItem item={item} key={index} />)}
            </div>
        </div>
    );
}

export default Search;
