'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

export default function EventCard({ id, game, description, date, time, organizer }) {
  const router = useRouter();
  return (
    <div>
      <Card className="text-center">
        <Card.Header>
          {date} {time}
        </Card.Header>
        <Card.Body>
          <Card.Title>By: {organizer.uid}</Card.Title>
          <Card.Text>{game.title}</Card.Text>
          <Button
            onClick={() => {
              router.push(`/events/edit/${id}`);
            }}
            variant="primary"
          >
            Edit
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">{description}</Card.Footer>
      </Card>
    </div>
  );
}

EventCard.propTypes = {
  id: PropTypes.number.isRequired,
  game: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  organizer: PropTypes.string.isRequired,
};
