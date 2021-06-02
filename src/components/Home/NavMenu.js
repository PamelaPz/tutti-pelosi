import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsappSquare, faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import Menu from './MenuModal';
import { Link } from "react-router-dom";

class NavMenu extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
  }

  showModal = () => {
    // e.preventDefault()
    this.setState({show: !this.state.show})
  };

  render() {
    return(
        <div className="content-Menu">
          <Row>
              <Col className="container-navmenu">
                <Navbar >
                    <button type="button" onClick={this.showModal}>
                      <FontAwesomeIcon className="icon_menu" icon={faBars} />
                    </button>
                    <Nav className="">
                        <Link to="/" className="logo_center"> <img src={logo} alt="logo_tuttipelosi"/> </Link>
                    </Nav>
                    <Nav >
                        <div className="social_media d-flex">
                            <div className="icon"><a href="https://www.facebook.com/Tutti-Pelosi-100930825425191"><FontAwesomeIcon icon={faInstagramSquare} /></a></div>
                            <div className="icon"><a href="https://www.facebook.com/Tutti-Pelosi-100930825425191"><FontAwesomeIcon icon={faWhatsappSquare} /></a></div>
                            <div className="icon"><a href="https://www.facebook.com/Tutti-Pelosi-100930825425191"><FontAwesomeIcon icon={faFacebookSquare} /></a></div>
                        </div>
                    </Nav>
                </Navbar>
              </Col>
          </Row>
          <Menu show={this.state.show} />
        </div>
    );
  }
}

export default NavMenu; 