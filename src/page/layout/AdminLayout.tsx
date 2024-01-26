import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
    return (
        <>
            <nav>Navbar</nav>
            <Outlet />
            <footer>Footer</footer>
        </>
    );
};
