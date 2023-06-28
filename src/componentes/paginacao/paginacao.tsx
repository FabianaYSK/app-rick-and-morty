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
        className={`px-5 py-2 text-sm font-medium border-0 rounded-md ${paginaAtual === 1 ? "disabled" : "bg-blue-800"} text-white`} 
          onClick={() => handlePagina(paginaAtual - 1)}
      >
        Anterior
      </button>
      <button
        className="cursor-pointer px-5 py-2 text-sm font-medium border-0 rounded-md bg-blue-800 text-white"
        onClick={() => handlePagina(paginaAtual + 1)}
      >
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;
