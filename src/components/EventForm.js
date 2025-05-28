'use client';

/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { getGames } from '../utils/sample-data/gameData';
import { createEvent } from '../utils/sample-data/eventData';

const initialState = {
  gameId: 0,
  description: '',
  date: '',
  time: '',
};

const EventForm = ({ user }) => {
  const [games, setGames] = useState([]);
  /*
  Since the input fields are bound to the values of
  the properties of this state variable, you need to
  provide some default values.
  */
  const [currentEvent, setCurrentEvent] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    // TODO: Get the game types, then set the state
    getGames().then((data) => {
      setGames(data);
      console.warn('games', data);
    });
  }, []);

  const handleChange = (e) => {
    // TODO: Complete the onChange function
    const { name, value } = e.target;
    setCurrentEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Prevent form from being submitted
    e.preventDefault();

    const event = {
      // i changed gamer below to match my existing model
      // current game is the state variable, so it's gettihng the values from the form input!
      game: currentEvent.game,
      description: currentEvent.description,
      date: currentEvent.date,
      time: currentEvent.time,
      organizer: user.uid,
    };

    // Send POST request to your API
    createEvent(event).then(() => router.push('/events'));
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* DESCRITION */}
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control name="description" required value={currentEvent.description} onChange={handleChange} />
      </Form.Group>
      {/* TODO: create the rest of the input fields */}

      {/* DATE */}
      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control name="date" type="date" required value={currentEvent.date} onChange={handleChange} />
      </Form.Group>

      {/* TIME  */}
      <Form.Group className="mb-3">
        <Form.Label>Time</Form.Label>
        <Form.Control type="time" name="time" required value={currentEvent.time} onChange={handleChange} />
      </Form.Group>

      {/* GAME */}
      <Form.Group className="mb-3">
        <Form.Label>Game</Form.Label>
        <Form.Select name="game" required value={currentEvent.game} onChange={handleChange}>
          <option value="">Select a game type</option>
          {games.map((game) => (
            <option key={game.id} value={game.id}>
              {game.title}
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

EventForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventForm;
