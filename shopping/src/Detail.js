import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./Detail.scss";
import { CSSTransition } from "react-transition-group";

function Detail(props) {
  let history = useHistory();
  let { id } = useParams();
  let 찾은상품 = props.places.find(function (상품) {
    return 상품.id == id;
  });

  let [onoff, setonoff] = useState(true);

  let [tap, settap] = useState(0);

  let [스위치, 스위치변경] = useState(false);

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
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>

          <Info 재고={props.재고}></Info>
          <button
            className="btn btn-danger"
            onClick={() => {
              {
                props.재고변경([9, 10, 11]);
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
              settap(0);
              스위치변경(false);
            }}
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              settap(1);
              스위치변경(false);
            }}
          >
            Option 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onClick={() => {
              settap(2);
              스위치변경(false);
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
      <CSSTransition in={스위치} classNames="wow" timeout={500}>
        <TabContent tap={tap} 스위치변경={스위치변경} />
      </CSSTransition>
    </div>
  );
}

function TabContent(props) {
  useEffect(() => {
    props.스위치변경(true); //탭내용 컴포넌트가 로드될 때 true
  });
  if (props.tap === 0) {
    return <div>내용 0</div>;
  } else if (props.tap === 1) {
    return <div>내용 1</div>;
  } else if (props.tap === 2) {
    return <div>내용 2</div>;
  }
}

function Noti() {
  return (
    <div className="my-alert-yellow">재고 수량이 얼마 남지 않았습니다.</div>
  );
}

function Info(props) {
  return <p>재고 : {props.재고[0]}</p>;
}

export default Detail;
