import Home from './Home'
import Identificacion from './Identificacion';
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
        <Route path="/identificacion" children={<Identificacion />} />
      </Switch>
    </div>
  );
}

export default App;
