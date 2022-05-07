import {createRoot} from "react-dom/client"
import React from "react"
import {Provider} from "react-redux"

import {store} from "./store" 
import App from "./components/App"
import "./css/style.css"

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
)