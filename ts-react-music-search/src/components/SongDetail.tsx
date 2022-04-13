import { useParams } from "react-router-dom";
import OneTrack from "../types/oneTrack";
import { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function SongDetail() {
  const params = useParams();
  const [track, setTrack] = useState<OneTrack>();

  useEffect(() => {
    const fetchSongDetail = async () => {
      try {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/track/${params.songId}`
        );
        if (response.ok) {
          let data = await response.json();
          setTrack(data);
        } else {
          alert("error in the request");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchSongDetail();
  }, [params.songId]);

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{track?.title}</Card.Title>
              <Card.Text>
                <strong>Album</strong>: {track?.album.title}
              </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={track?.album.cover_big} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SongDetail;
