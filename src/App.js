
import './App.css';
import { MainAppBar } from './components/AppBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Footer } from './components/Footer';

import { HomePage } from './components/pages/Home';
import { About } from './components/pages/About';
import { Listen } from './components/pages/Listen';
import { Read } from './components/pages/Read';

import { Work } from './components/pages/Work';
import { Invest } from './components/pages/Invest';
import { NewMembers } from './components/pages/NewMembers';
import { Governance } from './components/pages/Governance';

function App() {
  return (
    <div className='mainColors'>
      <Router>
        <MainAppBar />
        <div className='backgroundImage' />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/read" element={<Read />} />
          <Route path="/work" element={<Work />} />
          <Route path="/listen" element={<Listen />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/newmembers" element={<NewMembers />} />
          <Route path="/governance" element={<Governance />} />
        </Routes>

        <Footer />  
      </Router>
    </div>
  );
}

export default App;
