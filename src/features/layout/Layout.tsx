import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../assets/reactLogo.svg";
import Header from "./Header";
import Footer from "./Footer";
import Project from "../tasks/Project";
import TaskCard from "../tasks/TaskCard";

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Project />
      </Container>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </>
  );
};

export default Layout;
