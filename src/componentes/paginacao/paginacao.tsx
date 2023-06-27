import React from "react";
import { IPaginacaoProps } from "../../redux/actions/types";
import "./paginacao.css";

/**
 * Componente que contém os botões para paginar
 * @param { IPaginacaoProps } props - As props do componente Paginação
 * @returns { JSX.Element } - Retorna um elemento JSX
 */

const Paginacao: React.FC<IPaginacaoProps> = ({ paginaAtual, handlePagina }) => {
  
  return (
    <div className="paginacao">
      <button
        disabled={paginaAtual === 1}
        className={"primary"}
        onClick={() => handlePagina(paginaAtual - 1)}
      >
        Anterior
      </button>
      <button
        className={"primary"}
        onClick={() => handlePagina(paginaAtual + 1)}
      >
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;
