'use client';

/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createGame, getGameTypes } from '../utils/sample-data/gameData';

const initialState = {
  skillLevel: 0,
  numberOfPlayers: 0,
  title: '',
  maker: '',
  gameTypeId: 0,
};

const GameForm = ({ user }) => {
  const [gameTypes, setGameTypes] = useState([]);
  /*
  Since the input fields are bound to the values of
  the properties of this state variable, you need to
  provide some default values.
  */
  const [currentGame, setCurrentGame] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    // TODO: Get the game types, then set the state
    getGameTypes().then((data) => {
      setGameTypes(data);
    });
  }, []);

  const handleChange = (e) => {
    // TODO: Complete the onChange function
    const { name, value } = e.target;
    setCurrentGame((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Prevent form from being submitted
    e.preventDefault();

    const game = {
      // i changed gamer below to match my existing model
      // current game is the state variable, so it's gettihng the values from the form input!
      maker: currentGame.maker,
      title: currentGame.title,
      numberOfPlayers: Number(currentGame.numberOfPlayers),
      skillLevel: Number(currentGame.skillLevel),
      gameType: Number(currentGame.gameTypeId),
      userId: user.uid,
    };

    // Send POST request to your API
    createGame(game).then(() => router.push('/games'));
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* TITLE */}
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control name="title" required value={currentGame.title} onChange={handleChange} />
      </Form.Group>
      {/* TODO: create the rest of the input fields */}

      {/* MAKER */}
      <Form.Group className="mb-3">
        <Form.Label>Maker</Form.Label>
        <Form.Control name="maker" required value={currentGame.maker} onChange={handleChange} />
      </Form.Group>

      {/* NUMBER OF PLAYERS  */}
      <Form.Group className="mb-3">
        <Form.Label>Number of Players</Form.Label>
        <Form.Control name="numberOfPlayers" required value={currentGame.numberOfPlayers} onChange={handleChange} type="number" min="0" step="1" />
      </Form.Group>

      {/* SKILL LEVEL */}
      <Form.Group className="mb-3">
        <Form.Label>Skill Level</Form.Label>
        <Form.Control type="number" name="skillLevel" required value={currentGame.skillLevel} onChange={handleChange} />
      </Form.Group>

      {/* GAME TYPE */}
      <Form.Group className="mb-3">
        <Form.Label>Game Type</Form.Label>
        <Form.Select name="gameTypeId" required value={currentGame.gameTypeId} onChange={handleChange}>
          <option value="">Select a game type</option>
          {gameTypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.label}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

GameForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
};

export default GameForm;
