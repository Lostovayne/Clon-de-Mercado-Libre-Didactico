import { Ofertas } from "@/components/public-components/Section-ofertas";
import { ProductSlider, Slider } from "@/components/sliders";

export const HomePage = () => {
    return (
        <div className="w-full h-full bg-[#ebebeb] pb-10">
            {/* Seccion de servicios */}
            <div className=" w-full pb-20 relative">
                <Slider />
                <ProductSlider />
            </div>
            <Ofertas />
        </div>
    );
};
