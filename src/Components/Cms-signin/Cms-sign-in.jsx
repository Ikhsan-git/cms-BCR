import Fbackground from '../../Assets/image 2.jpg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Cms-sign-in.css'

const cmsSignin = () => {
    return(
        <div className="s-form">
            <div className="img-background">
                <img className='img' src={Fbackground} alt="" />
            </div>
            <div className="s-input">
                <div className="center">
                <div className="logo">
                <div className="s-logo"></div>
                <h1>Welcome, Admin BCR</h1>
                </div>
                <Form className='i-form'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Contoh: johndee@gmail.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="6+ karakter" />
                    </Form.Group>
                    <Button className='s-button' variant="none" type="submit">
                        Sign In
                    </Button>
                </Form>
                </div>
            </div>
        </div>
    )
}

export default cmsSignin