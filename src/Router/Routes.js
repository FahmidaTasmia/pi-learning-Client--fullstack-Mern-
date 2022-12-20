import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Register/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
           {
            path:'/',
            element:<Home></Home>
           },

           {
            path:'/login',
            element:<Login></Login>

           },
           {
            path:'/register',
            element:<Register></Register>
           },

           {
            path:'/blog',
            element:<Blog></Blog>
           },

           {
            path:'/about',
            element:<About></About>
           },
           {
            path:'/contact',
            element:<Contact></Contact>
           }
        ]
    }
]);

export default router;