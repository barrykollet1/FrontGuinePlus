//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navigation from "./pages/Navigation";
import Caroussel from "./pages/Caroussel";
import Accueil from "./pages/Accueil";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation/>}>
              <Route index element={<Accueil />} />

              <Route path="/accueil" element={<Caroussel />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
