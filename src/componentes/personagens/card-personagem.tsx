import React from "react";
import BotaoFavorito from "../botoes/favorito";
import { IPersonagemProps } from "../../redux/actions/types";
import "./card-personagem.css";

/**
 * Card para cada personagem dentro da grade de personagem.
 * @param { IPersonagemProps } props - As props do componente CardPersonagem
 * @returns { JSX.Element } - Retorna um elemento JSX
 */

const CardPersonagem: React.FC<IPersonagemProps> = ({
  personagem,
  favoritos,
  handleFavorito,
}) => {
  return (
    <div key={personagem.id} className="card-personagem">
      <img src={personagem.image} alt={personagem.name} />
      <div className="card-personagem-body">
        <span>{personagem.name}</span>
        <BotaoFavorito
          isFavorito={favoritos[personagem.id]}
          onClick={() => handleFavorito(personagem.id)}
        />
      </div>
    </div>
  );
};

export default CardPersonagem;
