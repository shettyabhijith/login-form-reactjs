import React, { useEffect, useState } from 'react'
import {Form, Button} from 'react-bootstrap'

const Login = () => {
 /* Now have to receive props of userlist */
  const [emailId, setEmailId] = useState('')
  const [password, setPassword] = useState('')

  const emailHandle = (e) => {
    setEmailId(e.target.value)
  }
  const passwordHandle = (e) => {
    setPassword(e.target.value)
  }

  useEffect(()=>{

  })

  const loginSubmit = (e) => {

  }
  return (
    <div>
      <Form onSubmit={loginSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={emailHandle}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  onChange={passwordHandle} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Login