import Card from "react-bootstrap/Card";
import Boton from "./Tags";


export default function MyCard({img, name, descripcion, color, texto}) {
  return (
    <>
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={img} className="imagen" />
        <Card.Body>
          <Card.Title> <strong>{name}</strong> </Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Boton color={color} texto={texto} />
        </Card.Body>
      </Card>
    </>
  );
}
