import React, { useState, useContext, useEffect } from 'react'
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    const navigate = useNavigate();

    useEffect(()=>{
        if(isAuthenticated){
            navigate('/');
        }
        if(error === 'Invalid Credentials'){
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    },[error, isAuthenticated, navigate]);

    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const { email, password } = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if( email === ''){
            setAlert('Please enter email', 'danger')
        } if( password === '' ){
            setAlert('Please enter password', 'danger')
        }else{
            login({ email, password });
        }
        
    }

    return (
        <div className='form-container'>
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            
            <form onSubmit={onSubmit}>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" value={email} onChange={onChange}  />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} minLength="6" />
                </div>

                <input type="submit" value="Login" className="btn btn-primary btn-block" />
            </form>
        </div>
    )
}

export default Login
