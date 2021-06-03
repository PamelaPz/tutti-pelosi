import '../assets/scss/App.scss';
import { Container } from 'react-bootstrap';
import SectionHola from './Indentificacion/SectionHola';
import NavMenu from './Indentificacion/NavMenu';
import SectionInfo from './Indentificacion/SectionInfo';

function Indentificacion() {
  return (
    <Container fluid className="content" id="indentificacion">
      <NavMenu />
      <SectionHola />
      <SectionInfo />
    </Container>
  );
}

export default Indentificacion;