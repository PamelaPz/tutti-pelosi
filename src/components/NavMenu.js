import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsappSquare, faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/images/logo.png';

function NavMenu() {
  return(
    <>
      <Row>
          <Col className="container-navmenu">
                <Navbar>
                    <Navbar.Brand href="#home">
                        <FontAwesomeIcon className="icon_menu" icon={faBars} />
                    </Navbar.Brand>
                    <Nav className="">
                        <Nav.Link href="#home" className="logo_center"> <img src={logo}/> </Nav.Link>
                    </Nav>
                    <Nav >
                        <div className="social_media d-flex">
                            <div className="icon"><a href="#"><FontAwesomeIcon icon={faWhatsappSquare} /></a></div>
                            <div className="icon"><a href="#"><FontAwesomeIcon icon={faInstagramSquare} /></a></div>
                            <div className="icon"><a href="#"><FontAwesomeIcon icon={faFacebookSquare} /></a></div>
                        </div>
                    </Nav>
                </Navbar>
          </Col>
      </Row>
    </>
  );
}

export default NavMenu; 