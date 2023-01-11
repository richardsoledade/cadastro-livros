import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import livrocapa from "../src/imgs/livrocapa.png";
import { useState } from "react";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

function App() {
  const [bookName, setBookName] = useState("");
  const [autor, setAutor] = useState("");
  const [ano, setAno] = useState("");
  const [livros, setLivros] = useState([]);

  const [count, setCount] = useState(0);

  function aleatoryCode() {
    return Math.random();
  }

  function cadastrar() {
    let validoParaCadastro = true;
    livros.forEach((livro) => {
      if (livro.bookName == bookName) {
        validoParaCadastro = false;
      }
    });
    if (validoParaCadastro) {
      let livro = {
        bookName: bookName,
        autor: autor,
        ano: ano,
        codigo: Math.round(aleatoryCode() * (9999 - 1000) + 1000),
      };

      setLivros([livro, ...livros]);
      setCount(count + 1);
      alert("Livro registrado com sucesso!");
      limparForm();
    } else {
      alert("livro já registrado");
    }
  }

  function limparForm() {
    setBookName("");
    setAutor("");
    setAno("");
  }

  function excluir(bookName) {
    livros.forEach((livro, index) => {
      if (livro.bookName == bookName) {
        livros.splice(index, 1);
        setLivros([...livros]);
        alert("Livro excluido");
      }
    });
  }

  return (
    //HTML//
    <>
      <div className="App">
        <div className="leftRight">
          {/* =============================================================== */}
          <div className="leftSection">
            <img className="bookImg" src={livrocapa} alt="BookIMG " />
          </div>

          {/* =============================================================== */}

          <div className="rightSection">
            <h1>CADASTRAR LIVRO</h1>

            <InputGroup className="mb-2 mt-1" size="lg">
              <Form.Control
                value={bookName}
                onChange={(e) => {
                  setBookName(e.target.value);
                }}
                placeholder="Insira o título da obra"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            <InputGroup className="mb-2 mt-1" size="lg">
              <Form.Control
                value={autor}
                onChange={(e) => {
                  setAutor(e.target.value);
                }}
                placeholder="Nome do autor"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            <InputGroup className="mb-2 mt-1" size="lg">
              <Form.Control
                type="number"
                value={ano}
                onChange={(e) => {
                  setAno(e.target.value);
                }}
                placeholder="Data de Publicação"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>

            <Button onClick={cadastrar} className="mb-3 mt-3" size="lg">
              Cadastrar
            </Button>
            <h4>Total Cadastrados: <span>{livros.length}</span> </h4>
          </div>
        </div>
        {/* =============================================================== */}

        <hr></hr>
        <div className="tabelinha">
        <h2>LIVROS CADASTRADOS</h2>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Autor</th>
              <th>Ano</th>
              <th>codigo</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => {
              return (
                <tr key={livro.codigo}>
                  <td>{livro.bookName}</td>
                  <td>{livro.autor}</td>
                  <td>{livro.ano}</td>
                  <td>#{livro.codigo}</td>

                  <td>
                    <Button
                      id="exbtn"
                      onClick={() => {
                        excluir(livro.bookName);
                      }}
                    >
                      <FaTrash />
                       deletar
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        </div>

        <footer>
        <hr></hr>
          <p> Project made by: Richard Soledade - JCAVI CLASS</p>
        </footer>

      </div>
    </>
  );
}

export default App;
