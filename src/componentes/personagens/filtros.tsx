import React from "react";
import { IFiltrosProps } from "../../redux/actions/types";
import "./filtros.css";

/**
 * Componente para filtrar os personagens
 * @param { IFiltrosProps } props - As props do componente Filtros
 * @returns { JSX.Element } - Retorna um elemento JSX
 */

const Filtros: React.FC<IFiltrosProps> = ({ termoPesquisa, setTermoPesquisa }) => {
  
  return (
    <div className="filtros">
      <label htmlFor="nome">Filtrar por nome:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nome"
        onChange={(e) => setTermoPesquisa(e.target.value)}
        value={termoPesquisa}
      />
    </div>
  );
};

export default Filtros;

