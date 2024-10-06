import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Swal from 'sweetalert2';
import './Contact.css'; // Custom CSS
import axios from 'axios';

export const Contact = () => {
    // State for form fields
    const [state, setState] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Handler for form input changes
    const handler = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = state;
        if (name && email && message) {
            axios.post("http://localhost:3006/contact", state)
                .then((res) => {
                    // Show SweetAlert confirmation
                    Swal.fire({
                        title: 'Message Sent!',
                        text: 'We will get back to you shortly.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });

                    // Clear form fields after successful submission
                    setState({
                        name: '',
                        email: '',
                        message: '',
                    });
                })
                .catch((error) => {
                    // Show SweetAlert error
                    Swal.fire({
                        title: 'Error',
                        text: 'There was an issue submitting your message. Please try again later.',
                        icon: 'error',
                        confirmButtonText: 'Try Again',
                    });
                });
        } else {
            // Show SweetAlert error for validation
            Swal.fire({
                title: 'Error',
                text: 'All fields are required.',
                icon: 'error',
                confirmButtonText: 'Try Again',
            });
        }
    };

    // Animation using react-spring
    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translateY(-30px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 },
    });

    // Destructure state for easier use
    const { name, email, message } = state;

    return (
        <div className="contact-page-container">
            <animated.div style={fadeIn} className="contact-form-box">
                <div className="contact-header">
                    <h2>Contact Us</h2>
                    <p>We'd love to hear from you!</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={handler}
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handler}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={handler}
                            placeholder="Write your message here"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn-submit">Send Message</button>
                </form>
            </animated.div>
        </div>
    );
};
