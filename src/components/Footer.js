import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookSquare } from "react-icons/fa";
import {
  AiFillGithub,
  

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Usama Waqas</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} UW</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/UsamaWaqas"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=100089640010731"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
               <FaFacebookSquare />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/usama-waqas-96327b231/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
             
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
