import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { FcGoogle } from 'react-icons/fc'
import './SignupStyling.css'
import { useGlobalContext } from '../../utils/ContextProvider'

export default function SignupSection() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [confirmpassword, setConfirmPassword] = useState('')
  const [contactno, setContactNo] = useState('')
  const { setRenderSection } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password, rememberMe)
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'email') {
      setEmail(value)
    }
    if (name === 'password') {
      setPassword(value)
    }
    if (name === 'rememberMe') {
      setRememberMe(!rememberMe)
    }
    if (name === 'confirmpassword') {
      setConfirmPassword(value)
    }
    if (name === 'contactno') {
      setContactNo(value)
    }
  }
  const MoveToLogin = () => {
    setRenderSection('true')
  }
  return (
    <div className="Rightlogin">
      <h3>
        Register your <br /> Account
      </h3>
      <Form className="signupForm">
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="heading" id="test">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="heading">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="heading">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="password"
            value={confirmpassword}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="Dropdown">
          <Form.Label className="heading">Register As</Form.Label>
          <Form.Control as="select" custom>
            <option>Individual</option>
            <option>Organization</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="Contact">
          <Form.Label className="heading">Contact Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="+91 XXX-XXX-XXXX"
            name="password"
            value={contactno}
            onChange={handleChange}
          />  
        </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I agree to the Terms and Conditions"
            className="heading"
            name="rememberMe"
            value={rememberMe}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <Button className="loginbutton" onClick={handleSubmit}>
        Sign Up
      </Button>
      <Button className="loginbuttonwithGoogle" onClick={handleSubmit}>
        <FcGoogle className="googleicon" size={25} />
        Sign Up with Google
      </Button>

      <div className="signuptext">
        <p>
          Already have an account? <a 
          href='#'
          onClick={MoveToLogin}
          >Sign In</a>
        </p>
      </div>
    </div>
  )
}
