import { Row, Col, Container } from 'react-bootstrap';

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
                                    <li className="p-footer"><a href="#">PLACA QR</a></li>
                                    <li className="p-footer"><a href="#">HUESOS</a></li>
                                    <li className="p-footer"><a href="#">PECHUGAS DE POLLO</a></li>
                                    <li className="p-footer"><a href="#">PALITOS CARNASA DE POLLO</a></li>
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