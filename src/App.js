import './styles/css/bootstrap.min.css';
import Login from './page/login/login';
import Home from './page/home/home';
import Regishotel from './page/registerhotel/regishotel';
import Regispartner from './page/regispartner/regispartner';
import Support from './page/support/support';
import Searchresult  from './page/searchresult/searchresult';
import Visit from './page/visit/visit';
import Hotel from './page/hotel/hotel'
import { useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-hotel" element = {<Regishotel />} />
          <Route path="/register-partner" element = {<Regispartner />} />
          <Route path="/support" element = {<Support />} />
          <Route path="/searchresult" element = {<Searchresult  />} />
          <Route path="/visit" element = {<Visit  />} />
          <Route path="/hotel" element = {<Hotel />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
