import { Row, Col, Container } from 'react-bootstrap';
import Mapa from '../Indentificacion/Mapa';
import icon from '../../assets/images/icon_vacuna.png';
import casa from '../../assets/images/icon_casa.png';
import dog from '../../assets/images/icon_dog.png';
import corazon from '../../assets/images/icon_corazon.png';
import mapa from '../../assets/images/mapa.png';

function SectionTables() {
    return(
       <Container>
            <Row>
                <Col className="container_tables p-0">
                    <Row>
                        <Col lg="12" className="p-0">
                            <div className="table_vacunas" id="foto2">
                                <table className="content_table">
                                    <tr>
                                        <th><span><img src={icon} alt="vacuna"/></span> Vacuna</th>
                                        <th id="date">Fecha</th>
                                    </tr>
                                    <tr>
                                        <td>XXXXXXXXXX</td>
                                        <td>XXXXX</td>
                                    </tr>
                                    <tr>
                                        <td>XXXXXXXXXX</td>
                                        <td>XXXXX</td>
                                    </tr>
                                    <tr>
                                        <td>XXXXXXXXXX</td>
                                        <td>XXXXX</td>
                                    </tr>
                                    <tr>
                                        <td>XXXXXXXXXX</td>
                                        <td>XXXXX</td>
                                    </tr>
                                    <tr>
                                        <td>XXXXXXXXXX</td>
                                        <td>XXXXX</td>
                                    </tr>
                                    <tr>
                                        <td>XXXXXXXXXX</td>
                                        <td>XXXXX</td>
                                    </tr>
                                </table>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12" className="p-0">
                            <div className="content_box">
                                <div className="header">
                                    <span><img src={corazon} id="corazon" alt="heart"/></span>
                                    <h4 className="title_tabla">Cuidados Especiales</h4>
                                </div>
                                <p className="p-tableI">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing
                                    elit, sed diam nonummy nibh euismod
                                    tincidunt ut laoreet dolore magna aliquam erat
                                    volutpat. Ut wisi enim ad minim veniam, quis
                                    nostrud exerci tation ullamcorper suscipit lo-
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12" className="p-0">
                            <div className="content_box">
                                <div className="header">
                                    <span><img src={dog} id="dog" alt="perro"/></span>
                                    <h4 className="title_tabla">Mi Caracter</h4>
                                </div>
                                <p className="p-tableI">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing
                                    elit, sed diam nonummy nibh euismod
                                    tincidunt ut laoreet dolore magna aliquam erat
                                    volutpat. Ut wisi enim ad minim veniam, quis
                                    nostrud exerci tation ullamcorper suscipit lo-
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12" className="p-0">
                            <div className="content_box">
                                <div className="header">
                                    <span><img src={casa} id="casa" alt="casa"/></span>
                                    <h4 className="title_tabla">Mi Casa</h4>
                                </div>
                                <p className="p-tableD">
                                    <a href="tel:">Telefono 1</a> 
                                    <a href="tel:">Telefono 2</a> 
                                    <a href="tel:">Telefono 3</a> <br />
                                    <a href="mailto:">E-mail</a> <br />
                                    <span>Dirección</span>, 
                                    <span>Ciudad y Estado</span>
                                </p>
                                <div className="content_map">
                                    {/* Componente que cusa la
                                        API de Google Maps: Solo faltaría agregar una apikey
                                    
                                        <Mapa />
                                    */}
                                    <img src={mapa} alt=""/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
       </Container>
    );
}

export default SectionTables; 