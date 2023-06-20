import { Routes, Route } from "react-router-dom";
import './App.css';
import PaginaInicio from "./paginas/PaginaInicio";
import PaginaFavoritos from "./paginas/PaginaFavoritos";
import PaginaDetalhe from "./paginas/PaginaDetalhe";
import Cabecalho from "./componentes/layout/cabecalho";

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="favoritos" element={<PaginaFavoritos />} />
        <Route path="detalhe" element={<PaginaDetalhe />} />
      </Routes>
    </div>
  );
}

export default App;