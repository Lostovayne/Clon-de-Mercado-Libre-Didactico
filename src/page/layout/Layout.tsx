import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <div className="bg-[#ebebeb] min-h-screen">
            <Outlet />
        </div>
    );
};
