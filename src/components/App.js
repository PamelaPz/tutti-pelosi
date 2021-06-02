import Home from './Home'
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
        <Route path="/" children={<Home />} />
      </Switch>
    </div>
  );
}

export default App;
