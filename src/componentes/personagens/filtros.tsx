import "./filtros.css";

const Filtros: React.FC = () => {
  return (
    <div className="filtros">
      <label htmlFor="nome">Filtrar por nome:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nome"
      />
    </div>
  );
};

export default Filtros;
