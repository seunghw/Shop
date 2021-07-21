// eslint-disable-next-line
import React, { useState, lazy, Suspense } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import {
  Navbar,
  Nav,
  // NavDropdown,
  // Form,
  // FormControl,
  Button,
} from "react-bootstrap";
import Data from "./data.js";
import { Link, Route, Switch, useHistory } from "react-router-dom";

import axios from "axios";
import Cart from "./Cart.js";
// import Detail from "./Detail.js";
let Detail = lazy(() => import("./Detail.js"));

function App() {
  let [places, setplaces] = useState(Data);

  let [재고, 재고변경] = useState(10);
  let [total, settotal] = useState(570000);

  return (
    <div className="App">
      
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          Go-Trip
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/detail/0">
              Detail
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Jumbotron className="background" width="100%">
            <h1>Explore Best in Travel 2021</h1>
            <p>
              The world is a book and those who do not travel read only one
              page.
            </p>
            <p>
              {/* <Button variant="primary" >More</Button> */}
            </p>
          </Jumbotron>

          <div className="container">
            <div className="row">
              {places.map((a, i) => {
                return <Card places={places[i]} i={i} key={i} />;
              })}
            </div>
          </div>

          <Button
            className ="more"
            variant="primary"
            onClick={() => {
              axios
                .get("https://raw.githubusercontent.com/seunghw/Shop/main/more.json")
                .then((result) => {
                  console.log("성공");
                  setplaces([...places, ...result.data]);
                })
                .catch(() => {
                  console.log("실패");
                });
            }}
          >
            더보기
          </Button>
        </Route>
        <Route path="/detail/:id">
          <Suspense fallback={<div>로딩중입니다.</div>}>
            <Detail places={places} 재고={재고} 재고변경={재고변경} />
          </Suspense>
        </Route>

        <Route path="/cart">
          <Cart places={places}></Cart>
        </Route>
      </Switch>
    </div>
  );
}

function Card(props) {
  let history = useHistory();
  return (
    <div
      className="col-md-4"
      onClick={() => {
        history.push("/detail/" + props.places.id);
      }}
    >
      <img src={props.places.img} width="100%" />
      <h4>{props.places.title}</h4>
      <p>
        {props.places.content}
        <br />
        출발일 : {props.places.date}
      </p>
    </div>
  );
}

export default App;
