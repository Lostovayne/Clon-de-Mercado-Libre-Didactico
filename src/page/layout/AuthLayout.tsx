import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../components/auth-components";

export const AuthLayout = (): JSX.Element => {
    return (
        <div className="min-h-screen flex flex-col ">
            <Navbar />
            <div className=" max-w-[1180px] w-full mx-auto flex-1 ">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
