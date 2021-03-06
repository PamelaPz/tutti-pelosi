import medalla1 from '../../assets/images/medalla-1.png';
import producto1 from '../../assets/images/producto1.png';
import producto3 from '../../assets/images/producto3.png';
import producto4 from '../../assets/images/producto4.png';
import producto6 from '../../assets/images/producto6.png';
import BtnOrange from './BtnOrange';
import { Row, Col } from 'react-bootstrap';

function SectionGray() {
  return(
    <>
      <Row>
        <Col lg={6} xs={6} className="gb-gray d-flex justify-content-md-end p-0">
            <div className="content_producto">
                <div className="img_center"><img src={medalla1} alt=""/></div>
                <div className="content_text">
                    <p className="p-product">Escanea el <span>TAG QR</span> de tu peludo y obten toda su información</p>
                    <BtnOrange link="#" classList="btnOrange_sm" classText="text_btnO" text="conocer más"/>
                </div>
            </div>
        </Col>
        <Col lg={6} xs={6} className="gb-gray d-flex justify-content-md-start p-0">
            <div className="content_producto">
                <div className="img_center"><img src={medalla1} alt=""/></div>
                <div className="content_text">
                    <p className="p-product">Escanea el <span>TAG QR</span> de tu peludo y obten toda su información</p>
                    <BtnOrange link="#" classList="btnOrange_sm" classText="text_btnO" text="conocer más"/>
                </div>
            </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6} xs={6} className="gb-gray d-flex justify-content-md-end reset_width p-0">
            <div className="content_producto">
                <div className="img_center"><img src={producto3} alt="" id="bones"/></div>
                <div className="content_text reset_p">
                    <p className="p-product span_block"><span>Huesos Naturales</span> para los peludos de mayor tamaño! <br/> Premia sus grandes logros mientras lo fortaleces <br/> con calcio, hierro, vitaminas y minerales</p>
                    <BtnOrange link="#" classList="btnOrange_sm" classText="text_btnO" text="conocer más"/>
                </div>
            </div>
        </Col>
        <Col lg={6} xs={6} className="gb-gray d-flex justify-content-md-start p-0">
            <div className="content_producto">
                <div className="img_center"><img src={producto4} alt="" id="carnaza"/></div>
                <div className="content_text reset_p">
                    <p className="p-product span_block"> <span id="lg_hidden">Palitos de Carnaza con Pollo.</span> Irresistible <span id="sm_hidden">Palitos de Carnaza con Pollo</span> para limpiar los dientes y premiar el esfuerzo y éxito de tu mascota</p>
                    <BtnOrange link="#" classList="btnOrange_sm" classText="text_btnO" text="conocer más"/>
                </div>
            </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6} xs={6} className="gb-gray d-flex justify-content-md-end pt-lg-5 p-0">
            <div className="content_producto">
                <div className="img_center"><img src={producto1} alt="" id="pollo"/></div>
                <div className="content_text reset_p">
                    <p className="p-product span_block">Deliciosa <span>Carne de Pollo Seca</span> para consentir a perros y gatos con <br /> una botana que es 100% proteína natural</p>
                    <BtnOrange link="#" classList="btnOrange_sm" classText="text_btnO" text="conocer más"/>
                </div>
            </div>
        </Col>
        <Col lg={6} xs={6} className="gb-gray d-flex justify-content-md-start pt-lg-5 p-0">
            <div className="content_producto">
                <div className="img_center"><img src={producto6} alt="" id="colageno"/></div>
                <div className="content_text reset_p">
                    <p className="p-product span_block py-lg-3 py-2"><span>Colágeno Hidrolizado</span> para recuperar la movilidad y energía reduciendo dolores en las articulaciones</p>
                    <BtnOrange link="#" classList="btnOrange_sm" classText="text_btnO" text="conocer más"/>
                </div>
            </div>
        </Col>
      </Row>
      <Row>
          <Col className="gb-gray contentBtn">
            <BtnOrange link="#" classList="btnGreen_xl" classText="text_btnO" text="Contáctanos"/>
          </Col>
      </Row>
    </>
  );
}

export default SectionGray;