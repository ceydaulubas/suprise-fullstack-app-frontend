import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import AlertPopup from './AlertPopup';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';

function SurpriseForm() {
    const [formData, setFormData] = useState({ email: '', name: '', theme: '', relative: '' });
    const [focusedField, setFocusedField] = useState('');
    const [submitting, setSubmitting] = useState(false);

    // New states for managing the popup
    const [showPopup, setShowPopup] = useState(false);
    const [popupConfig, setPopupConfig] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFocus = (e) => {
        setFocusedField(e.target.name);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        console.log(formData);

        // Connect to the backend and send the data here.
        try {
            // Replace the following URL with your actual API endpoint
            const apiUrl = 'http://localhost:5001/api/surprise/';

            // Send a POST request to the backend with the form data
            const response = await axios.post(apiUrl, formData);

            // You can access the response data using response.data
            console.log(response.data);

            // Update the following line
            const generatedText = response.data.content;

            //Start to send e-mail 
            const emailResponse = await axios.post('http://localhost:5001/api/sendEmail', {
                email: formData.email,
                name: formData.name,
                relative: formData.relative,
                theme: formData.theme,
                message: generatedText,

            });

            console.log('The situation of sending email:', emailResponse.data);

            // Show success popup
            setPopupConfig({ title: 'Successfully sent the following message', message: `${generatedText}`, variant: 'success' });
        } catch (error) {
            // Show error popup
            setPopupConfig({ title: 'Error', message: error.message, variant: 'danger' });
        } finally {
            setSubmitting(false);
            setShowPopup(true);
        }
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col xs={12} md={{ span: 6, offset: 3 }}>
                    <h2 className="text-success mb-4">Form Information</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label className="text-success d-flex justify-content-between">
                                Email <span className="text-danger">*</span>
                            </Form.Label>
                            {focusedField === 'email' && (
                                <small className="text-muted mb-2">Write the e-mail address of the person you are sending the message to.</small>
                            )}
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="text-success d-flex justify-content-between">
                                Name <span className="text-danger">*</span>
                            </Form.Label>
                            {focusedField === 'name' && (
                                <small className="text-muted mb-2">Write the name of the person you are sending the message to.</small>
                            )}
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="text-success d-flex justify-content-between">
                                Relative <span className="text-danger">*</span>
                            </Form.Label>
                            {focusedField === 'relative' && (
                                <small className="text-muted mb-2">Write your relationship with the person you are sending. ex: my mother, father, lover, friend)</small>
                            )}
                            <Form.Control
                                type="text"
                                name="relative"
                                value={formData.relative}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                required
                            />
                        </Form.Group>
                        <Form.Group>

                            <Form.Label className="text-success">Theme</Form.Label>
                            <Form.Control
                                as="select"
                                name="theme"
                                value={formData.theme}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                required
                            >
                                <option value="">Choose a Theme</option>
                                <option value="new year">New Year</option>
                                <option value="birthday">Birthday</option>
                                <option value="valentine's day">Valentine's Day</option>
                                <option value="mother's day">Mother's Day</option>
                                <option value="father's day">Father's Day</option>
                            </Form.Control>
                        </Form.Group>
                        <Button className="w-100 mt-3" variant="success" type="submit" disabled={submitting}>
                            {submitting ? (
                                <LoadingSpinner />
                            ) : (
                                'Send'
                            )}
                        </Button>
                    </Form>
                </Col>
            </Row>
            <AlertPopup
                show={showPopup}
                title={popupConfig.title}
                message={popupConfig.message}
                variant={popupConfig.variant}
                onClose={() => setShowPopup(false)}
            />
        </Container>
    );
}

export default SurpriseForm;

