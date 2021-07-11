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
                  <td>변경</td>
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