import { IoIosArrowForward } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MenuButton } from "./MenuButton";
import { FiUser } from "react-icons/fi";

export const MenuOptions = () => {
    return (
        <div className="max-w-sm mt-16 flex justify-center flex-col gap-7">
            <h1 className="text-4xl font-semibold text-gray-800 text-left ">
                Ingresa tu e‑mail, teléfono o usuario de Mercado Libre
            </h1>
            <span className="w-2/3 block border-b"></span>
            <div className="max-w-60 space-y-1">
                <span className="font-bold text-xs"> Reportar un problema</span>
                <MenuButton
                    text="Robo o pérdida de teléfono"
                    icon={<IoPhonePortraitOutline size={17} />}
                    iconRight={<IoIosArrowForward size={17} />}
                />
                <MenuButton
                    text="Robo de cuenta"
                    icon={<FiUser size={17} />}
                    iconRight={<IoIosArrowForward size={17} />}
                />
                <span className="text-sm text-blue-500 font-semibold cursor-pointer">
                    Necesito ayuda con otros temas
                </span>
            </div>
        </div>
    );
};
