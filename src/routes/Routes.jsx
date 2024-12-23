import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Home from "../pages/Home";
import AllArtifacts from "../pages/AllArtifacts";
import AddArtifact from "../pages/AaddArtifact";
import ViewArtifact from "../pages/ViewArtifact ";
import MyAddedArtifacts from "../pages/MyAddedArtifacts";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-artifacts",
        element: <AllArtifacts />,
      },
      {
        path: "/add-artifact",
        element: (
          <PrivateRoute>
            <AddArtifact />
          </PrivateRoute>
        ),
      },
      {
        path: "/view-artifact",
        element: (
          <PrivateRoute>
            <ViewArtifact />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-add-artifact",
        element: (
          <PrivateRoute>
            <MyAddedArtifacts />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
