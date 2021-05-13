import dog from '../assets/images/dogs1.png';
import dog2 from '../assets/images/dogs2.png';
import circle1 from '../assets/images/circle-perfil.png';
import circle2 from '../assets/images/circle-registrarse.png';
import cel2 from '../assets/images/cel-qr2.png';
import medalla1 from '../assets/images/medalla-qr1.png';
import producto1 from '../assets/images/producto1.png';
import producto2 from '../assets/images/producto2.png';
import producto3 from '../assets/images/producto3.png';
import producto4 from '../assets/images/producto4.png';
import producto5 from '../assets/images/producto5.png';
import BtnOrange from './BtnOrange';
import { Row, Col } from 'react-bootstrap';

function SectionPlaca() {
  return(
    <>
      <Row>
          <Col className="p-0 container-placa">
          <div className="shape"></div>
            <Row>
                <Col lg="12" className="gb-gray p-0">
                    <div className="content_placa">
                        <div className="d-flex justify-content-end p-0">
                            <div className="img_left"><img src={cel2} alt=""/></div>
                        </div>
                        <div className="d-flex justify-content-start p-0">
                            <div className="content_center">
                                <div className="content_text">
                                    <div className="img_up"><img src={dog} alt=""/></div>
                                    <p className="title_socio"><span>PLACA QR</span> de identidad para tu <span>Peludo</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg="12" className="p-0">
                    <div className="content_placa">
                        <div className="d-flex justify-content-end p-0">
                            <div className="shape-text">
                                <div className="shape-rounded"></div>
                                <ul className="content_ul p-dark">
                                    <li>Datos médicos</li>
                                    <li>Fecha de vacunación</li>
                                    <li>Alergias</li>
                                    <li>Enfermedades</li>
                                    <li> y lo <span>MÁS importante</span> donde localizarte si esta <span>Extraviado</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex justify-content-start p-0">
                            <div className="content_center">
                                <div className="content_text">
                                    <div className="img_up" id="medalla-qr"><img src={medalla1} alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="gb-gray p-0">
                <Col  style={{zIndex: 5}} >
                    <BtnOrange link="#" classList="btnGreen_sm" classText="text_btnO" text="conocer más"/>
                </Col>
            </Row>
            <Row>
                <Col className="gb-gray p-0">
                    <div className="content_placa">
                        <div className="d-flex justify-content-end p-0">
                            <div className="content_img">
                                <div className="img_center" id="circle-dog">
                                    <img src={circle1} alt=""/>
                                    <p className="p-circle">MI PERFIL</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-start p-0">
                            <div className="content_img">
                                <div className="img_center" id="circle-qr">
                                    <img src={circle2} alt=""/>
                                    <p className="p-circle">REGISTRATE (TAG)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
          </Col>
      </Row>
    </>
  );
}

export default SectionPlaca; 