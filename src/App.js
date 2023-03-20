import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Accueil from "./view/Accueil";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={""}>
              <Route index element={<Accueil />} />
              <Route path="/accueil" element={<Accueil />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
