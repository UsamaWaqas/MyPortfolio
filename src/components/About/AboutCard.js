import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Usama Waqas </span>
            from <span className="purple"> chowk Azam district layyah,  Pakistan.</span>
            <br />
            I graduated from GCUF Layyah Campus with a degree in Computer Science, earning a CGPA of 3.60
            <br />
            I am currently working as a freelancer, where I continue to build my skills and gain experience in the field.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Tech video
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Usama</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
