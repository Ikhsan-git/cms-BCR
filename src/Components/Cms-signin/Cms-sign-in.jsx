import Fbackground from '../../Assets/image 2.jpg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Cms-sign-in.css';
import { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';

function Login() {

        const [email,setEmail]=useState("");
        const [password,setPassword]=useState("");
        const history = useHistory();
        useEffect(() => {
            const fungsiHistory = () =>{
                if (localStorage.getItem('user-info')) {
                    history.push("/")
                }
            }
            fungsiHistory();
    }, [])

    async function login(e){
        e.preventDefault()
        console.warn(email, password)
        let item = {email, password};
        let result = await fetch("https://bootcamp-rent-cars.herokuapp.com/admin/auth/login", {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json", 
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)
            
        });
        result = await result.json();   
        console.log(result)

        let text = "abcdefg";

        if(result.email !== item.email && result.password !== item.password){
            console.log(text)
            // localStorage.setItem("user-info",JSON.stringify(result))
            // history.push("/add");
        }else{
            localStorage.setItem("user-info",JSON.stringify(result))
            history.push("/add");
            console.log('berhasil')
        }

        // localStorage.setItem("user-info",JSON.stringify(result))
        // history.push("/add");
    }

    return (
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
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Contoh: johndee@gmail.com" onChange={(e)=>setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="6+ karakter" onChange={(e)=>setPassword(e.target.value)} />
                        </Form.Group>
                        <Button className='s-button' variant="none" type="submit" onClick={login}>
                            Sign In
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login