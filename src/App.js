import Home from './Home';
import logo from './logo.svg';
import { Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Route path='/' Component={Home} />
      <Route path='/about' Component={About} />
    </div>
  );
}

export default App;
