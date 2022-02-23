import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, personaje: "Dante", anime: "Devil may Cry"},
  { id: 2, personaje: "Leon kenedy", anime: "Resident Evil" },
  { id: 3, personaje: "Steve", anime: "Minecraft" },
  { id: 4, personaje: "Scorpion", anime: "Mortal Kombat" },
  { id: 5, personaje: "Master shif", anime: "HALO"},
  { id: 6, personaje: "Ornn", anime: "LOL" },
];



class App extends React.Component {
  state = {
    data: data,

  }
    render() {
    
    return (
      
        <Container>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Personaje</th>
                <th>Anime</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.personaje}</td>
                  <td>{dato.anime}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
    )}}
export default App;