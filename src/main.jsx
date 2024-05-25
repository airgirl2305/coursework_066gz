import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./_variables.sass";
import { getUser, getUsers, getFavorite, getOpenedContent, getContent } from "./state.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        users={{ key_getUser: getUser, key_getUsers: getUsers, key_getFavorite: getFavorite }}
        content={{ key_getOpenedContent: getOpenedContent, key_getContent: getContent }}
      />
    </BrowserRouter>
  </React.StrictMode>
);
