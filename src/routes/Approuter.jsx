import React from 'react'
import Landing from '../pages/LandingPage/Landing';
import Loading from '../pages/LoadingPage/Loading';
// import Home from '../pages/Home/Home';
import NotFound from '../pages/PageNotFound/PageNotFound';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Editor from '../pages/Editor/Editor';
import Output from '../components_2/Rightcontent/Output';
import Explain from '../components_2/Rightcontent/Explain';
import Visualization from '../components_2/Rightcontent/Visualization';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />
    },
    
    {
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
    }, {
        path: "/codeEditor",
        element: <Editor />,
        children: [
            {
                index:true,
                element: <Output />
            }, {
                path: "Explain",
                element: <Explain />
            }, {
                path: "Visualization",
                element: <Visualization />
            },
        ]
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
