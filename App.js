import React from 'react';
import logo from './logo.svg';
import linkedin from "./linkedin.png"
import head from "./head.jpeg";
import facebook from "./facebook.png";
import ins from "./ins.png";
import SE from "./SE.pdf";
import P1 from "./P1.webm";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
}from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <div>
        <nav>
          <ul>
          <h1>
            Kevin
          </h1>
            <li align="left">
              <Link to="/">Home</Link>
            </li>
            <li align="left">
              <Link to="/Contact">Contact</Link>
            </li>
            <li align="left">
              <Link to="/resume">Resume</Link>
            </li>
            <li align="left">
              <Link to="/project">Project</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Resume">
            <Resume />
          </Route>
          <Route path="/Project">
            <Project />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
        
      </header>
    </div>
  );
}

function Home() {
  return (
    <header>
      <a
    className="App-link"
    href="https://reactjs.org"
    rel="noopener noreferrer"
      >
    <img src={head} className="App-head" alt="head" height="240" width="320"/>
    </a>
    </header>);
}

function Contact() {
  return (<header>
    <p>
    <a
  className="App-link"
  href="https://www.linkedin.com/in/yihua-zhou-07a103172/"
  rel="noopener noreferrer"
    >Linkedin
  <img src={linkedin} className="App-Linkedin" alt="Linkedin" height="24" width="32"/>
  </a>
  </p>
  <p>
  <a
  className="App-link"
  href="https://www.facebook.com/profile.php?id=100010772501127"
  rel="noopener noreferrer"
    >Facebook
  <img src={facebook} className="App-facebook" alt="facebook" height="24" width="32"/>
  </a>
  </p>
  <p>
  <a
  className="App-link"
  href="https://www.instagram.com/kevin19960714/"
  rel="noopener noreferrer"
    >Facebook
  <img src={ins} className="App-ins" alt="ins" height="24" width="32"/>
  </a>
  </p>

  
  </header>
  
  );
}

function Resume() {
  return (
    <p>
    <embed src={SE} width="700" height="600" type="application/pdf"></embed>
    </p>);
}

function Project() {
  return (
    <p>
      Project 1: Atmosphere Monitoring System <br/><br/>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/38YkUDx5UhU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Your browser does not support the video tag.</iframe>
    <br/><br/>
    
    </p>
    
    );
}
export default App;
