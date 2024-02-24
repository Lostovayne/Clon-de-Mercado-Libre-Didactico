import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./swiper.css";

import { ServiceData } from "@/data/ServiceData";
import { FreeMode, HashNavigation, Navigation } from "swiper/modules";
import { CardSliderProduct } from "./CardSliderProduct";

export const ProductSlider = () => {
    return (
        <div className="max-w-[1200px] mx-auto absolute  pb-10 -bottom-28 left-1/2 transform -translate-x-1/2 z-50  ">
            <Swiper
                slidesPerView={6}
                spaceBetween={15}
                freeMode={true}
                hashNavigation={{
                    watchState: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[FreeMode, Navigation, HashNavigation]}
                className="mySwiper w-full px-9"
            >
                {ServiceData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CardSliderProduct
                            title={item.title}
                            img={item.img}
                            parrafo={item.parrafo}
                            textButton={item.textButton}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
