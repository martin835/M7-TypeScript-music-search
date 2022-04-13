import { Button, Card } from "react-bootstrap";
import Song from "../types/song";

interface SongProps {
  song: Song;
}

function OneSong({ song }: SongProps) {
  return (
    <Card className="mt-3">
      <Card.Img variant="top" src={song.album.cover_medium} />
      <Card.Body>
        <Card.Title>{song.title}</Card.Title>
        <Card.Text>{song.artist.name}</Card.Text>
        <Button variant="primary">See more</Button>
      </Card.Body>
    </Card>
  );
}

export default OneSong;
