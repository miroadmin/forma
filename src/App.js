import React from 'react';
import { BrowserRouter, Route, Routes,Link} from 'react-router-dom';
import Controlled from './components/controlled.js';
import Uncontrolled from './components/uncontrolled.js';
import User from './components/user.js';
import Combin from './components/combinacie.js';
import MariaDB from './components/mariadb.js';
import './index.css';
import './firebase';

function App() {
  return (
    <>
      <BrowserRouter>
            <Vyber/>
      </BrowserRouter>
    </>

  );
}

const Vyber = () => {
  return (
      <div>
          <Headera/>
          <Routes>
              <Route path="/uncontrolled" exact element={<Uncontrolled />} />
              <Route path="/controlled" exact element={<Controlled />} />
              <Route path="/user" exact element={<User />} />
              <Route path="/combinacie" exact element={<Combin />} />
              <Route path="/mariadb" exact element={<MariaDB />} />
              <Route path="/" exact element={<Controlled />} />
          </Routes>
          <BodyZvysok/>
      </div>
  )
};

const BodyZvysok = () => {
    return (
      <>
        <div className='body1'>
          Footer
        </div>
      </>

    )
}

const Headera = () => {
    return (
      <>
              <header>
          <div className='head0'>
          <div className='head1'>
            <Link to="/uncontrolled" className='head2'> Uncontrolled </Link> 
            <Link to="/controlled" className='head2'> Controlled </Link>
            <Link to="/user" className='head2'> Vlastne </Link>
            <Link to="/combinacie" className='head2'> Kombinacie </Link>
            <Link to="/mariadb" className='head2'> MariaDB </Link>
          </div> 
          </div> 
        </header>
      </>

    );
};

export default App;
