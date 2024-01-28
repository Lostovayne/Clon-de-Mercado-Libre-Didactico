import { IoIosArrowForward } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MenuButton } from "./MenuButton";

export const MenuOptions = () => {
    return (
        <div className="max-w-sm mt-16 flex justify-center flex-col gap-7">
            <h1 className="text-4xl font-semibold text-gray-800 text-left ">
                Ingresa tu e‑mail, teléfono o usuario de Mercado Libre
            </h1>
            <span className="w-2/3 block border-b"></span>
            <div className="max-w-56 space-y-1">
                <span className="font-bold text-xs"> Reportar un problema</span>
                <MenuButton
                    text="Robo o Pérdida de Teléfono"
                    icon={<IoPhonePortraitOutline size={16} />}
                    iconRight={<IoIosArrowForward size={16} />}
                />
                <MenuButton
                    text="Robo o Pérdida de Teléfono"
                    icon={<IoPhonePortraitOutline size={16} />}
                    iconRight={<IoIosArrowForward size={16} />}
                />
                <span className="text-sm text-blue-500 font-semibold cursor-pointer">
                    Necesito ayuda con otros temas
                </span>
            </div>
        </div>
    );
};
