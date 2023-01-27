import React, {useRef} from 'react';
import {  Button } from 'react-bootstrap';


function UseForm () {

    const emailRef = useRef()
    const  passwordRef= useRef()

    const handleSubmit = (event) =>{
        event.preventDefault();
        let email = emailRef.current.value;
        let password = passwordRef.current.value;
        alert(`${email}\n ${ password}`);
        
    }

    return (
        <div className='container'  >

            <form action="" autoComplete='off' className='mt-3' onSubmit={handleSubmit}>
                <div className="mt-5">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"  className='form-control' autoComplete='off' ref={emailRef} required title='Email address'/>
                </div>

                <div className="mt-2">
                    <label htmlFor="password" className='form-label'>Password :</label>
                    <input type="password" name="password" id="password" className='form-control' ref={passwordRef}  required />
                </div>

                <div className="mt-3">
                    <button type='submit' className="btn btn-primary" >Submit</button>
                </div>
            </form>
           
            {/* <form action="" style={{width: "50%", margin: "5em auto 0"}}  onSubmit={handleSubmit} >
                <Form.Group className='mb-3' controlId='formBasicEmail' >
                    <Form.Label>Email ddress</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' ref ={emailRef} required/>
                    <Form.Text className='text-muted' >
                        We will never share your email with anyone else
                    </Form.Text>
                    <Form.Control.Feedback type='invalid'>
                        Please Provide a valid email
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={passwordRef} required/>
                    <Form.Control.Feedback type='invalid'>
                        Please Provide a valid password
                    </Form.Control.Feedback>

                </Form.Group> */}

                {/* <Button variant='primary' type='submit'>Submit</Button>
            </form> */}

        </div>
    )
}


export default UseForm ;