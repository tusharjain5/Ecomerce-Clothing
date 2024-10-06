import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Swal from 'sweetalert2';
import './Signup.css'; 


export const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Add form validation if needed
        if (name && email && password) {
            // Simulate form submission (e.g., sending data to an API)
            try {
                // Replace with your actual form submission logic
                await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a delay

                Swal.fire({
                    title: 'Registration Successful!',
                    text: 'Welcome to JTrendsHub!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });

                // Clear the form fields
                setName('');
                setEmail('');
                setPassword('');
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'All fields are required.',
                icon: 'error',
                confirmButtonText: 'Try Again',
            });
        }
    };

    // Animation for the signup box
    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 },
    });

    return (
        <div className="signup-container">
            <animated.div style={fadeIn} className="signup-box">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button type="submit" className="btn-submit">Sign Up</button>
                </form>
            </animated.div>
        </div>
    );
};
