import { createBrowserRouter } from "react-router-dom"
import MainLayout from '../layout/MainLayout'
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home"
import About from "../pages/About"
import Login from "../pages/Login"
import SignUp from '../pages/SignUp'
import DashboardLayout from '../layout/DashboardLayout'
import Dashboard from '../pages/Dashboard'
export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<SignUp/>
            }
        ]
    },
    {
        path:'dashboard',
        element:<DashboardLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard/>
            }
        ]
    }
])