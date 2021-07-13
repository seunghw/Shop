import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <div>
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
              <th>날짜</th>
              <th>금액</th>
              <th>변경</th>
            </tr>
          </thead>
          <tbody>
            {props.state.map((a, i) => {
              return (
                <tr key={i}>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.num}</td>
                  <td>{a.date}</td>
                  <td>{a.price}</td>
                  <td>
                    <button
                      onClick={() => {
                        props.dispatch({ type: "수량증가", payload: a.id });
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => {
                        props.dispatch({ type: "수량감소", payload: a.id });
                      }}
                    >
                      -
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {props.alertcheck === true ? (
          <div className="my-alert-yellow">
            <p>지금 구매하면 20%할인</p>
            <button
              onClick={() => {
                props.dispatch({ type: "알림창닫기" });
              }}
            >
              닫기
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function reduxpractice(state) {
  return {
    state: state.reducer,
    alertcheck: state.reducer2,
  };
}

export default connect(reduxpractice)(Cart);
