import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        color: "white",
        backgroundColor: "black",
        width: "100%",

        position: "relative",
        bottom: "0",
        display: "flex",
        justifyContent: "start",
        alignItems:"center",
        height:"5vh"
      }}
    >
      <Container>
        <Row>
          <Col className="text-center ">
            Copyright © 2023 Spathion - All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
