import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import { Toaster } from "sonner";
import QueryProvider from "./providers/QueryProvider.jsx";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
// import "mantine-datatable/styles.layer.css";
// import "@mantine/dropzone/styles.css";
import "@mantine/dates/styles.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <QueryProvider>
        <App />
        <Toaster richColors />
      </QueryProvider>
    </MantineProvider>
  </React.StrictMode>
);
