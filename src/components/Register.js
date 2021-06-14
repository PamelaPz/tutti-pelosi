import logo from '../assets/images/logo-gris.png'
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Register() {
    return (
      <>
        <Container fluid className="content" id="misMascotas">
            <div className="wp_card" id="registro">
                <div className="wp_form">
                    <form>
                            <div><img src={logo} alt=""/></div>
                            <h1 className="titleCard">Registro</h1>
                            <div className="wp_showData">
                                <input className="inputInfo" type="text" placeholder="E-MAIL"/>
                                <input className="inputInfo" type="text" placeholder="CONTRASEÑA"/>
                                <input className="inputInfo" type="text" placeholder="CONFIRMAR CONTRASEÑA"/>
                            </div>
                            <Link to="/register" type="submit" className="btn btnNext">SIGUIENTE</Link>
                    </form>
                </div>
            </div>
          </Container>
      </>
    );
  }
  
  export default Register;