import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Pricing from './Pages/Pricing/Pricing';
import Training from './Pages/Training/Training';
import ScrolltoTop from './Component/ScrolltoTop.js/ScrollToTop';
function App() {
  return (
    <>
    <Router>
    <ScrolltoTop>
    <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/pricing' exact element={<Pricing/>}/>
        <Route path='/training' exact element={<Training/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
      </Routes>
    </ScrolltoTop>
    </Router>
    </>
  );
}

export default App;
