import { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Form,Button,Col,Row } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { useLoginMutation } from "../slices/userApiSlice";


const LoginScreen=()=>{

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const Navigate = useNavigate();
    const Dispatch= useDispatch();

    const [ login ,{ isLoading }] =useLoginMutation();

    const { userInfo } = useSelector((state)=>state.auth)

    useEffect(()=>{
        if(userInfo){
            Navigate('/');
        }
    },[Navigate,userInfo])

    
    const HandleSubmit=async (e)=>{
        e.preventDefault();
        console.log('submit');
    }
     return (
        <FormContainer>
            <h1>Sign In</h1>

            <Form onSubmit={HandleSubmit}>
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

                <Button type="submit" variant="primary" className="mt-3">
                    Sign In
                </Button>

                <Row className="py-3">
                   <Col>
                   New Customer?<Link to='/register'> Register</Link>
                   </Col>
                </Row>
            </Form>
        </FormContainer>
     )
}

export default LoginScreen;