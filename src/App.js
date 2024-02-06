import Home from './Home';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom'
import About from './About';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/about' Component={About} />
    </Routes>
  );
}

export default App;
