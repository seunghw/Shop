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
                        props.dispatch({ type: "수량증가" });
                      }}
                    >
                      증가
                    </button>
                    <button
                      onClick={() => {
                        props.dispatch({ type: "수량감소" });
                      }}
                    >
                      감소
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

function reduxpractice(state) {
  return {
    state: state,
  };
}

export default connect(reduxpractice)(Cart);
