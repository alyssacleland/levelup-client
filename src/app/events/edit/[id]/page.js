'use client';

import PropTypes from 'prop-types';
import { useAuth } from '@/utils/context/authContext';
import React, { useState, useEffect } from 'react';
import EventForm from '../../../../components/EventForm';
import { getEventById } from '../../../../utils/sample-data/eventData';

export default function EditEventPage({ params }) {
  const { user } = useAuth();
  const [editEvent, setEditEvent] = useState();
  const { id } = params;

  useEffect(() => {
    getEventById(id).then((event) => {
      console.log('Fetched event:', event);
      setEditEvent({
        ...event,
        game: event.game.id,
      });
    });
  }, [id]);

  return (
    <div>
      <h2>Edit Event</h2>
      <EventForm user={user} eventObj={editEvent} />
    </div>
  );
}

EditEventPage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
