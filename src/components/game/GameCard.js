import PropTypes from 'prop-types';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

function GameCard({
  id,
  title, //
  maker,
  numberOfPlayers,
  skillLevel,
  deleteThisGame,
}) {
  const router = useRouter();
  return (
    <Card className="text-center">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Title>By: {maker}</Card.Title>
        <Card.Text>{numberOfPlayers} players needed</Card.Text>
        <Button
          onClick={() => {
            router.push(`/games/edit/${id}`);
          }}
          variant="primary"
        >
          Edit
        </Button>
        <Button onClick={() => deleteThisGame(id)} variant="danger">
          Delete
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">Skill Level: {skillLevel}</Card.Footer>
    </Card>
  );
}

GameCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  maker: PropTypes.string.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  skillLevel: PropTypes.number.isRequired,
  deleteThisGame: PropTypes.func.isRequired,
};

export default GameCard;
