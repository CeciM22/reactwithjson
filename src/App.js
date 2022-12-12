import './App.css';
import { BrowserRouter, Route, Routes,Redirect,Navigate} from "react-router-dom";
import Menu  from "./components/Menu";
import Home  from './components/Home';
import NuestrosAutos from './components/NuestrosAutos';
import Contacto from './components/Contacto';
import DetalleAuto  from './components/DetalleAuto';
import Buscador from './components/Buscador';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu />}>
        < Route index element={<Home />} />
        <Route path="/nuestrosAutos" element={<NuestrosAutos />}>
          <Route to="/detalleAuto/:modelo" element={<DetalleAuto />}/>
        </Route>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/buscador" element={<Buscador />} />
        
        <Route path="*" element={<Navigate replace to='/' />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App