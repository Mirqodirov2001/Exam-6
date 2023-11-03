import { createBrowserRouter } from 'react-router-dom';
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Layout1 from "../Dashboard/Layout";
import Students from "../Dashboard/Oquvchilar";
import Dhome from "../Dashboard/Dhome";
import Kurs from "../Dashboard/Kurslar";
import Buyurtmachilar from "../Dashboard/Buyurtmachilar";
import Xizmatlar from "../Dashboard/Xizmatlar";

import App from "../App";
import Error from "../pages/Error";
import Home from './../pages/Home';
import User from "../Dashboard/User";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/signin",
                element: <SignIn />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
        ],
    },
    {
        path: "/dashboard",
        element: <Layout1 />,
        children: [
            {
                path: "/dashboard",
                element: <Dhome />,
            },
            {
                path: "/dashboard/oquvchilar",
                element: <Students />,
            },
            {
                path: "/dashboard/kurslar",
                element: <Kurs />,
            },
            {
                path: "/dashboard/buyurtmachilar",
                element: <Buyurtmachilar />,
            },

            {
                path: "/dashboard/xizmatlar",
                element: <Xizmatlar />,
            },
            {
                path: "/dashboard/user",
                element: <User />
            }
        ],
    },
]);

export default router;