import {  createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Home/Products";
import Login from "../Pages/Home/Login";
import Register from "../Pages/Home/Register";
import Details from "../Pages/Home/Details";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/products',
            element:<Products/>
        },
        {
            path:'/details',
            element:<Details/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        },

    ]
  },
]);

