import { LogosLocation } from "..";
import { LoginAndCart } from "./LoginAndCart";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
    return (
        <nav className="w-full bg-[#ffe600] xl:h-[110px] ">
            {/* Menu interno dentro de la navbar */}
            <div className="max-w-[1180px] mx-auto h-full flex items-center justify-between">
                <LogosLocation />
                <SearchBar />
                <LoginAndCart />
            </div>
        </nav>
    );
};
