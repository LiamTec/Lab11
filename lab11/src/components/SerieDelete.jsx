import { useNavigate } from "react-router-dom";

function SerieDelete({ codigo, nombre, categoria, imagen, eliminar }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/series/edit/${codigo}`);
  };

  return (
    <div className="card h-100">
      <img 
                className="card-img-top" 
                src={"https://dummyimage.com/400x250/000/fff&text="+ imagen} 
                alt="img" />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">
          <strong>Categoría:</strong> {categoria}
        </p>
        <div className="d-flex justify-content-between">
          <button onClick={handleEdit} className="btn btn-secondary">Editar</button>
          <button onClick={eliminar} className="btn btn-danger">Eliminar</button>
        </div>
      </div>
    </div>
  );
}

export default SerieDelete;
