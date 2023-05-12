import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import LoadingSpinner from "../../components/LoadingSpinner";
import AlertPopup from "../../components/AlertPopup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../../common.css'


const SignUpForm = ({ setShowLogin }) => {
  const { signUp } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate();



  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, email, password } = event.target.elements;

    try {
      setError(null);
      setLoading(true);
      await signUp({
        username: username.value,
        email: email.value,
        password: password.value,
      });
      setShowSuccessPopup(true);

      // Clear the all value
      username.value = "";
      email.value = "";
      password.value = "";
      navigate("/private/mainpage");
    } catch (error) {
      setError(error.message);
      setShowErrorPopup(true);
    } finally {
      setLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCloseErrorPopup = () => {
    setShowErrorPopup(false);
  };

  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false);
  };


  return (
    <div className="background-image">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={4} style={{ border: "1px solid #ccc", padding: "16px", margin: "7vh auto" }}>
            {loading && <LoadingSpinner overlay />}
            <h2 style={{ textAlign: "center", fontWeight: "bold", color: "#13c2c2", marginBottom: "2rem" }}>Register</h2>

            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="material-icons">person</i>
                  </span>

                  <Form.Control type="text" name="username" placeholder="Username" required />
                </div>
              </Form.Group>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="material-icons">mail</i>
                  </span>
                  <Form.Control type="email" name="email" placeholder="Email" required />
                </div>
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="material-icons">lock</i>
                  </span>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    minLength="6"
                    required
                  />
                  <span className="input-group-text" style={{ cursor: "pointer" }} onClick={toggleShowPassword}>
                    <i className="material-icons">{showPassword ? "visibility" : "visibility_off"} </i>
                  </span>
                </div>
              </Form.Group>

              <Button variant="primary" type="submit" style={{ width: "100%", backgroundColor: "#13c2c2", marginTop: "2rem" }} >
                Register
              </Button>
            </Form>
            <div style={{ marginTop: 16, textAlign: "center" }}>
              Already have an account?{" "}
              <Link to="/login" style={{ color: "#13c2c2" }}>
                Log In
              </Link>
            </div>

            {error && (
              <AlertPopup
                show={showErrorPopup}
                title="Error"
                message={error}
                variant="danger"
                onClose={handleCloseErrorPopup}
              />
            )}
            <AlertPopup
              show={showSuccessPopup}
              title="Success"
              message="Account created successfully!"
              variant="success"
              onClose={handleCloseSuccessPopup}
            />
          </Col>
        </Row>
      </Container>
    </div>

  );
};

export default SignUpForm;
