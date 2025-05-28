import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent.jsx";

const iniData = {
  cod: '',
  nom: '',
  cat: '',
  img: '',
};

function SerieFormPage() {
  const series = [
    {cod:1, nom: "Friends", cat: "Comedia", img: "friends.png"},
    {cod:2, nom: "Law & Order", cat: "Drama", img: "law&order.jpg"},
    {cod:3, nom: "The big bang theory", cat: "Comedia", img: "bigbang.jpg"},
    {cod:4, nom: "Stranger things", cat: "Terror", img: "strangerthings.png"},
    {cod:5, nom: "Dr. House", cat: "Drama", img: "house.avif"},
    {cod:6, nom: "The X-Files", cat: "Terror", img: "xfiles.jpg"},
  ];

  const { idserie } = useParams();
  const [data, setData] = useState(iniData);
  const [originalData, setOriginalData] = useState(iniData);

  // Carga datos al montar si existe idserie
  useEffect(() => {
    if (idserie) {
      const found = series.find(s => s.cod === Number(idserie));
      if (found) {
        setData(found);
        setOriginalData(found);
      }
    }
  }, [idserie]);

  const onChangeNombre = (e) => {
    setData({...data, nom: e.target.value});
  };

  const onChangeCategoria = (e) => {
    setData({...data, cat: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Compara solo las propiedades modificadas
    let cambios = {};
    for (const key in data) {
      if (data[key] !== originalData[key]) {
        cambios[key] = data[key];
      }
    }

    if (Object.keys(cambios).length === 0) {
      console.log("No hubo cambios.");
    } else {
      console.log("Cambios detectados:", cambios);
    }
  };

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <div className="border-bottom pb-3 mb-3">
          <h3>{data.cod ? "Editar Serie" : "Nueva Serie"}</h3>
        </div>
        <form onSubmit={handleSubmit} className="row">
          <div className="col-md-4">
            <img
              className="card-img-top"
              src={data.img ? `/imagen/${data.img}` : "https://dummyimage.com/400x250/000/fff"}
              alt={data.nom || "Imagen serie"}
            />
          </div>
          <div className="col-md-8">
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">Nombre</label>
              <input
                type="text"
                onChange={onChangeNombre}
                value={data.nom}
                className="form-control"
                id="inputName"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputCategory" className="form-label">Categoría</label>
              <select
                onChange={onChangeCategoria}
                value={data.cat}
                className="form-select"
                id="inputCategory"
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="Terror">Terror</option>
                <option value="Comedia">Comedia</option>
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="inputImage" className="form-label">Imagen</label>
              <input type="file" className="form-control" id="inputImage" />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">Guardar</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SerieFormPage;
