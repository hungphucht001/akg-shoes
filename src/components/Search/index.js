import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// import PropTypes from "prop-types";

import './Search.scss'
const propTypes = {};

function Search(props) {

    const [visible, setVisible] = useState(true);
    const [searchResult, setSearchResult] = useState([]);
    
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    return (
        <div className="search-container container">
            <div className="search-header">
                <div className="search-inner">
                    <div className="search-form">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search..."
                        />
                    </div>
                    <div className="btn-wrap">
                        <div className="wrap-icon">
                            <button className="btn btn-clear">
                                <FontAwesomeIcon icon={faSpinner} />
                            </button>
                            <button className="btn btn-loading">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                        <button className="btn btn-submit">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="search-results">
                
            </div>
        </div>
    );
}

// Search.propTypes = propTypes;

export default Search;
