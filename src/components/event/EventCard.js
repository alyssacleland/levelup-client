'use client';

import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function EventCard({ game, description, date, time, organizer }) {
  return (
    <div>
      <Card className="text-center">
        <Card.Header>
          {date} {time}
        </Card.Header>
        <Card.Body>
          <Card.Title>By: {organizer.uid}</Card.Title>
          <Card.Text>{game.title}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{description}</Card.Footer>
      </Card>
    </div>
  );
}

EventCard.propTypes = {
  game: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  organizer: PropTypes.string.isRequired,
};
