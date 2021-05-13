import '../assets/scss/App.scss';
import SectionsFifty from './SectionsFifty';
import { Container } from 'react-bootstrap';
import SectionGray from './SectionGray';
import SectionPlaca from './SectionPlaca';
import SectionGreen from './SectionGreen';
import SectionPurple from './SectionPurple';
import Contact from './Contact';
import Footer from './Footer';
import NavMenu from './NavMenu';


function App() {
  return (
    <Container fluid className="content">
      <NavMenu />
      <SectionsFifty />
      <SectionGray />
      <SectionPlaca />
      <SectionGreen />
      <SectionPurple />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
