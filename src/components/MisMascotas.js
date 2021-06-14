import '../assets/scss/App.scss';
import { Container } from 'react-bootstrap';
import NavMenu from './Home/NavMenu';
import BodyInfo from './MisMascotas/BodyInfo';

function MisMascotas() {
  return (
    <Container fluid className="content" id="misMascotas">
      <NavMenu />
      <BodyInfo />
    </Container>
  );
}

export default MisMascotas;