import React from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'
import { Container } from 'react-bootstrap';
import LogoImage from '../../assets/Logo.png'
import './LoginStyle.css'
import {useState,useEffect} from 'react'
import {useGlobalContext} from '../../utils/ContextProvider'
import LoginSection from '../../components/Login/LoginSection'
import SignupSection from '../../components/Signup/SignupSection'
import { useParams } from 'react-router-dom';

function LoginPage() {
 
  const {setState,renderSection, setRenderSection} = useGlobalContext()
  let { id } = useParams();
  useEffect(() => {
    setState(false)
    setRenderSection('true')
  }, [
    id
  ])


  
  return (
      <Container fluid className='mainbody'>
        <Row>
            <Col sm={4} md={4} lg={8} className="leftImageSection">
                <h3>
                  CARE TOOL
                </h3>
                <img src={LogoImage}
                alt="Logo"
                className="img-fluid" 
                />
                <p>
                  A Computer Aided<br/> Requirement Engineering Tool
                </p>
            </Col>
            <Col sm={8} md={8} lg={4}>
              {renderSection === 'true' && <LoginSection/>}
              {renderSection === 'register' && <SignupSection/>}
               
            </Col>
        </Row>
    </Container>
  )
}

export default LoginPage