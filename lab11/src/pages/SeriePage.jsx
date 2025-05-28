import HeaderComponent from "../components/HeaderComponent";
import SerieDelete from "../components/SerieDelete";
import { useState } from "react";

function SeriePage() {
  const [series, setSeries] = useState([
    { cod: 1, nom: "Friends", cat: "Comedy", img: "friends.png" },
    { cod: 2, nom: "Law & Order", cat: "Drama", img: "law-and-order.png" },
    { cod: 3, nom: "The Big Bang Theory", cat: "Comedy", img: "the-big-bang.png" },
    { cod: 4, nom: "Stranger Things", cat: "Horror", img: "stranger-things.png" },
    { cod: 5, nom: "Dr. House", cat: "Drama", img: "dr-house.png" },
    { cod: 6, nom: "The X-Files", cat: "Drama", img: "the-x-files.png" },
  ]);

<<<<<<< HEAD
function SeriePage(){
    const series = [
      {cod:1, nom: "Friends", cat: "Comedia", img: "friends.png"},
      {cod:2 , nom: "Law & Order", cat: "Drama", img: "law&order.jpg"},
      {cod:3 , nom: "The big bang theory", cat: "Comedia", img: "bigbang.jpg"},
      {cod:4 , nom: "Stranger things", cat: "Terror", img: "strangerthings.png"},
      {cod:5 , nom: "Dr. House", cat: "Drama", img: "house.avif"},
      {cod:6 , nom: "The X-Files", cat: "Terror", img: "xfiles.jpg"},
      ];
=======
  const serieDelete = (cod) => {
    if (window.confirm("¿Quieres eliminar esta categoría?")) {
      setSeries(series.filter((co) => co.cod !== cod));
    }
  };
>>>>>>> 34414ea7291c8da8c3899157dbd43bc8e6946f40

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
          <h3>Series</h3>
          <div>
            <a className="btn btn-primary" href="#">Nuevo</a>
          </div>
        </div>
        <div className="row">
          {series.map((serie) => (
            <div key={serie.cod} className="col-md-3 mb-3">
              <SerieDelete
                codigo={serie.cod}
                nombre={serie.nom}
                categoria={serie.cat}
                imagen={serie.img}
                eliminar={() => serieDelete(serie.cod)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SeriePage;
