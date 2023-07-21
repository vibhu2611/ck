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
import GoToTop from './components/GoToTop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
  <>
  <Header />
  <Router>
  <Routes>
    <Route exact path="/privacy-policy" element={<Privacy />}>
    </Route>
    <Route exact path="/" element={
      <>
        <Home />
  <Eco></Eco>
  <Road></Road>
<TeamPage></TeamPage>
<VerticalMode/>
<Partner/>
<FaqPage></FaqPage>
      </>
    }>
    </Route>
  </Routes>
  </Router>
  <GoToTop />
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
