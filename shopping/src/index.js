import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { createStore } from "redux";

let store = createStore(() => {
  return [
    {
      id: 0,
      name: "로마패키지",
      num: 7,
      date: "2021년 8월 29일",
      price: 190000,
    },

    {
      id: 1,
      name: "피렌체패키지",
      num: 5,
      date: "2021년 10월 16일",
      price: 130000,
    },

    {
      id: 2,
      name: "스위스패키지",
      num: 3,
      date: "2021년 12월 19일",
      price: 250000,
    },
  ];
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
