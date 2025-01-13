import { useState } from "react";
import { Link } from "react-router-dom";
import { Form,Button,Col,Row } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const RegisterScreen=()=>{

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');

    
    const HandleSubmit=async (e)=>{
        e.preventDefault();
        console.log('submit');
    }
     return (
        <FormContainer>
            <h1>Sign Up</h1>

            <Form onSubmit={HandleSubmit}>
            <Form.Group className="my-2" controlId="name">
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control
                    type="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className="my-2" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className="my-2" controlId="password">
                    <Form.Label> Enter password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="my-2" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                    type="confirmPassword"
                    placeholder="Enter CofirmPassword"
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>

                <Button type="submit" variant="primary" className="mt-3">
                    Sign Up
                </Button>

                <Row className="py-3">
                   <Col>
                   Already have an account?<Link to='/login'> login</Link>
                   </Col>
                </Row>
            </Form>
        </FormContainer>
     )
}

export default RegisterScreen;