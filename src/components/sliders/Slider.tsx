// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const SliderImages = [
    "/slider/slider-1.webp",
    "/slider/slider-2.webp",
    "/slider/slider-3.webp",
    "/slider/slider-4.webp",
    "/slider/slider-5.webp",
];

export const Slider = () => {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper w-full h-full block relative "
        >
            {SliderImages.map((image, index) => (
                <SwiperSlide className="w-full h-full  bg-red-20" key={index}>
                    <img src={image} alt="slider" className="" />
                </SwiperSlide>
            ))}
            <div className="w-full  h-16 absolute z-20 bottom-0 left-0 right-0 bg-gradient-to-b from-[#ebebeb]/0 to-[#ebebeb]"></div>
        </Swiper>
    );
};
