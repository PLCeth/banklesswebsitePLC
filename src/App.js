
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
import { Media } from './components/pages/subpages/Media';
import { Portal } from './components/pages/subpages/Portal';
import { Guilds } from './components/pages/subpages/Guilds';
import { Projects } from './components/pages/subpages/Projects';
import { CommunityCalls } from './components/pages/subpages/CommunityCalls';
import { Coordination } from './components/pages/subpages/Coordination';


function App() {

  return (
    <div className='mainColors'>
      <Router>
        <MainAppBar />
        <div className='backgroundImage' />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/read" element={<Read />} />
          <Route path="/listen" element={<Listen />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/newmembers" element={<NewMembers />} />
          <Route path="/governance" element={<Governance />} />

          { /* Going Down this line */ }
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />

          <Route path="/media" element={<Media />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/guilds" element={<Guilds />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/community" element={<CommunityCalls />} />
          <Route path="/coordination" element={<Coordination />} />

        </Routes>

        <Footer />  
      </Router>
    </div>
  );
}

export default App;
