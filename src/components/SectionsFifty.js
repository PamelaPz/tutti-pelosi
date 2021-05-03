import dog from '../assets/images/dog.png';
import BtnOrangeSm from './BtnOrangeSm';
import { Row, Col } from 'react-bootstrap';

function SectionsFifty() {
  return(
    <>
      <Row>
        <Col className="section">
          <section className="vh-50" id="qr">
              <div className="content_info">
                <img className="img_left" src={dog} alt=""/>
                <div className="content_text">
                  <h2>IDENTIFICACIÓN PARA TU PELUDO QR</h2>
                  <img className="img_center" src={dog} alt=""/>
                  <p>con toda su información, <br />
                      Ayudalo a regresar a casa. <br />
                      Veterinario, estética, datos médicos.</p>
                </div>
                <img className="img_right" src={dog} alt=""/>
              </div>
          </section>
        </Col>
        <Col className="section">
          <section className="vh-50" id="premios">
              <div className="content_info">
                <img className="img_left" src={dog} alt=""/>
                <div className="content_text">
                  <div>
                    <h2>PREMIOS NATURALES</h2>
                    <p>Para sus grandes logros</p>
                  </div>
                  <BtnOrangeSm link="#" classList="btnOrange_sm" classText="text_btnO" text="conocer más"/>
                </div>
                <img className="img_right" src={dog} alt=""/>
              </div>
          </section>
        </Col>
        <Col className="section">
          <section className="vh-50" id="mayores">
              <div className="content_info">
                <img className="img_left" src={dog} alt=""/>
                <div className="content_text">
                  <div>
                    <h2>PARA LOS MAYORES</h2>
                    <p>Colágeno Hidrolizado <br />
                    Mejora la calidad de vida, la movilidad.<br />
                    Reduce dolores<br />
                    propios de la edad.</p>
                  </div>
                  <BtnOrangeSm link="#" classList="btnOrange_sm" classText="text_btnO" text="conocer más"/>
                </div>
                <img className="img_right" src={dog} alt=""/>
              </div>
          </section>
        </Col>
        <Col className="section">
          <section className="vh-50" id="socios">
              <div className="content_info">
                <img className="img_left" src={dog} alt=""/>
                <div className="content_text">
                  <h2 className="text-yellow">Conviertete en <span>Socio Comercial</span></h2>
                  <BtnOrangeSm link="#" classList="btnOrange_lg" text="Beneficios"/>
                </div>
              </div>
          </section>
        </Col>
      </Row>
    </>
  );
}

export default SectionsFifty;