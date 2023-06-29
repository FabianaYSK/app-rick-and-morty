import React from "react";
import { IPaginacaoProps } from "../../redux/actions/types";

/**
 * Componente que contém os botões para paginar
 * @param { IPaginacaoProps } props - As props do componente Paginação
 * @returns { JSX.Element } - Retorna um elemento JSX
 */

const Paginacao: React.FC<IPaginacaoProps> = ({ paginaAtual, handlePagina }) => {

  return (
    <div className="flex flex-row justify-between my-4">
      <button
        disabled={paginaAtual === 1}
        className={`px-5 py-2 text-sm font-medium border-0 rounded-md ${paginaAtual === 1 ? "disabled" : "bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"} text-white shadow-sm`} 
        onClick={() => handlePagina(paginaAtual - 1)}
      >
        Anterior
      </button>
      <button
        className="px-5 py-2 text-sm font-semibold border-0 rounded-md bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => handlePagina(paginaAtual + 1)}
      >
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;
