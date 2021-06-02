import dog2 from '../../assets/images/dogs2.png';
import producto1 from '../../assets/images/producto6.png';
import BtnOrange from './BtnOrange';
import { Row, Col } from 'react-bootstrap';

function SectionPurple() {
  return(
    <>
      <Row>
          <Col className="container-fortaleza">
            <div className="shape-paraleloPurple"></div>
            <Row>
                <Col lg="12" className=" p-0">
                    <div className="content-title">
                        <div className="d-flex justify-content-center">
                            <div className="content_text">
                                <p className="title_peludo">Recupera la <span>Fortaleza</span> de tu <span>Peludo</span></p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg="12" className=" p-0">
                    <div className="content-img">
                        <div className="p-0">
                            <div className="img_grid"><img src={dog2} id="img_dogs" alt=""/></div>
                        </div>
                        <div className="p-0">
                            <div className="img_grid"><img src={producto1} id="img_bag" alt=""/></div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg="12" className=" p-0">
                    <div className="content-subtitle">
                        <div className="d-flex justify-content-center">
                            <div className="content_text">
                                <p className="subtitle_peludo">COLÁGENO HIDROLIZADO</p>
                                <p className="p_peludo">
                                    Mejora la calidad de vida y la movilidad. <br/>
                                    Retarda el envejecimiento natural y reduce dolores en las articulaciones. <br/>
                                    Regenera cartílagos y devuelve el brillo en el pelo. <br/>
                                </p>
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

export default SectionPurple; 