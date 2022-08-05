import React, { useEffect, useState } from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'
import countries from './JsonFiles/countries.json'
import States from './JsonFiles/state.json'
import cities from './JsonFiles/cities.json'
import CountryCode from './JsonFiles/countryCode.json'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


const Signup = (props) => {
    
    const[stateList, setStateList] = useState([])
    const[cityList, setCityList] = useState([])
    const[password, setPassword] = useState('')
    const[cPassword, setcPassword] = useState('')
    const errorMsg = "Password Did not Match"
    const [emailAddress, setEmailAddress] = useState('')
    const [passwordMatch, setPasswordMatch] = useState(false)
    

    const CountrySelected =(e)=> {
        const countryCheck = States.filter(x => x.country_id ==e.target.value) 
        setStateList(countryCheck)
    }

    const StateSelected = (e) => {
        const StateCheck = cities.filter((x) => x.state_id == e.target.value)
        setCityList(StateCheck)
    }
    
    const PasswordChange = (e) => {
        setPassword(e.target.value);
        ((password == cPassword) && (cPassword != '') && (password != '')) ? setPasswordMatch(false) : setPasswordMatch(true)

    }
    const cPasswordChange =(e)=>{
        // console.log(e.target.value);
        setcPassword(e.target.value);
        console.log(password);
        console.log(cPassword);
        
    }
    useEffect(()=>{
        setPasswordMatch(true);
        ((password == cPassword) && (cPassword != '') && (password != '')) ? setPasswordMatch(false) : setPasswordMatch(true)
    })
    const emailAdd = (e)=>{
        setEmailAddress(e.target.value)
    }

    const submitSignup = (e)=>{
        e.preventDefault();
        props.getData({emailAddress, cPassword});
        // <Redirect
    }



  return (
    <div>
        <Form onSubmit={submitSignup}>
            <Form.Group className="mb-3">
                <Form.Label>Individual/Enterprise/Government</Form.Label>
                <Form.Check  type='radio' id='Individual' label='Individual' name="ieg" />
                <Form.Check  type='radio' id='Enterprise' label='Enterprise' name="ieg" />
                <Form.Check  type='radio' id='Government' label='Government' name="ieg" />
            </Form.Group>
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="fname" placeholder="Enter First Name" required/>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="lname" placeholder="Enter Last Name" />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group>
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Enter Email" onChange={emailAdd} required/>
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" placeholder='Enter Full Adress' required/>
            </Form.Group>
            <br></br>
            <Row>
                <Col md={6}>
                <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Select aria-label='select' id="select_country" onChange={CountrySelected}>
                        <option value="0" disabled>Select Country</option>
                        {countries.map( (Country, id)=> {
                        return <option value={Country.id} key={id} id={Country.id}>{Country.name}</option>
                        })}
                    </Form.Select>
                </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group>
                    <Form.Label>State</Form.Label>
                    <Form.Select aria-label='select' id="select_state" onChange={StateSelected}>
                        <option value="0">Select State</option>
                        {
                            stateList.map( (state, index)=> {
                                // state.country_id == countryId &&
                                return <option value={state.id} key={index} id={state.id}>{state.name}</option>
                            })
                        }
                    </Form.Select>
                </Form.Group>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col md={6}>
                <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Select aria-label='select' id="select_city" >
                        <option value="0">Select City</option>
                        {
                            cityList.map( (city, index)=> {
                                // state.country_id == countryId &&
                                return <option value={city.id} key={index} id={city.id}>{city.name}</option>
                            })
                        }
                    </Form.Select>
                </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>PinCode</Form.Label>
                        <Form.Control type="pincode" placeholder="ex:576122"/>
                    </Form.Group>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col md={3}>
                <Form.Group>
                    <Form.Label>
                        Country Code
                    </Form.Label>
                    <Form.Select id="select_Country_Code">
                        <option>Select Country code</option>
                        {
                            CountryCode.map((cCode)=>{
                                return <option >{cCode.dial_code}</option>
                            })
                        }
                    </Form.Select>
                </Form.Group>
                </Col>
                <Col md={9}>
                <Form.Group>
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
                </Col>
            </Row>
            
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control placeholder='enter password' onChange={PasswordChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control placeholder='Confirm password' onChange={cPasswordChange}></Form.Control>
            </Form.Group>
            
            
            <Button type='submit' disabled={passwordMatch}>Submit</Button>

        </Form>
        
    </div>
  )
}

export default Signup