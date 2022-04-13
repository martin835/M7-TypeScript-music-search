import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Button, Form, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import OneSong from "./components/OneSong";
import Song from "./types/song";

function App() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [query, setQuery] = useState("");

  const fetchSongs = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      );
      if (response.ok) {
        let data = await response.json();

        setSongs(data.data);
      } else {
        alert("error in the request");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Jumbotron>
        <h1>Search music!</h1>
      </Jumbotron>
      <Container>
        <Row className="justify-content-center">
          <Col sm={6}>
            <Form onSubmit={(e) => fetchSongs(e)}>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Search music"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col sm={4}>
            {songs.map((song) => (
              <OneSong song={song} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
