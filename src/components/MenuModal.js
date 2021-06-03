import { Row, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const MenuModal = ({show}) => {
    const showHideClassName = show ? "container-modal display-block" : "container-modal display-none";

    return(
        <Row>
            <Col lg="12" className={showHideClassName}>
                <Container className="">
                    <Row>
                        <Col lg="12" className="p-0">
                            <div className="content_menu">
                                <ul className="content_ul">
                                    <li className="p-menu"> <Link to="/">Contacta a mi Dueño</Link> </li>
                                    <li className="p-menu"> <Link to="/">Segundo Contacto</Link> </li>
                                    <li className="p-menu"> <Link to="/">Mi Veterinario</Link> </li>
                                    <li className="p-menu"> <Link to="/">Mi SPA</Link> </li>
                                    <li className="p-menu"> <Link to="/">Vacunas</Link> </li>
                                    <li className="p-menu"> <Link to="/">Cuidados</Link> </li>
                                    <li className="p-menu"> <Link to="/">Especiales</Link> </li>
                                    <li className="p-menu"> <Link to="/">Carácter</Link> </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>

    );
}

export default MenuModal; 