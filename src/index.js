import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { CssBaseline } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { BrowserRouter } from "react-router-dom"

const theme = createTheme()

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
