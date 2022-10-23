import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';

function Contact() {
    return (
        <div className="contact" id="contact">
            <Container>
                <Row>
                    <Col md={6}>
                        <img src={contactImg} alt="img" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input placeholder="First Name" />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input placeholder="Last Name" />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input placeholder="Email" />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input placeholder="Phone No." type="number" />
                                </Col>
                                <Col>
                                    <textarea row="6" placeholder="Message"></textarea>
                                    <button>
                                        <span>Send</span>
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;
