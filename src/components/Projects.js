/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';

function Projects() {
    return (
        <div className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? 'animate__animated animate__bounce' : ''}>
                                    <h2>Projects</h2>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
                                    </p>
                                </div>
                            )}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills justify-content-center align-items-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        <Col sm={6} md={4} className="project-img">
                                            <div className="proj-imgbx">
                                                <img src={projImg1} alt="img" />
                                            </div>
                                        </Col>
                                        <Col sm={6} md={4} className="project-img">
                                            <div className="proj-imgbx">
                                                <img src={projImg2} alt="img" />
                                            </div>
                                        </Col>
                                        <Col sm={6} md={4} className="project-img">
                                            <div className="proj-imgbx">
                                                <img src={projImg3} alt="img" />
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <p>Available soon...</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p>Available soon...</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Projects;
