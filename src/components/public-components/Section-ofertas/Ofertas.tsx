import { OfertaSlider } from "@/components/sliders/OfertaSlider";
import { EnvioFull } from "../Envio-Full";

export const Ofertas = () => {
    return (
        <div className="mt-32 max-w-[1200px] mx-auto w-full  flex h-full gap-4">
            {/* section ofertas del dia */}
            <div className="  flex flex-col max-w-[338px]  bg-white max-h-[440px] shadow p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900">Ofertas del día</h3>
                <img src="./Ofertas-products/producto-dia.webp" alt="imagen product" className="object-contain h-2/3  p-2" />
                <footer className="space-y-2">
                    <a href="#" className="text-base font-normal hover:text-blue-600 block">
                        Silla Ejecutiva Magnux Ergonómica Negra Con Tapizado Mesh Color Negro
                    </a>

                    <span className="text-base text-gray-500 line-through ">$197.000</span>
                    <div className="flex items-start gap-1">
                        <span className="text-2xl font-medium">$165.900</span>
                        <span className="text-[#00a650] text-base font-medium">15% OFF</span>
                    </div>
                    <span className="text-sm text-gray-700 font-semibold">en 36x $4.608</span>
                    <EnvioFull />
                </footer>
            </div>

            {/* section ofertas general */}
            <div className="bg-white w-full max-h-[440px] shadow p-5 rounded-lg max-w-[840px] relative z-50 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-gray-900">Ofertas</h3>
                    <span className="text-sm font-semibold text-blue-500">Mostrar todas las ofertas</span>
                </div>
                <OfertaSlider />
            </div>
        </div>
    );
};
