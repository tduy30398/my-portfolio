/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col sm={6}>
                        <a href="#" alt="logo">
                            <img src={logo} alt="logo" />
                        </a>
                    </Col>
                    <Col sm={6}>
                        <div className="social-icons">
                            <a href="https://github.com/tduy30398" target="_blank">
                                <img src={navIcon1} alt="" />
                            </a>
                            <a href="https://www.facebook.com/tduyhcmus" target="_blank">
                                <img src={navIcon2} alt="" />
                            </a>
                            <a href="https://www.instagram.com/tduy99us/" target="_blank">
                                <img src={navIcon3} alt="" />
                            </a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
