import React from 'react'

import "swiper/css";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import {Scrollbar } from "swiper";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

import PropTypes from 'prop-types'

import classNames from 'classnames/bind'
import styles from './Home.scss'

const cx = classNames.bind(styles)

const propTypes = {
    
}

const data = [
    {
        title: 'Athletic Shoe',
        img: '/images/section-201.png'
    },
    {
        title: 'Maroon Wedget',
        img: '/images/section-202.png'
    },
    {
        title: 'GreenLeather Shoe',
        img: '/images/section-203.png'
    },
    {
        title: 'Athletic Shoe',
        img: '/images/section-201.png'
    },
    {
        title: 'Maroon Wedget',
        img: '/images/section-202.png'
    },
    {
        title: 'GreenLeather Shoe',
        img: '/images/section-203.png'
    }
]


const dataBrands = [
    {
        img: '/images/image 10.png'
    },
    {
        img: '/images/image 11.png'
    },
    {
        img: '/images/image 12.png'
    },
    {
        img: '/images/image 13.png'
    },
    {
        img: '/images/image 15.png'
    }
]

function Home(props) {
    return (
        <div className={cx('home')}>
            <div className={cx('wrapper')}>
                <div className={cx('section container')}>
                    <div className={cx('title')}>
                        <h1>
                            2022 Collection
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at nunc elit in porttitor tortor nulla.
                        </p>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('item')}>
                            <img src='/images/section-1.png' />
                            <h1>_For Men</h1>
                        </div>
                        <div className={cx('item')}>
                            <img src='/images/section-2.png'/>
                            <h1>_For Women</h1>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={cx('section container mt-100')}>
                    <div className={cx('title')}>
                        <h1>
                            2022 New Arrivals
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at nunc elit in porttitor tortor nulla.
                        </p>
                    </div>
                    <Swiper
                    slidesPerView={4}
                    spaceBetween={25}
                        scrollbar={{
                            hide: true,
                        }}
                        modules={[Scrollbar]}
                        className="mySwiper"
                    >
                        {
                            data.map((item, index)=>
                                {
                                    index = (index +1) < 10 ? `00${index + 1}`: `0${index +1}`
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className={cx('item')}>
                                                <h3>
                                                    {index}
                                                </h3>
                                                <img src={item.img} />
                                                <div className={cx('bottom')}>
                                                    <div>
                                                        <h4>{item.title}</h4>
                                                        <span>$39.00</span>
                                                    </div>
                                                    <div className={cx('icon')}>
                                                        <FontAwesomeIcon icon={faCartPlus} />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                            )
                        }
                    </Swiper>
                </div>
                <div className={cx('section offer')}>
                    <div className={cx('inner-offer')}>
                        <div className={cx('container')}>
                            <div className={cx('title')}>
                                <span>1 June - 10 June 2022</span>
                                <h1>
                                    Limited time offer
                                </h1>
                                <h4>Get 20% off on every products</h4>
                                <p>
                                    Spend minimal $100 get 30% off voucher code for your next purchase
                                </p>
                            </div>
                        </div>
                        <div className={cx('site-box-image')}>
                            <div>
                                <img src='/images/offer (1).png'/>
                            </div>
                            <div>
                                <img src='/images/offer (2).png'/>
                            </div>
                            <div>
                                <img src='/images/offer (3).png'/>
                            </div>
                            <div>
                                <img src='/images/offer (4).png'/>
                            </div>
                            <div>
                                <img src='/images/offer (5).png'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('section container brands mt-100')}>
                    <div className={cx('title')}>
                        <h1>
                            Our Trending brands
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at nunc elit in porttitor tortor nulla.
                        </p>
                    </div>
                    <Swiper
                    slidesPerView={5}
                    spaceBetween={25}
                        scrollbar={{
                            hide: true,
                        }}
                        modules={[Scrollbar]}
                        className="mySwiper"
                    >
                        {
                            dataBrands.map((item, index)=>
                                {
                                    index = (index +1) < 10 ? `00${index + 1}`: `0${index +1}`
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className={cx('item')}>
                                                <img src={item.img}/>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                            )
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

Home.propTypes = propTypes

export default Home
