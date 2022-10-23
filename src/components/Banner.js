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
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
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
