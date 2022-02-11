import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import Project from "../tasks/Project";

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Project />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
