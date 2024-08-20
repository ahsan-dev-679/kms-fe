import QueryProvider from "./providers/QueryProvider.jsx";
import { theme } from "./configs/matine.config.js";
import { MantineProvider } from "@mantine/core";
import "react-international-phone/style.css";
import ReactDOM from "react-dom/client";
import "mantine-react-table/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/core/styles.css";
import { Toaster } from "sonner";
import App from "./App.jsx";
import React from "react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <MantineProvider theme={theme}> */}
    <MantineProvider>
      <QueryProvider>
        <App />
        <Toaster richColors />
      </QueryProvider>
    </MantineProvider>
  </React.StrictMode>
);
