import { useNavigate } from "react-router-dom";

function CategoriesComponent({ codigo, nombre, onEliminar }) {
  const navigate = useNavigate();

  const gotoUrl = () => {
    navigate("/categories/edit/" + codigo);
  };

  return (
    <div className="card">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title mb-0">{nombre}</h5>
          <p className="card-text mb-0">ID: {codigo}</p>
        </div>
        <div>
          <button onClick={gotoUrl} className="btn btn-secondary me-2">
            Editar
          </button>
          <button onClick={onEliminar} className="btn btn-danger">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoriesComponent;
