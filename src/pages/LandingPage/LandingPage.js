import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const navigateToSignUp = () => {
        navigate('/signup');
    }

    return (
        <div className="landing-page">
            <div className="content-container">
                <h1 className="title">Hey there!</h1>
                <p className="message">Is it someone special's <b>birthday</b>? <b> Valentine's Day</b> perhaps? Or <b>Mother's/Father's Day?</b> Never forget to send your celebratory messages again!</p>
                <p className="message">Wondering what to write now? Preparing elaborate celebratory messages can be challenging amidst your busy schedule. But worry no more, this application is just for you!</p>
                <p className="message">Join us and send beautifully crafted messages to your loved ones on their special days. All it takes is filling out a simple form. Let's make every celebration memorable!</p>
                <p className="invite"><b>Sign up now and explore more of what we have to offer!</b></p>
                <Button variant="success" onClick={navigateToSignUp}>Sign Up</Button>
            </div>
        </div>
    );
}

export default LandingPage;
