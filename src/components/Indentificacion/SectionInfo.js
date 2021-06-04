import { Row, Col, Container } from 'react-bootstrap';
import corchete from '../../assets/images/corchete.png'

function SectionInfo() {
    return(
        <Row>
            <Col className="container_info p-0" id="SectionInfo">
                <div className="shapeI"></div>
                <Row>
                    <Col lg="12" className="p-0">
                        <div className="circle_foto" id="foto2">
                            <p className="placeholder_foto">
                                Foto 2
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Container>
                        <Row>
                            <Col lg="12" className="p-0">
                                <div className="content_infoPerrito">
                                    <h2 className="title_info">
                                        Perrita Cocker, de temperamento <br />
                                        tranquilo, jamás <br />
                                        mordería a alguien, soy amigable <br />
                                        y agradecida, no me gustan los gatos.
                                    </h2>
                                    <p className="p-info">
                                        Raza xxxxxx <br />
                                        Edad XX años<br />
                                        Sexo XXXXXXX<br />
                                        Color XXXXXXXXXX
                                    </p>
                                    <div id="description">
                                        <img src={corchete} alt="" />
                                        <p>
                                            este texto descriptivo se mantiene<br />
                                            como ejemplo para el cliente<br />
                                            PERO es EDITABLE y SUSTITUIBLE<br />
                                            por la información del cliente
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Col lg="12" className="p-0">
                        <div className="circle_foto" id="foto3">
                            <p className="placeholder_foto">
                                Foto 3
                            </p>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default SectionInfo; 