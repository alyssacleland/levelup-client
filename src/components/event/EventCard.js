'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/utils/context/authContext';
import { joinEvent, leaveEvent } from '../../utils/sample-data/eventData';

export default function EventCard({ id, game, description, date, time, organizer, deleteThisEvent, joined, setEvents }) {
  const router = useRouter();
  const { user } = useAuth();
  const handleJoin = () => joinEvent(id, user.uid, setEvents);
  const handleLeave = () => leaveEvent(id, user.uid, setEvents);

  return (
    <div>
      <Card className="text-center">
        <Card.Header>
          {date} {time}
        </Card.Header>
        <Card.Body>
          <Card.Title>By: {organizer.uid}</Card.Title>
          <Card.Text>{game.title}</Card.Text>

          {/* edit btn */}
          <Button
            onClick={() => {
              router.push(`/events/edit/${id}`);
            }}
            variant="primary"
          >
            Edit
          </Button>

          {/* delete btn */}
          <Button onClick={() => deleteThisEvent(id)} variant="danger">
            Delete
          </Button>

          {/* join/leave btn */}
          {joined ? (
            <Button onClick={handleLeave} variant="warning">
              Leave
            </Button>
          ) : (
            <Button onClick={handleJoin} variant="success">
              Join
            </Button>
          )}
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
  deleteThisEvent: PropTypes.func.isRequired,
  joined: PropTypes.bool.isRequired,
  setEvents: PropTypes.func.isRequired,
};
