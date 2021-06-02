import { Row, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Footer() {
  return(
    <>
      <Row>
          <Col className="container-footer">
            <Container>
                <Row>
                    <Col lg="12" className="d-flex justify-content-center p-0">
                        <div className="content-p">
                            <p className="title_footer">Tutti Pelosi / 2021 /Todos los derechos reservados</p>
                            <div className="footer-nav">
                                <ul>
                                    <li className="p-footer"><Link to="/">PLACA QR</Link></li>
                                    <li className="p-footer"><Link to="/">HUESOS</Link></li>
                                    <li className="p-footer"><Link to="/">PECHUGAS DE POLLO</Link></li>
                                    <li className="p-footer"><Link to="/">PALITOS CARNASA DE POLLO</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Row className="gb-grayDark pt-4"></Row>
          </Col>
      </Row>
    </>
  );
}

export default Footer; 