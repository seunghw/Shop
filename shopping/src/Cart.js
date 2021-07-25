import React, { useState } from "react";
import { Table, Button, Badge } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
  let 할인액 = 100000;
  return (
    <div>
      <div>
        {props.alertcheck === true && (
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
        )}
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
                  <td>{i+1}</td>
                  <td>{a.content} </td>
                  <td>{a.num+1}</td>
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
                // 반복문돌려서 상품개수 상품 금액 적기.
              );
            })}
          </tbody>
        </Table>

        <div className="pay">
          <h5> 장바구니 합계</h5>
          <hr size="15" color="black"></hr>
          <div className="paycount">
            <span>선택 상품 개수 </span>
            <span>{props.productcount}개</span>
          </div>
          <div className="paycount">
            <span>상품 금액</span>
            <span>{props.total}원</span>
          </div>
          <div className="paycount">
            <span>할인 금액 (프로모션 10% 할인) </span>
            <span>{할인액}원</span>
          </div>
          <hr color="black"></hr>
          <div className="paycount">
            <span>결제 금액 </span>
            <span>{props.total - 할인액}원</span>
          </div>
        </div>
        <div className="d-grid gap-2 pt-2 pb-3">
          <Button variant="primary" size="lg" onClick={()=>{alert("결제되었습니다.")}}>
            결제하기
          </Button>
        </div>
      </div>
    </div>
  );
}

function reduxpractice(state) {
  return {
    state: state.reducer,
    alertcheck: state.reducer2,
    productcount: state.reducer3,
    total: state.reducer4,
  };
}

export default connect(reduxpractice)(Cart);
