import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Auto from './Auto';
import data from "../autos.json";

const Home = (props) => {
  
  //const parametroModelo = this.props.match.params.modelo;
  //const autoEncontrado = data.filter(
  //(auto) => auto.modelo === parametroModelo
  // );
  // if (autoEncontrado[0].destacado === "Y") {
  //   this.destacado = (
  //      <Auto></Auto>
  //   );
  // } else {
  //   this.destacado = (
  //   );
  // }
  // const parametroModelo = this.props.match.params.modelo;
  // const autoEncontrado = data.filter((auto) => auto.modelo === parametroModelo);

  // if (autoEncontrado[0].destacado === "Y") {
  
  return (
    <div>
      <h1>A TODO MOTOR AUTOS</h1>
      <p>
        Publicá sin registrarte y en un sólo paso. ¿Apurado por vender? Recibí
        ofertas en Efectivo de concesionarios registrados. ¡Súper!{" "}
      </p>
     
      <Container className="d-flex justify-content-center mt-4">
        <Card style={{ width: "200rem" }}>
         {/* {props.destacado ==='Y'? data.map(auto=>{return(<Auto key={auto.imagen}
                  marca={auto.marca}
                  modelo={auto.modelo}
                  localidad={auto.localidad}
                  imagen={auto.imagen}
                  anio={auto.anio}
                  precio={auto.precio}
                  destacado={auto.destacado}></Auto>)})} */}
        </Card>
      </Container>
    
    </div>
     
  );
};

export default Home;
{/* <div className="resultados">
     {pelis.length === 0 ? 
    <p className="NoRes">no hay pelis</p>
    : pelis.map( peli =>{
        return( 
        <VistaPeli key={peli.imdbID} id={peli.imdbID} nombre={peli.Title} anio={peli.Year} imagen={peli.Poster} />
    )})}
</div> */}