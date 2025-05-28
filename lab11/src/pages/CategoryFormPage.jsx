import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent.jsx";

const initialData = {
  cod: "",
  nom: "",
};

function CategoryFormPage() {
  const { idcategory } = useParams();

  const categories = [
    { cod: 1, nom: "Horror" },
    { cod: 2, nom: "Comedy" },
    { cod: 3, nom: "Action" },
    { cod: 4, nom: "Drama" },
  ];

  const [data, setData] = useState(initialData);
  const [originalData, setOriginalData] = useState(initialData);

  useEffect(() => {
    if (idcategory) {
      const cat = categories.find((c) => c.cod === Number(idcategory));
      if (cat) {
        setData(cat);
        setOriginalData(cat);
      }
    }
  }, [idcategory]);

  const onChangeNombre = (e) => {
    setData({ ...data, nom: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Comparamos solo campos modificados
    const cambios = {};
    if (data.nom !== originalData.nom) {
      cambios.nom = data.nom;
    }

    if (Object.keys(cambios).length === 0) {
      console.log("No hubo cambios en la categoría.");
    } else {
      console.log("Cambios en categoría:", cambios);
    }
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
            <button className="btn btn-primary">
              {idcategory ? "Actualizar" : "Guardar"}
            </button>
          </div>

        </form>
      </div>
    </>
  );
}

export default CategoryFormPage;
