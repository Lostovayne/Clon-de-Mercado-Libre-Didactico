import { PiShoppingCartLight } from "react-icons/pi";
import { Link } from "react-router-dom";

export const LoginAndCart = () => {
    return (
        <div className="flex flex-col max-w-80 ">
            <div>
                <img src="diney-promo.webp" alt="imagen Disney" />
            </div>
            <ul className="mt-5">
                <li className="flex items-center gap-4 text-sm text-gray-700">
                    <Link to="/auth/register">Crea tu Cuenta</Link>
                    <Link to="/auth/login">Ingresa</Link>
                    <Link to="/cart"> Mis Compras </Link>
                    <PiShoppingCartLight className="w-5 h-5 text-gray-700" />
                </li>
            </ul>
        </div>
    );
};
