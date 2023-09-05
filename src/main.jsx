import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LogIn from "./components/auth/login/index.jsx";
import Pane from "./components/planner/board/pane/index.jsx";
import Register from "./components/auth/register/index.jsx";
import ForgotPassword from "./components/auth/ForgotPass/index.jsx";
import ResetPassword from "./components/auth/ResetPass/index.jsx";

const router = createBrowserRouter([
  {
    path: "login",
    element: <LogIn />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "",
    element: <Pane />,
  },
  {
    path: "forgotpassword",
    element: <ForgotPassword />
  },
  {
    path: "resetpassword",
    element: <ResetPassword />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
);
