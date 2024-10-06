import React from 'react';
import { useSpring, animated } from 'react-spring';
import './About.css'; // Custom CSS for the about page

const About = () => {
    // Animation for the title
    const fadeInTitle = useSpring({
        from: { opacity: 0, transform: 'translateY(-30px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 },
    });

    // Animation for the description
    const fadeInDescription = useSpring({
        from: { opacity: 0, transform: 'translateX(-30px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        delay: 500,
        config: { duration: 1000 },
    });

    // Animation for the team section
    const fadeInTeam = useSpring({
        from: { opacity: 0, transform: 'translateX(30px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        delay: 1000,
        config: { duration: 1000 },
    });

    return (
        <div className="about-container">
            <animated.div style={fadeInTitle} className="about-header">
                <h1>About Us</h1>
                <p>Discover the story behind JTrendsHub, your go-to e-commerce platform for the latest trends.</p>
            </animated.div>

            <animated.div style={fadeInDescription} className="about-description">
                <h2>Our Mission</h2>
                <p>
                    At JTrendsHub, our mission is to offer the most trending and high-quality products to our customers.
                    We believe in making fashion and lifestyle easily accessible to everyone, while maintaining excellent
                    customer service and satisfaction.
                </p>
            </animated.div>

            <animated.div style={fadeInTeam} className="about-team">
                <h2>Meet Our Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <img src="Gallery/profile.png" alt="Team Member 1" />
                        <h3>Tushar Jain</h3>
                        <p>Founder & CEO</p>
                    </div>
                    <div className="team-member">
                        <img src="Gallery/girl.jpg" alt="Team Member 2" />
                        <h3>Radhika Goyal</h3>
                        <p>Head of Marketing</p>
                    </div>
                    <div className="team-member">
                        <img src="Gallery/girl2.jpg" alt="Team Member 3" />
                        <h3>Ravi Jain</h3>
                        <p>Lead Developer</p>
                    </div>
                </div>
            </animated.div>
        </div>
    );
};

export default About;
