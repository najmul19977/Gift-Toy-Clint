import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Alltoys from "../Pages/Alltoys/Alltoys";
import Addtoy from "../Pages/Addtoy/Addtoy";
import Mytoy from "../Pages/Mytoy/Mytoy";
import View from "../Pages/View/View";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import PrivateRouts from "./PrivateRouts";
import MytoyRow from "../Pages/Mytoy/MytoyRow";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
            path:'/signup',
            element:<Signup></Signup>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/alltoys',
          element:<Alltoys></Alltoys>
        },
        {
          path:'/addtoy',
          element:<Addtoy></Addtoy>
        },
        {
          path:'/mytoyrow',
          element:<MytoyRow></MytoyRow>

        },
        {
          path:'/mytoys',
          element:<PrivateRouts><Mytoy></Mytoy></PrivateRouts>
        },
        {
          path:'updatetoy/:id',
          element:<UpdateToy></UpdateToy>
          
        },
        {
          path:'view/:id',
          element:<View></View>,
          loader:({params}) =>fetch(`http://localhost:5000/products/${params.id}`)

        }
       
        

      ]
    },
    {
      
        path:'*',
        element:<Error></Error>
      
    }
  ]);

  export default router;