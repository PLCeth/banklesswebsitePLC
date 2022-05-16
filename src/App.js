
import './App.css';
import { MainAppBar } from './components/AppBar';
import { HomePage } from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Footer } from './components/Footer';
import { About } from './components/pages/About';

function App() {
  return (
    <div className='mainColors'>
      <Router>
        <MainAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />  
      </Router>
    </div>
  );
}

export default App;
