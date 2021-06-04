import { Row, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

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
                                    <li className="p-menu"> <HashLink smooth to="/identificacion#contact">Contacta a mi Dueño</HashLink> </li>
                                    <li className="p-menu"> <HashLink smooth to="/identificacion#segundo">Segundo Contacto</HashLink> </li>
                                    <li className="p-menu"> <Link to="/identificacion">Mi Veterinario</Link> </li>
                                    <li className="p-menu"> <Link to="/identificacion">Mi SPA</Link> </li>
                                    <li className="p-menu"> <HashLink smooth to="/identificacion#vacunas">Vacunas</HashLink> </li>
                                    <li className="p-menu"> <HashLink smooth to="/identificacion#cuidados">Cuidados <br/> Especiales</HashLink> </li>
                                    <li className="p-menu"> <HashLink smooth to="/identificacion#caracter">Carácter</HashLink> </li>
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