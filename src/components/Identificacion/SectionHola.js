import { Row, Col, Container } from 'react-bootstrap';
import Ws from '../../assets/images/whatsapp.png'

function SectionHola() {
    return(
        <Container id="contact">
            <Row>
                <Col className="container_hola p-0">
                    <h2 className="title_hola">Hola...! soy <span>Nombre XXXXXX</span></h2>
                    <div className="card_foto">
                        <p className="placeholder_foto">
                            Foto 1 <br/> Principal
                        </p>
                        <div className="fixed_wapp">
                            <img src={Ws} alt="" />
                        </div>
                    </div>
                    <div className="content_text">
                        <h4 className="title_text">Esta es mi página de identificación</h4>
                        <p className="p-text">
                            Aquí encontrarás información importante, <br />
                            medicamentos que son indispensables para mí y todo <br />
                            lo necesario para ayudarme a regresar a casa si me he perdido. <br />
                            Pero sobretodo, la mayor expresión del cariño que me tienen <br />
                            y el enorme agradecimiento que te tendremos al ayudarme <br />
                            a reencontrar a mi familia.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default SectionHola; 