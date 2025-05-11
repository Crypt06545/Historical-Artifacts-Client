import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import AuthProvider from "./provider/AuthProvider";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import { HeroUIProvider } from "@heroui/react";
import ThemeProvider from "./provider/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <HeroUIProvider>
          <HelmetProvider>
            <RouterProvider router={router} />
            <Toaster position="top-right" reverseOrder={false} />
          </HelmetProvider>
        </HeroUIProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
