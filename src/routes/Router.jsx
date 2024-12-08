import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import AddVisa from "../components/AddVisa";
import PrivateRoute from "./PrivateRoute";
import AllVisa from "../components/AllVisa";
import VisaDetails from "../components/VisaDetails";
import MyVisaApply from "../components/VisaApply";
import VisaApply from "../components/VisaApply";
import MyAddedVisa from "../components/MyAddedVisa";
import ForgotPassword from "../components/ForgotPassword";
import UpdateProfile from "../components/UpdateProfile";
import UserProfile from "../components/UserProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
      {
        path: "/all-visas",
        element: <AllVisa />,
        loader: () => fetch("https://server-swart-five.vercel.app/visa"),
      },

      {
        path: "/details/:id",
        element:<PrivateRoute><VisaDetails /></PrivateRoute> ,
        loader: ({}) => fetch(`https://server-swart-five.vercel.app/visa/`),
      },

      {
        path: "/my-visas/:email",
        element:<PrivateRoute><MyAddedVisa /></PrivateRoute> ,
        loader: ({ params }) =>
          fetch(`https://server-swart-five.vercel.app/visa/${params.email}`),
      },

      { path: "/forgot-password", element: <ForgotPassword /> },
      {path:"/profile",element:<PrivateRoute><UserProfile/></PrivateRoute>  },

      { path: "/update", element: <PrivateRoute><UpdateProfile/></PrivateRoute>  },
      { path: "/login", element: <Login /> },
      {
        path: "/my-applications",
        element:<PrivateRoute><VisaApply /></PrivateRoute> ,
        loader: () => fetch("https://server-swart-five.vercel.app/apply"),
      },
      {
        path: "/add-visa",
        element: (
          <PrivateRoute>
            <AddVisa />
          </PrivateRoute>
        ),
      },
      { path: "/*", element: <NotFound /> },
    ],
  },
]);
