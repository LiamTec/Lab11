import HeaderComponent from "../components/HeaderComponent"
import SerieComponent from "../components/SerieComponent"


function SeriePage(){
    const series = [
      {cod:1, nom: "Friends", cat: "Comedia", img: "friends.png"},
      {cod:2 , nom: "Law & Order", cat: "Drama", img: "law&order.jpg"},
      {cod:3 , nom: "The big bang theory", cat: "Comedia", img: "bigbang.jpg"},
      {cod:4 , nom: "Stranger things", cat: "Terror", img: "strangerthings.png"},
      {cod:5 , nom: "Dr. House", cat: "Drama", img: "house.avif"},
      {cod:6 , nom: "The X-Files", cat: "Terror", img: "xfiles.jpg"},
      ];


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
                    {series.map((serie)=>(
                    <div key={serie.cod} className="col-md-3 mb-3">
                        <SerieComponent
                        	codigo={serie.cod}
                        	nombre={serie.nom}
                        	categoria={serie.cat}
                        	imagen={serie.img}
                        />
                    </div>
                    ))}
                </div>
            </div>
        </>
      )
}


export default SeriePage
