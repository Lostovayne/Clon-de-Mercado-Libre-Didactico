import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="w-full bg-[#fff059] h-[56px]">
            {/* Menu interno dentro de la navbar */}
            <div className=" max-w-[1180px] mx-auto h-full ">
                <Link to="/" className="flex items-center gap-1.5 h-full">
                    <img src="/logo-ml.png" alt="logo mercado libre" className="h-[34px] w-12 object-contain" />
                    <img src="/title.png" alt="texto-mercadolibre" className="h-[34px] w-18 object-fill" />
                </Link>
            </div>
        </nav>
    );
};
