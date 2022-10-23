/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

function NavBar() {
    const [isActive, setIsActive] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    });

    return (
        <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={isActive === 'home' ? 'active' : ''}
                            onClick={() => setIsActive('home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={isActive === 'skills' ? 'active' : ''}
                            onClick={() => setIsActive('skills')}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={isActive === 'projects' ? 'active' : ''}
                            onClick={() => setIsActive('projects')}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            href="#contact"
                            className={isActive === 'contact' ? 'active' : ''}
                            onClick={() => setIsActive('contact')}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
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
                        <button>
                            <span>Let's connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
