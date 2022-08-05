import React, { useState } from 'react'
import { Row, Col , Button  } from 'react-bootstrap'
import Login from './Login'
import Signup from './Signup'



const Loginsignup = () => {
  const [validUser, setValidUser] = useState(false)
  var signedUpUsers = []

  const getSignupData = (dm) => {
    // console.log(typeof(dm))
    signedUpUsers.push(dm)
    console.log(signedUpUsers)
  }
  return (
    <div>
      <Row>
        <Col md={6}>

        </Col>
        <Col md={6}>
          <div className='login-button-sec'>
            <Button className='login-btn text-center' onClick={() => setValidUser(true)}>Login</Button>
            <Button className='signup-btn btn-danger' onClick={() => setValidUser(false)}>SIGN UP</Button>
            {validUser? 
            <div>
              <Login />
            </div>            
            : 
            <div >
              <Signup getData= {getSignupData} />
            </div>
            
          }
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Loginsignup