import dog4 from '../assets/images/dogs4.png';
import dog5 from '../assets/images/dogs5.png';
import dog6 from '../assets/images/dogs6.png';
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
                  <h2 className="super-title">IDENTIFICACIÓN QR PARA SU PELUDO</h2>
                  <img className="img_center" src={medalla1} alt=""/>
                  <p className="p-principal">
                    Con toda la información necesaria para<br />
                   <span>AYUDARLO A REGRESAR A CASA!</span> <br />
                    Además: veterinario, estética, datos médicos y más
                  </p>
                </div>
                <div className="img_right"><img src={dog6} alt=""/></div>
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
                    <p className="p-principal">Para recompensar sus grandes logros</p>
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
                    <h2 className="super-title font-SemiBold">COLÁGENO HIDROLIZADO</h2>
                    <p className="p-principal">
                      Para ayudar a los adultos <br />
                      a recuperar <br />
                      la movilidad y fortaleza  
                    </p>
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