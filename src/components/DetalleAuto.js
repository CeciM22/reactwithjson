import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

import Button from "react-bootstrap/Button";
import data from "../autos.json";
import { Link, Navigate, Outlet } from "react-router-dom";
import NuestrosAutos from "./NuestrosAutos";

const DetalleAuto = (props) => {

  const parametroModelo = this.props.match.params.modelo;
  const autoEncontrado = data.filter((auto) => auto.modelo === parametroModelo);

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
              src={require(`../assets/img/${autoEncontrado[0].imagen}`)}
              alt="imagen-producto"
            ></img>
            
            {/* descripcion */}
            <span className="title">Marca: </span>
            <span className="descripcion">{autoEncontrado[0].marca}</span>
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
                <span>{autoEncontrado[0].modelo}</span>
              </Col>
            </Row>
            <Row>
              {/* instrumento */}
              <Col>
                <span className="title">Año: </span>
                <h3 className="instrumento">{autoEncontrado[0].anio}</h3>
              </Col>
            </Row>
            <Row>
              {/*  cantidad vendidos */}
              <Col>
                <span className="title">Localidad: </span>
                <span>{autoEncontrado[0].localidad}</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span className="title">Precio: </span>
                <h2 className="precio">${autoEncontrado[0].precio}</h2>
              </Col>
            </Row>
            <Row>
              {/* marca */}
              <Col>
                <span className="marca">Marca: {autoEncontrado[0].marca}</span>
              </Col>
            </Row>
            <Row>
              {/* modelo */}
              <Col>
                <span className="modelo">
                  Modelo: {autoEncontrado[0].modelo}
                </span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span>Destacado: </span>
                <br></br>
                <span>{autoEncontrado[0].destacado}</span>
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
