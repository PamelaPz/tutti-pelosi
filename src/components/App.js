import '../assets/scss/App.scss';
import SectionsFifty from './SectionsFifty';
import { Container } from 'react-bootstrap';
import SectionGray from './SectionGray';
import SectionPlaca from './SectionPlaca';
import SectionGreen from './SectionGreen';
import SectionPurple from './SectionPurple';


function App() {
  return (
    <Container fluid className="content">
      <SectionsFifty />
      <SectionGray />
      <SectionPlaca />
      <SectionGreen />
      <SectionPurple />
    </Container>
  );
}

export default App;
