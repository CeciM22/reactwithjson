import data from "../autos.json";
import Auto from "./Auto";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const NuestrosAutos = () => {
  return (
    <div>
      <Container className="d-flex justify-content-center mt-4">
        <Row className="d-flex justify-content-center">
          <Col>
            <Card.Body className="NuestrosAutos">
              {data.map((auto) => (
                <Auto
                  key={auto.imagen}
                  marca={auto.marca}
                  modelo={auto.modelo}
                  localidad={auto.localidad}
                  imagen={auto.imagen}
                  anio={auto.anio}
                  precio={auto.precio}
                  destacado={auto.destacado}
                ></Auto>
              ))}
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </div>
    // <div className="row mt-3">
    //   <div className="col-md-4">
    //     <Row>
    //     {data.map((auto) => (
    //       <Auto
    //         key={auto.imagen}
    //         marca={auto.marca}
    //         modelo={auto.modelo}
    //         localidad={auto.localidad}
    //         imagen={auto.imagen}
    //         anio={auto.anio}
    //         precio={auto.precio}
    //         destacado={auto.destacado}
    //       ></Auto>
    //     ))}
    //     </Row>

    //   </div>
    // </div>
  );
};

export default NuestrosAutos;
