import { Container, Navbar } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Navbar className="shadow p-3 bg-white position-absolute bottom-0 start-0 end-0" expand="lg">
        <Container className="justify-content-center">
          <Navbar.Text>
            <span>© {currentYear} Task Manager. All rights reserved.</span>
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
