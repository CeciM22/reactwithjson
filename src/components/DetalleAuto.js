import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

import Button from "react-bootstrap/Button";
import data from "../autos.json";
import { Link, Navigate, Outlet ,useParams} from "react-router-dom";
import NuestrosAutos from "./NuestrosAutos";
import Auto from "./Auto";

const DetalleAuto = () => {

  const{parametroModelo} = useParams();
  const auto = data.find((auto)=> auto.modelo === parametroModelo);
  const {marca,modelo,localidad,imagen,anio,precio,destacado} = auto;

  // const parametroModelo = this.props.match.params.modelo;
  // const autoEncontrado = data.filter((auto) => auto.modelo === parametroModelo);
  
  // if (autoEncontrado[0].destacado === "Y") {
  //   this.destacado = <span className="envioGratis">Si</span>;
  // } else {
  //   this.destacado = <span className="costoEnvio">No</span>;
  // }

  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col>
          
            <img
              className="d-block mx-auto sizeImg"
              src={require(`../assets/img/${imagen}`)}
              alt="imagen-auto"
            ></img>
            
            {/* descripcion */}
            <span className="title">Marca: </span>
            <span>{marca}</span>
          </Col>
          <Col lg="1">
            {/* linea divisoria */}
            <div className="verticalLine d-none d-lg-block"></div>
          </Col>
          <Col lg="4">
            <Row>
              {/*  cantidad vendidos */}
              <Col>
                <span className="title">Modelo: </span>
                <span>{modelo}</span>
              </Col>
            </Row>
            <Row>
              {/* instrumento */}
              <Col>
                <span className="title">Año: </span>
                <h3>{anio}</h3>
              </Col>
            </Row>
            <Row>
              {/*  cantidad vendidos */}
              <Col>
                <span className="title">Localidad: </span>
                <span>{localidad}</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span className="title">Precio: </span>
                <h2 className="precio">${precio}</h2>
              </Col>
            </Row>
            <Row>
              {/* marca */}
              <Col>
                <span className="marca">Marca: {marca}</span>
              </Col>
            </Row>
            <Row>
              {/* modelo */}
              <Col>
                <span className="modelo">
                  Modelo: {modelo}
                </span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span>Destacado: </span>
                <br></br>
                <span>{destacado}</span>
              </Col>
            </Row>
            <Outlet></Outlet>
            <Row className="mt-5 pt-5">
              <Col>
                <Link to={NuestrosAutos}>
                  Volver
                </Link>
              </Col>
            </Row>
          </Col>
          <Col lg="1">
            {/* linea divisoria */}
            <div className="verticalLine d-none d-md-block"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetalleAuto;
