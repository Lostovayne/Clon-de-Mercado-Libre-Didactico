export const Footer = () => {
    return (
        <div className="p-7 flex justify-between bg-[#f5f5f5]">
            <div className="text-xs flex gap-1 justify-start">
                <a href="#" className="text-blue-500 text-xs font-semibold">
                    Cómo cuidamos tu privacidad
                </a>
                <span>-</span>
                <p className="text-gray-500">Copyright © 1999-2024 MercadoLibre Chile Ltda.</p>
            </div>

            <div className="text-xs flex items-center gap-1 ">
                <p className="text-gray-500">Protegido por reCAPTCHA</p>
                <span>-</span>
                <p>Privacidad</p>
                <span>-</span>
                <p>Condiciones</p>
            </div>
        </div>
    );
};
