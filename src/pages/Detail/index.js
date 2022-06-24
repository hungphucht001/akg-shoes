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
                                <img src="/images/section-201.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/section-202.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/section-203.png" />
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
                                <img src="/images/section-201.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/section-202.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/section-203.png" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className={cx("col-7")}>dqwd</div>
                </div>
            </div>
        </div>
    );
}

Detail.propTypes = propTypes;

export default Detail;
