import React from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'
import {useState,useEffect} from 'react'
import '../../pages/LoginPage/LoginStyle.css'
import {FcGoogle} from 'react-icons/fc'
import {useGlobalContext} from '../../utils/ContextProvider'


export default function LoginSection() {
   const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const {setRenderSection} = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email
      , password
      , rememberMe)
  }
  const handleChange = (e) => {
    const {name, value} = e.target
    if(name === 'email'){
      setEmail(value)
    }
    if(name === 'password'){
      setPassword(value)
    }
    if(name === 'rememberMe'){
      setRememberMe(!rememberMe)
    }
  }
  const MoveToSignup = () => {
    setRenderSection('register')
  }
  return (  
    <div className="Rightlogin">
       <h3>Login to your <br/> Account</h3>
                <Form className="loginForm">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className='heading'>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                        name="email"
                        value={email}
                        onChange={handleChange}
                         />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className='heading'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                         />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me"
                        className='heading'
                        name="rememberMe"
                        value={rememberMe}
                        onChange={handleChange}
                         />
                    </Form.Group>
                </Form>
                <Button className='loginbutton' onClick={
                      handleSubmit
                    }>
                        Sign In
                    </Button>
                <Button className='loginbuttonwithGoogle' onClick={
                      handleSubmit
                    }>
                        <FcGoogle className='googleicon'
                        size={25}
                        />
                        Continue with Google
                    </Button>

                    <div className="signuptext">
                        <p>Don't have an account? <a
                        href="#"
                        onClick={MoveToSignup}
                        >Sign Up</a></p>
                    </div>

    </div>
  )
}
