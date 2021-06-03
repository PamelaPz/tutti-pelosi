import '../assets/scss/App.scss';
import { Container } from 'react-bootstrap';
// import SectionsFifty from './Home/SectionsFifty';
// import SectionGray from './Home/SectionGray';
// import SectionPlaca from './Home/SectionPlaca';
// import SectionGreen from './Home/SectionGreen';
// import SectionPurple from './Home/SectionPurple';
// import Contact from './Home/Contact';
// import Footer from './Home/Footer';
import NavMenu from './Indentificacion/NavMenu';

function Indentificacion() {
  return (
    <Container fluid className="content" id="indentificacion">
      <NavMenu />
    </Container>
  );
}

export default Indentificacion;