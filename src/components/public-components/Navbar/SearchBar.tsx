import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
export const SearchBar = () => {
    return (
        <div>
            <div className="bg-white flex items-center gap-2 px-3 min-w-[500px] flex-1 ">
                <Input
                    placeholder="Buscar productos,marcas y más..."
                    className="ring-none ring-0  border-none outline-none focus:ring-0 focus-visible:ring-0 w-full"
                    type="text"
                />
                <CiSearch className="h-6 w-6 text-gray-600 " />
            </div>
            <ul>
                <li className="*:text-sm *:text-gray-700 *:px-1 *:mx-1  mt-4">
                    <a href="#">Categorías</a>
                    <a href="#">Ofertas</a>
                    <a href="#">Historial</a>
                    <a href="#">Supermercado</a>
                    <a href="#">Moda</a>
                    <a href="#">Mercado Play</a>
                    <a href="#">Vender</a>
                    <a href="#">Ayuda</a>
                </li>
            </ul>
        </div>
    );
};
