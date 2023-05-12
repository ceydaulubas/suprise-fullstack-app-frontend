import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={6} className="d-flex align-items-center">
                    <div className="text-center">
                        <h2 className="mb-4">Welcome to Happy Celebrations Hub!</h2>
                        <p className="text-muted">
                            The purpose of this website is to facilitate the celebration of special occasions that often seem less important to busy individuals. Many people either forget or don't know how to celebrate the special occasions of their loved ones such as parents, friends, or partners. Therefore, this website uses the Chat GPT API to generate personalized messages for your loved one's special day by simply filling out a form, and sends that message to their email address.
                        </p>
                        <p className="text-muted">
                            As a result, we help alleviate the burden on busy individuals' to-do lists through this website.
                        </p>
                        <h6>Now, go ahead and give it a try!</h6>
                        <p className="text-muted">
                            Make your loved one happy with beautiful words on their upcoming special day!
                        </p>
                        <Link to="/private/surpriseform" className="btn" style={{ backgroundColor: '#13c2c2' }}><b>Make Surprise</b></Link>
                    </div>
                </Col>
                <Col md={6} className="p-0">
                    <img
                        src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_4000,w_6000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_1635094291_ksypyt.jpg"
                        alt="Background"
                        className="w-100 h-100 object-fit-cover"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default MainPage;
