import { useState } from "react";
import CategoriesComponent from "../components/CategoriesComponent";
import HeaderComponent from "../components/HeaderComponent"

function CategoryPage() {
  const [categories, setCategories] = useState([
    { codigo: 1, nombre: "Horror" },
    { codigo: 2, nombre: "Comedy" },
    { codigo: 3, nombre: "Action" },
    { codigo: 4, nombre: "Drama" },
  ]);

  const handleDelete = (codigo) => {
    if (window.confirm("¿Quieres eliminar esta categoría?")) {
      setCategories(categories.filter(cat => cat.codigo !== codigo));
    }
  };

  return (
    <div className="container mt-3">
      <div className="border-bottom pb-3 mb-3">
        <h3>Categorías</h3>
      </div>
      <ul className="list-group">
        {categories.map((cat) => (
          <li key={cat.codigo} className="list-group-item">
            <CategoriesComponent
              codigo={cat.codigo}
              nombre={cat.nombre}
              onEliminar={() => handleDelete(cat.codigo)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryPage;
