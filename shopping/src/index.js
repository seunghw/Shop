import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { createStore, combineReducers } from "redux";

function reducer2(state = true, action) {
  if (action.type === "알림창닫기") {
    state = false;
  }
  return state;
}

function reducer3(state = 3, action) {
  if (action.type === "상품개수추가") {
    state++;
  }
  return state;
}

function reducer4(state = 570000, action) {
  if (action.type === "상품합계") {
    state = state + action.payload;
  }
  return state;
}

let basestore = [
  {
    id: 0,
    name: "로마패키지",
    num: 0,
    content: "colosseum",
    date: "2021년 8월 29일",
    price: 190000,
  },

  {
    id: 1,
    name: "피렌체패키지",
    content: "Cattedrale di Santa Maria del Fiore",
    num: 0,
    date: "2021년 10월 16일",
    price: 130000,
  },

  {
    id: 2,
    name: "스위스패키지",
    num: 0,
    content: "Blausee",
    date: "2021년 12월 19일",
    price: 250000,
  },
];

function reducer(state = basestore, action) {
  if (action.type === "항목추가") {
    let found = state.findIndex((a) => {
      return a.id === action.payload.id;
    });

    if (found >= 0) {
      let copy = [...state];
      copy[found].num++;
      return copy;
    } else {
      let copy = [...state];
      copy.push(action.payload);

      return copy;
    }
  } else if (action.type === "수량증가") {
    let copy = [...state];
    copy[action.payload].num++;
    return copy;
  } else if (action.type === "수량감소") {
    let copy = [...state];
    copy[action.payload].num--;

    if (copy[action.payload].num < 0) copy[action.payload].num = 0;

    return copy;
  }
  return state;
}

let store = createStore(
  combineReducers({ reducer, reducer2, reducer3, reducer4 })
);

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
