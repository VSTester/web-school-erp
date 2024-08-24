import { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import {useNavigate} from "react-router-dom";


function Signup(){

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [type, setType] = useState()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name,type, email,password})
        .then(result => console.log(result))
        navigate("/home")
        .catch(err=> console.log(err))
    }





    return(

        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
          <div className= "bg-white p-3 rounded w-25">


            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Name</strong>
                </label>
                 <input type='text' placeholder='Enter Name' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e)=> setName(e.target.value)}/>
                 <label htmlFor="email">
                    <strong>Type</strong>
                </label>
                 <input type='text' placeholder='Enter Type' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e)=> setType(e.target.value)}/>

                 <label htmlFor="email">
                    <strong>Email</strong>
                </label>
                 <input type='text' placeholder='Enter Email' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e)=> setEmail(e.target.value)}/>
                 <label htmlFor="email">
                    <strong>Password</strong>
                </label>
                 <input type='password' placeholder='Enter Name' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e)=> setPassword(e.target.value)}/>
                 </div>
                 <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>

                 </form>

                 <p>Already Have an Account</p>
                 <Link to= '/login' type='submit' className='btn btn-light w-100 bg-light rounded-0'>Login</Link>

                 
           
          </div>
        </div>
    );
}

export default  Signup;