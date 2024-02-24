import { Swiper, SwiperSlide } from "swiper/react";

import { OfertaData } from "@/data/OfertasData";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { CardProductSlider } from "../public-components/Section-ofertas/CardProductSlider";
import "./swiper.css";

export const OfertaSlider = () => {
    return (
        <div className="w-full">
            <Swiper
                slidesPerView={4}
                spaceBetween={0}
                navigation={true}
                modules={[Navigation]}
                preventClicksPropagation={false}
                className=""
            >
                {OfertaData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <CardProductSlider {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
