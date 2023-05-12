import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
    const { email, registrationDate } = useAuth();

    const formattedDate = new Date(registrationDate).toLocaleDateString('tr-TR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Container fluid style={{ minHeight: "100vh", backgroundColor: "rgba(80, 196, 211, 0.194)" }}>
            <Row className="justify-content-center">
                <Col xs={12} md={6} lg={4}>
                    <Card
                        className="text-center"
                        style={{
                            color: "#555",
                            marginTop: "8rem",
                            backgroundColor: "silver",
                            border: `3px solid ${isHovered ? " rgba(83, 196, 211, 0.384)" : "transparent"}`,
                            transform: isHovered ? "scale(1.05)" : "scale(1)",
                            transition: "border-color 0.3s, transform 0.3s",
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Card.Body>
                            <span className="material-icons" style={{ fontSize: "3rem", color: "grey" }}>person</span>
                            <Card.Title style={{ color: "#333", marginTop: "1rem", marginBottom: "1rem", fontSize: "2rem" }}>User Info</Card.Title>
                            <Card.Text style={{ color: "#333", fontSize: "1.2rem" }}>
                                <b>Email:</b> {email}
                            </Card.Text>
                            <Card.Text style={{ color: "#333", fontSize: "1.2rem" }}>
                                <b>Joined on:</b> {formattedDate}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;
