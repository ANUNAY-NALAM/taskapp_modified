import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import { Landing,} from './pages'
import Register from './pages/Register'; 

function App() {
  <nav>
  <Link to='/'>Dashboard</Link>
  <Link to='/register'>Register</Link>
  <Link to='/landing'>Home</Link>
</nav>
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Dashboard</div>} />
        <Route path="/register" element={<Register/>} />
      <Route path="/landing" element={<Landing />} />
      <Route path="*" element={<div>Error</div>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
