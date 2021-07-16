import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./Detail.scss";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

function Detail(props) {
  let history = useHistory();
  let { id } = useParams();
  let 찾은상품 = props.places.find(function (상품) {
    return 상품.id == id;
  });

  let [onoff, setonoff] = useState(true);

  let [스위치, 스위치변경] = useState(false);

  let [탭UI, 탭UI변경] = useState({
    info: <p>상품정보는 이쪽입니다.</p>,
    shipping: <p>배송관련은 이쪽이고요</p>,
    refund: <p>환불약관 또한 이쪽입니다.</p>,
  });
  let [현재상태, 현재상태변경] = useState("info");

  useEffect(() => {
    let timer = setTimeout(() => {
      setonoff(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="container">
      {onoff === true ? <Noti /> : null}
      <div className="row">
        <div className="col-md-6">
          <img src={"/" + 찾은상품.img} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>contents : {찾은상품.content}</p>
          <p>price : {찾은상품.price}</p>
          <p>date : {찾은상품.date}</p>

          <Info 재고={props.재고}></Info>
          <button
            className="btn btn-danger"
            onClick={() => {
              {
                props.dispatch({
                  type: "상품개수추가",
                });
                props.dispatch({
                  type: "상품합계",
                  payload: 찾은상품.price,
                });
                props.재고변경(props.재고 - 1);
                props.dispatch({
                  type: "항목추가",
                  payload: {
                    id: 찾은상품.id,
                    name: 찾은상품.title,
                    num: 1,
                    price: 찾은상품.price,
                  },
                });
                history.push("/cart");
              }
            }}
          >
            주문하기
          </button>
          <button
            className=" mt-50 btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              스위치변경(false);
              현재상태변경("info");
            }}
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              스위치변경(false);
              현재상태변경("shipping");
            }}
          >
            Option 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onClick={() => {
              스위치변경(false);
              현재상태변경("refund");
            }}
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={스위치} classNames="wow" timeout={1000}>
        <TabContent 스위치변경={스위치변경} 탭UI={탭UI} 현재상태={현재상태} />
      </CSSTransition>
    </div>
  );
}

function TabContent(props) {
  useEffect(() => {
    props.스위치변경(true); //탭내용 컴포넌트가 로드될 때 true
  });

  return <div>{props.탭UI[props.현재상태]}</div>;
}

function Noti() {
  return (
    <div className="my-alert-yellow">재고 수량이 얼마 남지 않았습니다.</div>
  );
}

function Info(props) {
  return <p>재고 : {props.재고}</p>;
}

function reduxpractice(state) {
  console.log(state);
  return {
    state: state.reducer,
    alertcheck: state.reducer2,
    productcount: state.reducer3,
  };
}

export default connect(reduxpractice)(Detail);
