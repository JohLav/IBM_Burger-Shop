import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { Provider } from "react-redux";
// import { store } from "./features/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<Provider store={store}>*/}
    <App />
    {/*</Provider>*/}
  </React.StrictMode>,
);