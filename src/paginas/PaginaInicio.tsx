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
    <div className="max-w-7xl w-full mx-auto px-8 text-black">
      <div className="flex justify-between items-center my-6">
        <h3 className="text-lg font-medium">Catálogo de Personagens</h3>
        <button className="cursor-pointer px-5 py-2 text-sm font-medium border-0 rounded-md bg-red-800 text-white" onClick={() => setTermoPesquisa("")}>Limpar filtros</button>
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
