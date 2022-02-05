import {
  Container,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavDropdown,
  Dropdown,
  Image,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faSignOutAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.jpg";

const Header = () => {
  const username = "Undefined";

  return (
    <>
      <Navbar className="shadow p-3" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image className="me-3" src={logo} fluid width={50} />
            <span className="">Task Manager</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link className="me-3" href="#projects">
                <span>Projects</span>
              </Nav.Link>
              <Nav.Link className="me-3" href="#getStarted">
                <span>Get started</span>
              </Nav.Link>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}>
                  <Image
                    className="me-2"
                    src={avatar}
                    roundedCircle
                    fluid
                    width={36}
                  />
                  <span>{username}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <NavDropdown.Item href="#profile">
                    <FontAwesomeIcon className="me-2" icon={faUserCircle} />
                    <span>Profile</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#settings">
                    <FontAwesomeIcon className="me-2" icon={faCogs} />
                    <span>Settings</span>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#logout">
                    <FontAwesomeIcon className="me-2" icon={faSignOutAlt} />
                    <span>Log out</span>
                  </NavDropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
