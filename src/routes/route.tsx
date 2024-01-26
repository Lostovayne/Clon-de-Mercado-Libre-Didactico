import { createBrowserRouter } from "react-router-dom";
import { Carrito, Layout, HomePage, AuthLayout } from "../page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <div>Error</div>,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/carrito",
                element: <Carrito />,
            },
        ],
    },

    {
        path: "/auth",
        element: <AuthLayout />,
        errorElement: <div>Error</div>,
        children: [],
    },
]);
