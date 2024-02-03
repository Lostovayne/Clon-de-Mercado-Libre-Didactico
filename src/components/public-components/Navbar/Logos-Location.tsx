import { CiLocationOn } from "react-icons/ci";

export const LogosLocation = () => {
    return (
        <div className="h-full flex flex-col items-center py-2">
            <div className=" h-full flex items-center gap-1.5">
                <img src="/logo-ml.png" alt="logo mercado libre" className="h-[34px] w-12 object-contain" />
                <img src="/title.png" alt="texto-mercadolibre" className="h-[34px] w-18 object-fill" />
            </div>
            <div className="flex items-center  py-1 px-2 rounded-lg border border-transparent hover:border hover:cursor-pointer hover:border-gray-600/20">
                <CiLocationOn className="w-8 h-8 mb-1 text-gray-700" />
                <div className="flex flex-col items-center  ">
                    <span className="text-xs text-gray-500">Ingresa tu </span>
                    <span className="text-xs text-gray-700">ubicación</span>
                </div>
            </div>
        </div>
    );
};
