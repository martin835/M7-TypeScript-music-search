import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Song from "../types/song";

interface SongProps {
  song: Song;
}

function OneSong({ song }: SongProps) {
  const navigate = useNavigate();

  return (
    <Card className="mt-3">
      <Card.Img variant="top" src={song.album.cover_medium} />
      <Card.Body>
        <Card.Title>{song.title}</Card.Title>
        <Card.Text>{song.artist.name}</Card.Text>
        <Button variant="primary" onClick={() => navigate(`/${song.id}`)}>
          See more
        </Button>
      </Card.Body>
    </Card>
  );
}

export default OneSong;
