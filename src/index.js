import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoadingContextProvider } from "./context/LoadingContext";
import "./index.css";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LoadingContextProvider>
        <App />
      </LoadingContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

