import React from 'react'
import Landing from '../pages/LandingPage/Landing';
import Loading from '../pages/LoadingPage/Loading';
import Home from '../pages/Home/Home';
import NotFound from '../pages/PageNotFound/PageNotFound';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Editor from '../pages/Editor/Editor';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />
    },
    {
        path: "/editor",
        element: <Home />
    }, {
        path: "/codeEditor",
        element: <Editor />
    },
    {
        path: "/loading",
        element: <Loading />
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

const Approuter = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Approuter
