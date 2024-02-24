import { Navbar } from "@/components/public-components";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <div className="bg-[#ebebeb] min-h-screen">
            <Navbar />
            <Outlet />
            {/* Footer */}
        </div>
    );
};
