/* eslint-disable jsx-a11y/img-redundant-alt */
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TrackVisibility from 'react-on-screen';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';

function Skills() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? 'animate__animated animate__shakeX' : ''}>
                                    <h2>Skills</h2>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        <br /> Lorem Ipsum has been the industry's standard dummy text.
                                    </p>
                                </div>
                            )}
                        </TrackVisibility>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="image" />
                                <h5>Social Activities</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="image" />
                                <h5>English Proficiency</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="image" />
                                <h5>Programming Skill</h5>
                            </div>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Skills;
