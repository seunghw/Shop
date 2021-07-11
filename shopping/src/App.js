// eslint-disable-next-line
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Data from "./data.js";
import { Link, Route, Switch } from "react-router-dom";
import Detail from "./Detail.js";
import axios from "axios";
import Cart from "./Cart.js";

function App() {
  let [places, setplaces] = useState(Data);

  let [재고, 재고변경] = useState([10, 11, 12]);

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
            <Nav.Link as={Link} to="/detail/1">
              Detail
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Jumbotron className="background" width="100%">
            <h1>99% Season Off!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>

          <div className="container">
            <div className="row">
              {places.map((a, i) => {
                return <Card places={places[i]} />;
              })}
            </div>
          </div>

          <Button
            variant="primary"
            onClick={() => {
              axios
                .get("https://codingapple1.github.io/shop/data2.json")
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
          <Detail places={places} 재고={재고} 재고변경={재고변경} />
        </Route>

        <Route path="/cart">
          <Cart></Cart>
        </Route>
      </Switch>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={props.places.img} width="100%" />
      <h4>{props.places.title}</h4>
      <p>
        {props.places.content} & {props.places.price}{" "}
      </p>
    </div>
  );
}

export default App;
