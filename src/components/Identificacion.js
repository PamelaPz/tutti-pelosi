import '../assets/scss/App.scss';
import { Container } from 'react-bootstrap';
import SectionHola from './Identificacion/SectionHola';
import NavMenu from './Identificacion/NavMenu';
import SectionInfo from './Identificacion/SectionInfo';
import SectionTables from './Identificacion/SectionsTable';

function Identificacion() {
  return (
    <Container fluid className="content" id="indentificacion">
      <NavMenu />
      <SectionHola />
      <SectionInfo />
      <SectionTables />
    </Container>
  );
}

export default Identificacion;