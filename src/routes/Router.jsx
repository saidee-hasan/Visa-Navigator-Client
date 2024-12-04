import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../components/Register";
import Login from "../components/Login";

export const router = createBrowserRouter([
  { path: "/", element: <MainLayout />, children: [
    {path:'/',element:<Home/>},
    {path:'/register',element:<Register/>},
    {path:'/login',element:<Login/>},



  ] },
]);
