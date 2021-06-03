import Home from './Home'
import Indentificacion from './Indentificacion';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

function ModalSwitch() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/indentificacion" children={<Indentificacion />} />
      </Switch>
    </div>
  );
}

export default App;
