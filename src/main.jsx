import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import { Toaster } from "sonner";
import QueryProvider from "./providers/QueryProvider.jsx";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
// import "@mantine/dropzone/styles.css";
import "@mantine/dates/styles.css";
import "mantine-react-table/styles.css";
import "@mantine/charts/styles.css";

import "./index.css";
import { theme } from "./configs/matine.config.js";

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
