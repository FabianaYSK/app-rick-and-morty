import React from 'react';
// import PropTypes from 'prop-types';
import { IBotaoFavorito } from "../../redux/actions/types";
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import "./favorito.css";

/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 * @param { IBotaoFavorito } props - As props do componente BotaoFavorito
 * @returns { JSX.Element } - Retorna um elemento JSX
 */

const BotaoFavorito: React.FC<IBotaoFavorito> = ({ isFavorito, onClick }) => {

  return (
    <div className="botao-favorito" onClick={onClick}>
      {isFavorito ? <AiFillStar size={25}/> : <AiOutlineStar size={25}/>}
    </div>
  );
};

/*
No Typescript, o componente BotaoFavorito já possui uma interface que especifica a tipagem das props.
Assim, inserir o PropTypes será redundante nesse caso. 
*/

/* BotaoFavorito.propTypes = {
  isFavorito: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
*/

export default BotaoFavorito;
