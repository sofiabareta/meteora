'use client'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import ResponsiveImage from "@/app/common/utils/ResponsiveImage";

export default function Banner() {
    const BANNER_IMAGES_QUANTITY = 3
    return (
        <>
        <Swiper className="mySwiper" loop={true}>
                {
                    Array.from(Array(BANNER_IMAGES_QUANTITY).keys()).map(item => {
                        return (
                            <SwiperSlide key={item}>
                                <ResponsiveImage imageObj={{
                                    mobile: `assets/banner/Banner_carousel_${item + 1}_375.jpg`, 
                                    tablet: `assets/banner/Banner_carousel_${item + 1}_768.jpg`,
                                    desktop: `assets/banner/Banner_carousel_${item + 1}_1440.jpg` 
                                }}/>
                            </SwiperSlide>
                        )
                    })
                }
        </Swiper>
        </>
    );
}