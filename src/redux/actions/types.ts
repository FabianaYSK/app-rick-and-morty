export interface Personagem {
  id: number;
  name: string;
  status: string;
}

export interface PersonagemState {
  personagem: Personagem[];
}

type ActionFetchPersonagens = {
  type: "FETCH_PERSONAGEM";
  payload: {
    personagem: Personagem[];
  };
};

export type Action = ActionFetchPersonagens;
