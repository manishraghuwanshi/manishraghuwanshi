import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";

import { AppRouter } from "./router/AppRouter";
import ErrorBoundary from "./components/ui/error/ErrorBoundary";

import "./styles/globals.css";

ReactDOM.createRoot(
  document.getElementById("root")!,
).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={AppRouter} />
    </ErrorBoundary>
  </React.StrictMode>,
);