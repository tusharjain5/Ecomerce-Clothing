import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Import custom CSS
import Swal from 'sweetalert2'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your authentication logic here
        Swal.fire({
            title: 'Success!',
            text: 'You have logged in successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
            timer: 2000 // Auto close after 2 seconds
        });
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-primary">Login</button>
                </form>
                <p className="text-center">
                    Don't have an account? <Link to="/sign-up">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
