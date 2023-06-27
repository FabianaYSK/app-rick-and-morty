import "./grade-personagem.css";
import { IGradePersonagensProps, IPersonagem } from "../../redux/actions/types";
import { useEffect, useState } from "react";
import CardPersonagem from "./card-personagem";

/**
 * Grade de personagens para a página inicial
 * @returns { JSX.Element } - Retorna um elemento JSX
 */

const GradePersonagem: React.FC<IGradePersonagensProps> = ({
  paginaAtual,
  termoPesquisa,
}) => {
  const [favoritos, setFavoritos] = useState<Record<number, boolean>>({});
  const [personagens, setPersonagens] = useState<IPersonagem[]>([]);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/?page=${paginaAtual}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPersonagens(data.results));
  }, [paginaAtual]);

  const handleFavorito = (id: number) => {
    setFavoritos((favoritos) => ({
      ...favoritos,
      [id]: !favoritos[id],
    }));
  };

  const personagensFiltrados = personagens.filter((personagem) =>
    personagem.name.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  return (
    <div className="grade-personagens">
      <div className="card-personagem">
        {personagensFiltrados.map((personagem) => (
          <CardPersonagem
            key={personagem.id}
            personagem={personagem}
            favoritos={favoritos}
            handleFavorito={handleFavorito}
          />
        ))}
      </div>
    </div>
  );
};

export default GradePersonagem;
