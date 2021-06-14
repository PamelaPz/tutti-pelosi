import Home from './Home'
import Identificacion from './Identificacion';
import MisMascotas from './MisMascotas';
import Login from './Login';
import Register from './Register';
import NewTag from './NewTag';
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
        <Route exact path="/" children={<Home />}/>
        <Route path="/identificacion" children={<Identificacion />} />
        <Route path="/mis_mascotas" children={<MisMascotas />} />
        <Route path="/login" children={<Login />} />
        <Route path="/registro" children={<Register />} />
        <Route path="/new_tag" children={<NewTag />} />
      </Switch>
    </div>
  );
}

export default App;
