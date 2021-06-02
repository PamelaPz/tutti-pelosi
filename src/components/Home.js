import '../assets/scss/App.scss';
import { Container } from 'react-bootstrap';
import SectionsFifty from './Home/SectionsFifty';
import SectionGray from './Home/SectionGray';
import SectionPlaca from './Home/SectionPlaca';
import SectionGreen from './Home/SectionGreen';
import SectionPurple from './Home/SectionPurple';
import Contact from './Home/Contact';
import Footer from './Home/Footer';
import NavMenu from './Home/NavMenu';

function Home() {
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

export default Home;