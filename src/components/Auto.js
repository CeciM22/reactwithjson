import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Auto = (props) => {

  
  // if (!this.precio === 0) {
  //    (
  //     <Card.Text className="gratis">
  //       ${this.precio}
  //     </Card.Text>
  //   );
  // } else {
  //    (
  //     <Card.Text className="costoEnvio">
  //       Consultar!
  //     </Card.Text>
  //   );
  // }

  return (
    <div>
      <Container className="d-flex justify-content-center mt-4">
        <Card style={{ width: "150px" }}>
          <Col>
            <Row className="d-flex justify-content-center">
              <a href={`detalleAuto/${props.modelo}`}>
                <Card.Img
                  className="maxImg"
                  src={require(`../assets/img/${props.imagen}`)}
                />
              </a>
            </Row>
            <Row className="d-flex justify-content-center">
              <Card.Body>
                <Card.Title>{props.marca}</Card.Title>
                <Card.Subtitle>
                  {props.modelo} - {props.anio}
                </Card.Subtitle>
                <Card.Text>${ props.precio}</Card.Text>
              </Card.Body>
            </Row>
          </Col>
        </Card>
      </Container>
    </div>
  );
};

export default Auto;
