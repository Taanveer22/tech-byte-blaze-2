import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import myRouter from "./routes/MyRouter";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={myRouter}></RouterProvider>
    <Toaster></Toaster>
  </StrictMode>
);
