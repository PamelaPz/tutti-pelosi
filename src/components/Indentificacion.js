import '../assets/scss/App.scss';
import { Container } from 'react-bootstrap';
import SectionHola from './Indentificacion/SectionHola';
import NavMenu from './Indentificacion/NavMenu';
import SectionInfo from './Indentificacion/SectionInfo';
import SectionTables from './Indentificacion/SectionsTable';

function Indentificacion() {
  return (
    <Container fluid className="content" id="indentificacion">
      <NavMenu />
      <SectionHola />
      <SectionInfo />
      <SectionTables />
    </Container>
  );
}

export default Indentificacion;