import {Button,Card,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='py-5'>
        <Container className='d-flex justify-content-center'>
            <Card className='p-5 d-flex flex-column align-item-center hero-card bg-light w-75'>
                <h1 className='text-center mb-4'>MERN Authentication</h1>
                <p className='text-center mb-4'>
                    This is a boilerplate for MERN Authentication that stores a JWT in 
                    an Http-Only cookie.It also uses redux toolkit and the React bootstrap library
                </p>
                <div className='d-flex justify-content-center'>
                    <Button variant='primary' className='me-3' as={Link} to='/login'>
                        Sign In
                    </Button>
                    <Button variant='secondary' as={Link} to='/register'>
                        Sign Up
                    </Button>
                </div>
            </Card>
        </Container>
    </div>
  );
}


export default Hero
