
import './App.css';
import { MainAppBar } from './components/AppBar';
import { HomePage } from './components/pages/Home';

function App() {
  return (
    <div className='mainColors'>
      <MainAppBar />
      <div style={{height: '200vh'}}>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
