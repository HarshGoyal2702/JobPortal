import React from 'react'
import App from "../App"
import Home from "../pages/Home"
import About from "../pages/About"
import {createBrowserRouter} from "react-router-dom"
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {path:"/",
                element:<Home/>
            }
        ]
    }
])

export default router;