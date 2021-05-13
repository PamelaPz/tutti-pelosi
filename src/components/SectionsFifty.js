import dog3 from '../assets/images/dogs3.png';
import dog4 from '../assets/images/dogs4.png';
import dog5 from '../assets/images/dogs5.png';
import cel1 from '../assets/images/cel-qr.png';
import medalla1 from '../assets/images/medalla-qr2.png';
import premios from '../assets/images/producto-premios.png';
import producto5 from '../assets/images/producto5.png';
import circle3 from '../assets/images/circle-socio.png';

import BtnOrange from './BtnOrange';
import { Row, Col } from 'react-bootstrap';

function SectionsFifty() {
  return(
    <>
      <Row>
        <Col className="section">
          <section className="vh-50" id="qr">
              <div className="content_info">
                <div className="img_left"><img src={cel1} alt=""/></div>
                <div className="content_text">
                  <h2 className="super-title">IDENTIFICACIÓN PARA TU PELUDO QR</h2>
                  <img className="img_center" src={medalla1} alt=""/>
                  <p className="p-principal">con toda su información, <br />
                      Ayudalo a regresar a casa. <br />
                      Veterinario, estética, datos médicos.</p>
                </div>
                <div className="img_right"><img src={dog3} alt=""/></div>
              </div>
          </section>
        </Col>
      </Row>
      <Row>
        <Col className="section">
          <section className="vh-50" id="premios">
              <div className="content_info">
                <div className="img_left"><img  src={premios} alt=""/></div>
                <div className="content_text">
                  <div>
                    <h2 className="super-title">PREMIOS NATURALES</h2>
                    <p className="p-principal">Para sus grandes logros</p>
                  </div>
                  <BtnOrange link="#" classList="btnOrange_sm" classText="text_btnO" text="conocer más"/>
                </div>
                <div className="img_right"><img src={dog4} alt=""/></div>
              </div>
          </section>
        </Col>
      </Row>
      <Row>
        <Col className="section">
          <section className="vh-50" id="mayores">
              <div className="content_info">
                <div className="img_left"><img src={dog5} alt=""/></div>
                <div className="content_text">
                  <div>
                    <h2 className="super-title">PARA LOS MAYORES</h2>
                    <p className="p-principal">Colágeno Hidrolizado <br />
                      Mejora la calidad de vida, la movilidad.<br />
                      Reduce dolores<br />
                      propios de la edad.</p>
                  </div>
                  <BtnOrange link="#" classList="btnOrange_sm" classText="text_btnO" text="conocer más"/>
                </div>
                <div className="img_right"><img src={producto5} alt=""/></div>
              </div>
          </section>
        </Col>
      </Row>
      <Row>
        <Col className="section">
          <section className="vh-50" id="socios">
            <div className="content_info">
              <div className="img_left"><img src={circle3} alt=""/></div>
              <div className="content_text">
                <h2 className="text-yellow title_socio">Conviertete en <span>Socio Comercial</span></h2>
                <BtnOrange link="#" classList="btnOrange_lg" classText="text_btnO" text="Beneficios"/>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </>
  );
}

export default SectionsFifty;