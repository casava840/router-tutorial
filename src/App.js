import Home from './Home';
import { Link, Route, Routes } from 'react-router-dom'
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profiles/*' element={<Profiles />} />
        <Route path='/history' element={<HistorySample />} />
        <Route path='*' element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;