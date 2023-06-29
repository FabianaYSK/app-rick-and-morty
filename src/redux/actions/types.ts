/**
 * Interface para o botão de bavorito
 * @typedef { Object } IBotaoFavorito - Interface
 * @property { boolean } isFavorito - Indica se um elemento é favorito ou não 
 * @property { function } onClick - Função chamada quando clicar no botão
 */
export interface IBotaoFavorito {
  isFavorito: boolean;
  onClick: () => void;
}

/**
 * Interface para um personagem
 * @typedef { Object } IPersonagem - Interface
 * @property { number } id - Indica o id do personagem 
 * @property { string } name - Indica o nome do personagem 
 * @property { string } image - Indica a url da imagem do personagem 
*/
export interface IPersonagem {
  id: number;
  name: string;
  image: string;
}

/**
 * Interface para as propriedades de um personagem
 * @typedef { Object } IPersonagemProps - Interface
 * @property { IPersonagem } personagem - Indica o personagem 
 * @property { Record<number, boolean> } favoritos - Indica os personagens favoritos 
 * @property { function } handleFavoritoClick - Função chamada quando clicar no botão
*/
export interface IPersonagemProps {
  personagem: IPersonagem;
  favoritos: Record<number, boolean>;
  handleFavorito: (id: number) => void;
}

/**
 * Interface para as propriedades da grade de personagens
 * @typedef { Object } IGradePersonagensProps - Interface
 * @property { number } paginaAtual - Indica a página atual
 * @property { string } termoPesquisa - Indica o termo de pesquisa atual  
*/
export interface IGradePersonagensProps {
  paginaAtual: number;
  termoPesquisa: string;
}

/**
 * Interface para as propriedades dos filtros
 * @typedef { Object } IFiltrosProps - Interface
 * @property { string } termoPesquisa - Indica o termo de pesquisa atual 
 * @property { function } setTermoPesquisa - Função chamada para atualizar o termo de pesquisa
 */
export interface IFiltrosProps {
  termoPesquisa: string;
  setTermoPesquisa: (value: string) => void;
}

/**
 * Interface para as propriedades da paginação
 * @typedef { Object } IPaginacaoProps - Interface
 * @property { number } paginaAtual - Indica a página atual 
 * @property { function } handlePagina - Função chamada para atualizar a página
 */
export interface IPaginacaoProps {
  paginaAtual: number;
  handlePagina: (novaPagina: number) => void;
}

/**
 * Interface para a ação SET_PERSONAGEM_FAVORITO com o seu respectivo tipo e payload
 */
export interface ISetPersonagemFavoritoAction {
  type: 'SET_PERSONAGEM_FAVORITO';
  payload: any[];
}

/**
 * Interface para a ação ADD_PERSONAGEM_FAVORITO com o seu respectivo tipo e payload
 */
export interface IAddPersonagemFavoritoAction {
  type: 'ADD_PERSONAGEM_FAVORITO';
  payload: any;
}

/**
 * Interface para a ação REMOVE_PERSONAGEM_FAVORITO com o seu respectivo tipo e payload
 */
export interface IRemovePersonagemFavoritoAction {
  type: 'REMOVE_PERSONAGEM_FAVORITO';
  payload: number;
}

/**
 * Tipo que reune todas as interfaces de ações relacionadas aos personagens favoritos
 */
export type IActionFavoritos = ISetPersonagemFavoritoAction | IAddPersonagemFavoritoAction | IRemovePersonagemFavoritoAction;

/**
 * Interface para o estado inicial do favoritosReducer
 * @property { Record<number, boolean> } favoritos - Indica as personagens favoritos (id, valor para favorito ou não) 
 * @property { array } personagensFavoritos - Indica um array de personagens favoritos
 */
export interface IInitialState {
  favoritos: Record<number, boolean>;
  personagensFavoritos: any[];
}