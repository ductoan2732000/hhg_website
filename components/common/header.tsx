import styles from "@/styles/layout.module.scss";
import { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import Image from "next/image";
import logo from "@/assets/image/logo.png";
const Header = () => {
  return (
    <header className={`${styles.header} container-fluid`}>
      <div className={`row`}>
        <div
          className={`col-3 d-flex justify-content-center align-items-center`}
        >
          <Form>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Tìm kiếm</Button>
          </Form>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <Image
            src={logo}
            className="col-3"
            width="100%"
            height="100%"
            alt="Picture of the author"
          />
        </div>
        <div className="col-3 d-flex justify-content-center align-items-center">
          <strong>Hotline: 0987654321</strong>
        </div>
      </div>
    </header>
  );
};

export default Header;
