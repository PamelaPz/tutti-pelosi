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

function SectionGreen() {
  return(
    <>
      <Row>
          <Col className="gb-gray container-peludo p-0">
            <div className="shape-paralelo"></div>
            <Row>
                <Col lg="12" className=" p-0">
                    <div className="content-title">
                        <div className="d-flex justify-content-center">
                            <div className="content_text">
                                <p className="title_peludo">Para <span>consentir</span> a tu <span>Peludo</span></p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg="12" className=" p-0">
                    <div className="content-gridImg">
                        <div className="p-0">
                            <div className="img_grid"><img src={producto1} id="img_left" alt=""/></div>
                        </div>
                        <div className="p-0">
                            <div className="img_grid"><img src={producto2} alt=""/></div>
                        </div>
                        <div className="p-0">
                            <div className="img_grid"><img src={producto3} id="img_right" alt=""/></div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg="12" className=" p-0">
                    <div className="content-subtitle">
                        <div className="d-flex justify-content-center">
                            <div className="content_text">
                                <p className="subtitle_peludo">Productos Naturales y Saludables</p>
                                <p className="p_peludo">irresistible carnasa de pollo, pechugas de pollo y huesos deshidratados</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="gb-gray p-0 ">
                <Col>
                    <BtnOrange link="#" classList="btnGreen_xl" classText="text_btnO" text="SABER MÁS"/>
                </Col>
            </Row>
          </Col>
      </Row>
    </>
  );
}

export default SectionGreen; 