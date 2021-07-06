// eslint-disable-next-line
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container,Row,Col, Button } from 'react-bootstrap';
import Data from './data.js';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail.js';

function App() {

  let [places, setplaces] = useState(Data);


  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Go-Trip</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" as={Link} to ="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" as={Link}to ="/Detail">Detail</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  <Switch>
    <Route exact path="/"> 
      <Jumbotron className="background" width="100%">
      <h1>99% Season Off!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>

    <div className="container">
      <div className="row">
        {
          places.map((a,i)=> {
            return(
              <Card places = {places[i]} />
            )
          })
        }
      </div>
    </div>
    </Route>
      <Route path="/detail/:id">
        <Detail places = {places}/>
      </Route>
      </Switch>

    </div>
  );
}


function Card(props) {
  return (
    <div className="col-md-4">
          <img src={props.places.img} width="100%"/>
          <h4>{ props.places.title }</h4>
          <p>{ props.places.content } & { props.places.price } </p>
        </div>
  )
}

export default App;


