import { Navigate, createBrowserRouter } from "react-router-dom";
import { Carrito, Layout, HomePage, AuthLayout, Login, Register } from "../page";

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
                path: "carrito",
                element: <Carrito />,
            },
        ],
    },

    {
        path: "/auth",
        element: <AuthLayout />,
        errorElement: <div>Error</div>,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "*",
                element: <Navigate to="/auth/login" />,
            },
        ],
    },
]);
