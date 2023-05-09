// src/components/AlertPopup.js

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const AlertPopup = ({ show, title, message, variant, onClose }) => {
    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton className={`bg-${variant} text-white`}>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
                <Button variant={variant} onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AlertPopup;
