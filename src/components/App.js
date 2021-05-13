import '../assets/scss/App.scss';
import SectionsFifty from './SectionsFifty';
import { Container } from 'react-bootstrap';
import SectionGray from './SectionGray';
import SectionPlaca from './SectionPlaca';
import SectionGreen from './SectionGreen';


function App() {
  return (
    <Container fluid className="content">
      <SectionsFifty />
      <SectionGray />
      <SectionPlaca />
      <SectionGreen />
    </Container>
  );
}

export default App;
