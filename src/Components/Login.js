import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { onLogin } from '../redux/actions/loginAction';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    let [usernameState,setUsernameState] = useState("");
    let [passwordState,setPasswordState] = useState("");
    let [success,setSuccess] = useState("");
    let [error, setError] = useState("");

    let dispatch = useDispatch();

    let navigate = useNavigate();

    function implementLogin(e){

        e.preventDefault();

        // console.log(usernameState)
        // console.log(passwordState)
        
        if(!usernameState || !passwordState){

             setSuccess("")
             setError("Please fill in all fields");

             return;

        }
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            username:`${usernameState}`,
            password:`${passwordState}`,
            })
            })
            .then(res => res.json())
            .then(json => {
                if(json.token){

                    setError("");
                    setSuccess("Login successful!");

                    //console.log(json)

                    dispatch(onLogin(json))

                    setInterval(() => navigate("/profile"),2000)
                   


                }else{
                    setSuccess("")
                    setError(json.message);
                }
            });
        



    
        
    }

    return (
        <div className='login-page'>
            
                <form onSubmit={implementLogin}>
                <div className='login-box'>
                    <div className='login-heading'>
                        <p>Welcome back!</p>
                        <h2>Sign in to your account</h2>
                    </div>
                    <div className='input'>
                        <label>Your username</label>
                        <input type='text'
                            onChange={(e) => setUsernameState(e.target.value)}
                            value={usernameState}
                        />
                    </div>
                    <div className='input'>
                        <label>Password</label>
                        <input type='password'
                            onChange={(e) => setPasswordState(e.target.value)}
                            value={passwordState}
                        />
                    </div>
                    {
                        error && <p className='error'>{error}</p>
                    }
                    {
                        success && <p className='success'>{success}</p>
                    }
                    <button type='submit'>CONTINUE</button>
                    <a href=''>Forgot your password?</a>
                    
                    </div>
                </form>
            
            <div className='login-bottom'>
                <p>Don't have an account?</p>
                <a href=''>Sign Up</a>
            </div>
        </div>
    )
}

export default Login;