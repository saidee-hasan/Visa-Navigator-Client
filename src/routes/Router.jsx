import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import AddVisa from "../components/AddVisa";
import PrivateRoute from "./PrivateRoute";
import AllVisa from "../components/AllVisa";

export const router = createBrowserRouter([
  { path: "/", element: <MainLayout />, children: [
    {path:'/',element:<Home/>},
    {path:'/register',element:<Register/>},
    {path:'/all-visas',element:<AllVisa/>,loader:()=> fetch('http://localhost:5000/visa')},
    {path:'/login',element:<Login/>},
    {path:'/add-visa',element:  <PrivateRoute><AddVisa/></PrivateRoute>},
    {path:'/*',element:<NotFound/>},



  ] },
]);
