import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import Shop from "../Components/Shop/Shop";
import About from "../Components/About/About";
import Blog from "../Components/Blog/Blog";
import SingleBook from "../Components/Shop/SingleBook";
import DashboardLayout from "../Components/DashboardLayout/DashboardLayout";
import Dashboard from "../Components/Dashboard/Dashboard";
import UploadBook from "../Components/Dashboard/UploadBook";
import ManageBooks from "../Components/Dashboard/ManageBooks";
import EditBooks from "../Components/Dashboard/EditBooks";
import SignUp from "../Components/FireBaseSetup/SignUp";
import Login from "../Components/FireBaseSetup/Login";
import PrivateRoute from "../Components/FireBaseSetup/PrivateRoute";
import Logout from "../Components/FireBaseSetup/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/api/books/:id",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/books/${params.id}`),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />,
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/books/${params.id}`),
      },
    ],
  },

  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
]);

export default router;
