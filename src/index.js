import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./theme/index";
import { render } from "@testing-library/react";
import "./css/tailwind.css";

render(
  <ThemeProvider theme={theme}>
    {" "}
    <App />{" "}
  </ThemeProvider>,
  document.getElementById("root")
);
