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
      <label htmlFor="nome" className="mb-2 text-lg font-medium text-indigo-900">
        Filtrar por nome:
      </label>
      <div className="flex flex-row">
        <input
          type="text"
          placeholder="Rick, Morty, Beth, Alien, ...etc"
          name="nome"
          onChange={(e) => setTermoPesquisa(e.target.value)}
          value={termoPesquisa}
          className="flex-grow px-5 py-3 rounded border border-indigo-100 mr-4"
        />
        <button
          className={`cursor-pointer px-5 py-2 text-sm font-medium border-0 rounded-md ${termoPesquisa === "" ? "disabled" : "bg-rose-800 hover:bg-rose-700"
            } text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700`}
          onClick={() => setTermoPesquisa("")}
          disabled={termoPesquisa === ""}
        >
          Apagar filtro
        </button>
      </div>
    </div>

  );
};

export default Filtros;

