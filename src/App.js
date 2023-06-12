import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './Pages/Home';
import Eco from './Pages/Eco';
import Road from './Pages/Road';
import VerticalMode from "./components/slider";
import FaqPage from './Pages/FaqPage';
import TeamPage from './TeamPage';
import Partner from './Pages/Partner';
import Privacy from './Pages/Privacy';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <>
  <Header />
  <Router>
  <Switch>
    <Route exact path="/privacy-policy">
    <Privacy />
    </Route>
    <Route exact path="/">
  <Home />
  <Eco></Eco>
  <Road></Road>
<TeamPage></TeamPage>
<VerticalMode/>
<Partner/>
<FaqPage></FaqPage>
    </Route>
  </Switch>
  </Router>
  <Footer />
  {/* <Header />
  <Home />
  <Eco></Eco>
  <Road></Road>
<TeamPage></TeamPage>
<VerticalMode/>
<Partner/>
<FaqPage></FaqPage>
  <Footer />
<Privacy>
</Privacy> */}
  </>
  );
}

export default App;
