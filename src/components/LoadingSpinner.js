import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = ({ overlay = false }) => {
    if (overlay) {
        return (
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "rgba(0, 0, 0, 0.5)",
                    zIndex: 2,
                }}
            >
                <Spinner animation="border" variant="primary" />
            </div>
        );
    }

    return <Spinner animation="border" variant="primary" />;
};

export default LoadingSpinner;
