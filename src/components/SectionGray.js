import medalla1 from '../assets/images/medalla-1.png';
import producto1 from '../assets/images/producto1.png';
import producto3 from '../assets/images/producto3.png';
import producto4 from '../assets/images/producto4.png';
import producto5 from '../assets/images/producto5.png';
import BtnOrange from './BtnOrange';
import { Row, Col } from 'react-bootstrap';

function SectionGray() {
  return(
    <>
      <Row>
        <Col md={6} className="gb-gray d-flex justify-content-end">
            <div className="content_producto">
                <div className="img_center"><img src={medalla1} alt=""/></div>
                <div className="content_text">
                    <p className="p-product">Escanea el <span>TAG QR</span> de tu peludo y obten toda su información</p>
                    <BtnOrange link="#" classList="btnOrange_sm" classText="text_btnO" text="conocer más"/>
                </div>
            </div>
        </Col>
        <Col md={6} className="gb-gray d-flex justify-content-start">
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
        <Col md={6} className="gb-gray d-flex justify-content-end">
            <div className="content_producto">
                <div className="img_center"><img src={producto3} alt="" id="bones"/></div>
                <div className="content_text">
                    <p className="p-product"><span>Fortalece a tu Peludo</span>, huesos que le aportan Calcio, Fósforo y Minerales</p>
                    <BtnOrange link="#" classList="btnOrange_sm" classText="text_btnO" text="conocer más"/>
                </div>
            </div>
        </Col>
        <Col md={6} className="gb-gray d-flex justify-content-start">
            <div className="content_producto">
                <div className="img_center"><img src={producto4} alt="" id="carnaza"/></div>
                <div className="content_text">
                    <p className="p-product">Irresistible <span>Carnaza con Pollo</span> premia el esfuerzo y éxito de tu Mascota</p>
                    <BtnOrange link="#" classList="btnOrange_sm" classText="text_btnO" text="conocer más"/>
                </div>
            </div>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="gb-gray d-flex justify-content-end">
            <div className="content_producto">
                <div className="img_center"><img src={producto1} alt="" id="pollo"/></div>
                <div className="content_text">
                    <p className="p-product">Irresistible <span>Carnaza con Pollo</span> premia el esfuerzo y éxito de tu Mascota</p>
                    <BtnOrange link="#" classList="btnOrange_sm" classText="text_btnO" text="conocer más"/>
                </div>
            </div>
        </Col>
        <Col md={6} className="gb-gray d-flex justify-content-start">
            <div className="content_producto">
                <div className="img_center"><img src={producto5} alt="" id="colageno"/></div>
                <div className="content_text">
                    <p className="p-product"><span>Colágeno Hidrolizado</span>, recupera la fortaleza de Perros Adultos</p>
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