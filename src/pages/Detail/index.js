import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

import PropTypes from "prop-types";

import styles from "./Detail.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const propTypes = {};

function Detail(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className={cx("detail")}>
            <div className={cx("container")}>
                <div className={cx("row")}>
                    <div className={cx("col-5")}>
                    <Swiper
                            style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                            }}
                            loop={true}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                                <img src="/images/section-201.png" alt=""/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/section-202.png" alt=""/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/section-203.png" alt=""/>
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            //onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="/images/section-201.png" alt=""/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/section-202.png" alt=""/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/section-203.png" alt=""/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className={cx("col-7")}>
                        <div className={cx("wrap-content")}>
                            <div className={cx('name')}>
                                <h2>Copa Sense.3 Firm Ground Boots</h2>
                            </div>
                            <div className={cx("price")}>
                                <span className={cx("sale")}>1,900,000 đ</span>
                                <span>1,140,000 đ</span>
                            </div>
                            <div className={cx('sizes')}>
                                <h4>Available sizes</h4>
                                <div className={cx('list-size')}>
                                    {/* list size */}
                                </div>
                            </div>
                            <div className={cx('amount')}>
                                <span className={cx('btn decrease')}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </span>
                                <span className={cx('number')}>
                                    1
                                </span>
                                <span className={cx('btn increase')}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Detail.propTypes = propTypes;

export default Detail;
