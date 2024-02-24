import { OfertaProps } from "@/data/OfertasData";
import { EnvioFull } from "../Envio-Full";

export const CardProductSlider = ({ title, imagen, descount, price }: OfertaProps) => {
    // Función para formatear a moneda chilena
    const formatCurrency = (value: number) => {
        return value.toLocaleString("es-CL", { style: "currency", currency: "CLP" }).replace("CLP", "");
    };

    return (
        <div className="flex flex-col bg-white max-h-[440px] p-2 rounded-lg">
            <img src={imagen} alt="imagen product" className="object-contain h-48 p-2" />
            <section className="space-y-2">
                <p className="w-full overflow-hidden line-clamp-2">{title}</p>
                <span className="text-xs text-gray-500 line-through">{formatCurrency(descount)}</span>
                <div className="flex items-start gap-1">
                    <span className="text-xl font-medium text-gray-900">{formatCurrency(price)}</span>
                    <span className="text-[#00a650] text-sm font-semibold">15% OFF</span>
                </div>
                <span className="text-xs text-gray-700 font-semibold">
                    en <span className="text-[#00a650]"> 36x {formatCurrency(4608)} sin interés</span>
                </span>
                <EnvioFull />
            </section>
        </div>
    );
};
