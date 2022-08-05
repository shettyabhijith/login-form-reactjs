import React, { useState } from 'react'
import { Row, Col , Button  } from 'react-bootstrap'
import Login from './Login'
import Signup from './Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'




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
      <BrowserRouter>
      
      <Row>
        <Col md={6}>

        </Col>
        <Col md={6}>
          <div className='login-button-sec'>
          <LinkContainer to="/login">
            <Button className='login-btn text-center' >Login</Button>
          </LinkContainer>
          
          <LinkContainer to="/signup">
            <Button className='signup-btn btn-danger' >SIGN UP</Button>
          </LinkContainer>
          <Routes>
          <Route path='*' valid element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup getData= {getSignupData} />} />
        </Routes>
            
            {/* {validUser? 
            <div>
              <Login />
            </div>            
            : 
            <div >
              <Signup getData= {getSignupData} />
            </div>
            
          } */}
          </div>
        </Col>
      </Row>
        
      </BrowserRouter>

      
    </div>
  )
}

export default Loginsignup