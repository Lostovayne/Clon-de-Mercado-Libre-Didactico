import { Navigate, createBrowserRouter } from "react-router-dom";
import { Carrito, Layout, HomePage, AuthLayout, Login, Register, Error } from "../page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
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
        errorElement: <Error />,
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
