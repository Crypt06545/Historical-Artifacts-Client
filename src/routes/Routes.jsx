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
import UpdateArtifact from "../pages/UpdateArtifact";
import LikedArtifact from "../pages/LikedArtifact";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Services from "../pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
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
        path: "/view-artifact-details/:id",
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
        path: "/liked-artifacts",
        element: (
          <PrivateRoute>
            <LikedArtifact />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-artifact/:id",
        element: (
          <PrivateRoute>
            <UpdateArtifact />
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
