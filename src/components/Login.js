import logo from '../assets/images/logo-gris.png'
import { Container } from 'react-bootstrap';
// import { Link } from "react-router-dom";

function Login() {
    return (
      <>
        <Container fluid className="content" id="misMascotas">
            <div className="wp_card">
                <div className="wp_form">
                    <form>
                            <div><img src={logo} alt=""/></div>
                            <h1 className="titleCard">BIENVENIDO</h1>
                            <div className="wp_showData">
                                <input className="inputInfo" type="text" placeholder="E-MAIL"/>
                                <input className="inputInfo" type="text" placeholder="CONTRASEÑA"/>
                            </div>
                            <button className="btn btnPass">RECUPERAR CONTRASEÑA</button>
                            <button className="btn btnNew">NUEVO USUARIO</button>
                            <button to="/register" type="submit" className="btn btnNext">SIGUIENTE</button>
                    </form>
                </div>
            </div>
          </Container>
      </>
    );
  }
  
  export default Login;