import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import Menu from '../MenuModal';
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
    this.setState({show: !this.state.show})
  };

  render() {
    return(
        <div className="content-Menu second_page ">
          <Row>
              <Col className="container-navmenu">
                <Navbar>
                    <Nav className="">
                        <Link to="/" className="logo_center"> <img src={logo} alt="logo_tuttipelosi"/> </Link>
                    </Nav>
                    <button type="button" onClick={this.showModal}>
                      <FontAwesomeIcon className="icon_menu" icon={faBars} />
                    </button>
                </Navbar>
              </Col>
              <div className="curved"></div>
          </Row>
          <Menu show={this.state.show} />
        </div>
    );
  }
}

export default NavMenu; 