import React, { Fragment, useState } from "react";
import "./../dist/css/header.css";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Button,
  ModalFooter,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const Header = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Fragment>
      <header>
        <div className="container h-100 mt-5">
          <div className="row h-100 justify-content-center mx-auto">
            <div className="col-12 col-sm-8">
              <h1 className="display-4 brand-name">Weather</h1>
              <p className="slogan ml-2">Your Interior Weatherman !!</p>
            </div>
          </div>
          <div className="row h-100 justify-content-center align-self-center mx-auto ">
            <div className="col-12 col-sm-8 px-0">
              <Navbar expand="xs" className="px-0 ">
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink className="nav-item" href="/">
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-item" href="/forcast">
                      Forcast
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-item"
                      style={{ cursor: "pointer" }}
                      onClick={toggle}
                    >
                      About Site
                    </NavLink>
                  </NavItem>
                </Nav>
              </Navbar>
            </div>
          </div>
        </div>
      </header>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="m-header fa-lg">
          <strong>About Site</strong>
        </ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-auto mx-auto text-muted">
              <p className="font-weight-bold mb-0">Developed By</p>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-auto mx-auto">
              <h3 className="dev-name">
                <strong>Dhaval Bheda</strong>
              </h3>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-auto mx-auto text-muted">
              <p className="font-weight-bold mb-0">Follow Me</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-auto mx-auto">
              <div>
                <a
                  className="btn btn-social-icon btn-linkedin mr-1"
                  href="http://www.linkedin.com/in/dhavalbheda"
                >
                  <i className="social-button-icon fa fa-linkedin fa-sm"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-github mr-1"
                  href="https://github.com/dhavalbheda"
                >
                  <i className="social-button-icon fa fa-github fa-sm"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-pinterest mr-1"
                  href="mailto:dhavalbhedadb@gmail.com"
                >
                  <i className="social-button-icon fa fa-envelope fa-sm"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-google mr-1"
                  href="https://www.instagram.com/dhaval__bheda/"
                >
                  <i className="social-button-icon fa fa-instagram fa-sm"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-facebook mr-1"
                  href="https://www.facebook.com/dahavl.bheda"
                >
                  <i className="social-button-icon fa fa-facebook fa-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="btn btn-primary" onClick={toggle}>
            Thank You
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};
export default Header;
