import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeImage from "../../assets/homeImage.png";
import "./HomeStyle.css";
import Button from "react-bootstrap/Button";
import HeroImage from "../../assets/HeroImage.png";

export default function HomePage() {
  return (
    <Container fluid>
      <Row>
        <Col sm={5} className='LeftCol'>
          <div className="homeheading">
            <h3>
              <span className='head'>
              AUTOMATION
              </span>
              <br />
            CAN <br/>HELP HUMANS</h3>
          </div>
          <div className="homecontent">
            <p>
              A computer aided requirement<br/> engineering tool to extract requirements from SRS and generate UML diagrams
            </p>
          </div>
          <div className="homebutton">
            <Button className='button1'>Get Started</Button>
            <Button  className='button2'>Explore</Button>
          </div>
          
        </Col>
        <Col sm={7} className='rightcol'>
          <img src={HomeImage} alt="homeImage" />
        </Col>
      </Row>
    <Row className='herodiv'>
          <Col sm={2}>
          {/* <div className="herotext">
            REQUIREMENT <br/> ENGINEERING
          </div> */}
        </Col>
        <Col sm={6} className='hero'>
        <img src={HeroImage} alt="heroImage"
        className='heroimage'/>
        </Col>
       
      </Row>
    </Container>
  );
}
