export const Navbar = () => {
    return (
        <nav className="w-full bg-[#ffe600] xl:h-[110px]">
            {/* Menu interno dentro de la navbar */}
            <div className=" max-w-[1180px] mx-auto h-full flex items-center gap-1.5">
                <img src="/logo-ml.png" alt="logo mercado libre" className="h-[34px] w-12 object-contain" />
                <img src="/title.png" alt="texto-mercadolibre" className="h-[34px] w-18 object-fill" />
            </div>
        </nav>
    );
};
