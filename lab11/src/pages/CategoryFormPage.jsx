import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent.jsx";

const initialData = {
  cod: "",
  nom: "",
};

function CategoryFormPage() {
  const { idcategory } = useParams();
  const navigate = useNavigate();

  // Simulamos datos para cargar en edición
  const categories = [
    { cod: 1, nom: "Horror" },
    { cod: 2, nom: "Comedy" },
    { cod: 3, nom: "Action" },
    { cod: 4, nom: "Drama" },
  ];

  const [data, setData] = useState(initialData);

  useEffect(() => {
    if (idcategory) {
      const cat = categories.find((c) => c.cod === Number(idcategory));
      if (cat) {
        setData(cat);
      }
    }
  }, [idcategory]);

  const onChangeNombre = (e) => {
    setData({ ...data, nom: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Guardando categoría:", data);
    // Aquí puedes hacer POST/PUT a la API
    alert("Categoría guardada");
    navigate("/categories");
  };

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <div className="border-bottom pb-3 mb-3">
          <h3>{idcategory ? "Editar Categoría" : "Nueva Categoría"}</h3>
        </div>
        <form onSubmit={handleSubmit} className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="inputNombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                id="inputNombre"
                className="form-control"
                value={data.nom}
                onChange={onChangeNombre}
                required
              />
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-end">
            <button className="btn btn-primary">{idcategory ? "Actualizar" : "Guardar"}</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CategoryFormPage;
