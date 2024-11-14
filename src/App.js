// import React from 'react';
// import Login from './components/Login';
// import Cadastro from './components/Cadastro';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path= "Login" element={<Login/>}/>
//         <Route path= "Cadastro" element={<Cadastro/>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastro';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul style={{ display: 'flex', gap: '10px', listStyle: 'none' }}>
            <li>
              <NavLink to="/login" activeClassName="active" style={{ textDecoration: 'none' }}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/cadastro" activeClassName="active" style={{ textDecoration: 'none' }}>
                Cadastro
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import Cadastro from './components/Cadastro';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/cadastro" element={<Cadastro />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;