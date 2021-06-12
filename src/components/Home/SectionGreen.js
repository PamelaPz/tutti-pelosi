import producto1 from '../../assets/images/producto1.png';
import producto2 from '../../assets/images/producto2.png';
import producto3 from '../../assets/images/producto3.png';
import BtnOrange from './BtnOrange';
import { Row, Col } from 'react-bootstrap';

function SectionGreen() {
  return(
    <>
      <Row>
          <Col className="gb-gray bg_yellow-sm container-peludo p-0">
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
                            <div className="img_grid"><img src={producto2} id="img_center" alt=""/></div>
                        </div>
                        <div className="p-0">
                            <div className="img_grid" id="img-end"><img src={producto3} id="img_right" alt=""/></div>
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
                                <p className="p_peludo">
                                    Productos Naturales y Saludables <br />
                                    Irresistible Carnaza de Pollo, Pechugas Secas de <br />
                                    Pollo y Huesos Horneados</p>
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