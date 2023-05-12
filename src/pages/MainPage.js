import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={6} className="d-flex align-items-center">
                    <div className="text-center">
                        <h1 className="mb-4">Welcome to My App</h1>
                        <p className="text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus justo a luctus placerat. Nulla facilisi. Nam malesuada turpis eget magna cursus consequat. Curabitur fermentum velit eu orci volutpat dapibus. Sed iaculis eget lacus non viverra. Morbi ut mi quis purus lacinia lobortis. Fusce volutpat, erat eget viverra tincidunt, ex lorem eleifend nulla, auctor viverra sapien diam at tortor. Phasellus mattis enim vitae ante facilisis feugiat. Integer ac quam sed risus sollicitudin efficitur at at lacus.
                        </p>
                        <p className="text-muted">
                            Vivamus cursus quam a ligula scelerisque, et consectetur ipsum tristique. Curabitur fermentum facilisis enim, sit amet convallis nisl aliquet nec. Quisque rhoncus lacinia odio, at finibus velit pulvinar non. Cras viverra metus non erat ullamcorper, in gravida nunc maximus. Suspendisse at erat efficitur, placerat erat id, lobortis leo. Integer elementum nibh eget justo commodo lobortis.
                        </p>
                        <p className="text-muted">
                            Sed iaculis consectetur ipsum, sed ultricies risus feugiat nec. Pellentesque faucibus lectus metus, eu facilisis arcu tincidunt non. Nam suscipit sollicitudin risus, a bibendum nunc. Integer ac semper purus, ut sagittis lorem. Sed volutpat pharetra enim, in varius tellus semper eu. Vestibulum bibendum, mauris ac pulvinar ullamcorper, ex neque congue turpis, eget fringilla velit orci at nisi.
                        </p>
                        <Link to="/private/surpriseform" className="btn btn-primary">Make Surprise</Link>
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