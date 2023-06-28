import React from "react";
import { IFiltrosProps } from "../../redux/actions/types";

/**
 * Componente para filtrar os personagens
 * @param { IFiltrosProps } props - As props do componente Filtros
 * @returns { JSX.Element } - Retorna um elemento JSX
 */

const Filtros: React.FC<IFiltrosProps> = ({ termoPesquisa, setTermoPesquisa }) => {

  return (
    <div className="flex flex-col mb-5">
      <label htmlFor="nome" className="mb-2 text-lg font-medium">Filtrar por nome:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nome"
        onChange={(e) => setTermoPesquisa(e.target.value)}
        value={termoPesquisa}
        className="flex-grow px-5 py-4 rounded border border-gray-300"
      />
    </div>
  );
};

export default Filtros;

