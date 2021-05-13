import dog2 from '../assets/images/dogs2.png';
import producto1 from '../assets/images/producto5.png';
import BtnOrange from './BtnOrange';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsappSquare, faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Container, Form, Button } from 'react-bootstrap';

function Contact() {
  return(
    <>
      <Row>
          <Col className="container-contact">
            <Container className="px-5">
                <Row>
                    <Col lg="12" className=" p-0">
                        <div className="content-title">
                            <p className="title_contact text-yellow2">Contáctanos resolvemos tus <span>Dudas</span></p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" className="p-0">
                        <div className="content-gridForm">
                            <div >
                                <Form className="content_form">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="NAME" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control type="email" placeholder="E-MAIL" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows={4} placeholder="MENSAJE"/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        ENVIAR
                                    </Button>
                                </Form>
                            </div>
                            <div className="content_text">
                                <p className="subtitle_contact">Tutti Pelosi <span>consiéntelo... cuidándolo</span></p>
                                <div className="content_data">
                                    <p className="p_contacto">Queretaro, Qro.</p>
                                    <p className="p_contacto"><a href="tel:4421234567">Tel. 442 123 4567</a></p>
                                </div>
                                <div className="social_media">
                                    <div className="icon"><a className=""><FontAwesomeIcon icon={faWhatsappSquare} /></a></div>
                                    <div className="icon"><a className=""><FontAwesomeIcon icon={faInstagramSquare} /></a></div>
                                    <div className="icon"><a className=""><FontAwesomeIcon icon={faFacebookSquare} /></a></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="gb-gray p-0">
                    <Col>
                        <BtnOrange link="#" classList="btnGreen_xl" classText="text_btnO" text="SABER MÁS"/>
                    </Col>
                </Row>
            </Container>
          </Col>
      </Row>
    </>
  );
}

export default Contact; 