/* eslint-disable jsx-a11y/img-redundant-alt */
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import TrackVisibility from 'react-on-screen';

function Banner() {
    return (
        <div className="banner" id="home">
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? 'animate__animated animate__bounce' : ''}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>Hi! I'm Duy, ReactJs Developer</h1>
                                    <p>
                                        Welcome to my homepage! My full name is Lam Thanh Duy, and I'm a front-end
                                        developer. Currently, I've worked at TMA solutions from March-2022. Before that,
                                        I graduated from the Department of Information Technology - Electronic and
                                        Telecommunications, Vietnam National University Ho Chi Minh City, University of
                                        Science.
                                        <br />
                                        <br />
                                        Email: tduy30399@gmail.com
                                    </p>
                                    <button>
                                        Let's connect <ArrowRightCircle size={25} />
                                    </button>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="image" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Banner;
