import { Navbar } from "@/components/public-components";
import { ProductSlider, Slider } from "@/components/sliders";

export const HomePage = () => {
    return (
        <div className="w-full h-full bg-[#ebebeb]">
            <Navbar />
            {/* Seccion de servicios */}
            <div className=" w-full pb-20 relative">
                <Slider />
                <ProductSlider />
            </div>
        </div>
    );
};
