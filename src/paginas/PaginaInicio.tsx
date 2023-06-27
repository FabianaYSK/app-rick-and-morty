import Filtros from "../componentes/personagens/filtros";
import GradePersonagens from "../componentes/personagens/grade-personagens";
import Paginacao from "../componentes/paginacao/paginacao";
import { useState } from "react";

/**
 * Esta é a página principal. Aqui você deve ver o painel de filtro junto com a grade de personagens.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns Página inicio
 */

const PaginaInicio: React.FC = () => {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [termoPesquisa, setTermoPesquisa] = useState("");

  const handlePagina = (novaPagina: number) => {
    setPaginaAtual(novaPagina);
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personagens</h3>
        <button className="danger" onClick={() => setTermoPesquisa("")}>Limpar filtros</button>
      </div>
      <Filtros termoPesquisa={termoPesquisa} setTermoPesquisa={setTermoPesquisa} />
      <Paginacao paginaAtual={paginaAtual} handlePagina={handlePagina} />
      <GradePersonagens paginaAtual={paginaAtual}
        termoPesquisa={termoPesquisa} />
      <Paginacao paginaAtual={paginaAtual} handlePagina={handlePagina} />    
    </div>
  );
};

export default PaginaInicio;
