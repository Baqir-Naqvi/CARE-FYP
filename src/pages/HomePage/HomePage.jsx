import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HomeImage from '../../assets/homeImage.png'
import './HomeStyle.css'
import Button from 'react-bootstrap/Button'
import HeroImage from '../../assets/HeroImage.png'
import GroupImage from '../../assets/group2.png'
import TimeImage from '../../assets/TimeImage.png'
import { useEffect } from 'react'
import {useGlobalContext} from '../../utils/ContextProvider'


export default function HomePage() {
  const {setState} = useGlobalContext()
  useEffect(() => {
    setState(true)
  }, [])
  return (
    <Container fluid>
      <Row>
        <Col sm={5} className="LeftCol">
          <div className="homeheading">
            <h3>
              <span className="head">AUTOMATION</span>
              <br />
              CAN <br />
              HELP HUMANS
            </h3>
          </div>
          <div className="homecontent">
            <p>
              A computer aided requirement
              <br /> engineering tool to extract requirements from SRS and
              generate UML diagrams
            </p>
          </div>
          <div className="homebutton">
            <Button className="button1">Get Started</Button>
            <Button className="button2">Explore</Button>
          </div>
        </Col>
        <Col sm={7} className="rightcol">
          <img src={HomeImage} className="groupimage" alt="homeImage" />
        </Col>
      </Row>
      <Row className="herodiv">
        <Col sm={2}>
          {/* <div className="herotext">
            REQUIREMENT <br/> ENGINEERING
          </div> */}
        </Col>
        <Col sm={6} className="hero">
          <img src={HeroImage} alt="heroImage" className="heroimage" />
        </Col>
      </Row>
      <Row className="groupRow">
        <Col sm={6} className="lefgrouptcol">
          <img src={GroupImage} alt="groupImage" className="groupimage" />
        </Col>
        <Col sm={6} className="rightgroupcol">
          <div className="grouptext">
            <h3>
              HELP CLIENTS AND
              <br /> DEVELOPERS
              <br />
              TO GET BETTER UNDERSTANDING OF THE SYSTEM
            </h3>
          </div>
        </Col>
      </Row>
      <Row className="TimeSection">
        <Col sm={6} className="Timeleft">
          <h3>
            SAVE TIME <br />
            AND<br/> EFFORT
          </h3>
          <div className="timetext">
            This software requirement specification tool at the initial 
            phases of development could save a lot of 
            time to kick start the project development
            (coding) and avoid defects in software design,
             development and testing due to requirement specification problems. 
             The toll will extract data driven requirements out of natural language requirements given by client and
              classify the requirements as FRs and NFRs.
          </div>
        </Col>
        <Col sm={6} className="Timeright">
          <img src={TimeImage} alt="TimeImage" className="timeImage" />
        </Col>
      </Row>
    </Container>
  )
}
