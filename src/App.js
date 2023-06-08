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
function App() {
  return (
  <>
  <Header />
  <Home />
  <Eco></Eco>
  <Road></Road>
<TeamPage></TeamPage>
<VerticalMode/>
<Partner/>
<FaqPage></FaqPage>
  <Footer />
  </>
  );
}

export default App;
