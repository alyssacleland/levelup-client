'use client';

import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/utils/context/authContext';
import { deleteEvent, getEvents } from '../../utils/sample-data/eventData';
import EventCard from '../../components/event/EventCard';

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  const deleteThisEvent = (id) => {
    deleteEvent(id).then(() => {
      getEvents().then(setEvents);
    });
  };

  useEffect(() => {
    getEvents(user.uid).then((data) => {
      console.log('Fetched events:', data);
      setEvents(data);
    });
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          router.push('/events/new');
        }}
      >
        Register New Event
      </Button>

      <article className="events">
        {events.map((event) => (
          <section key={`event--${event.id}`} className="event">
            <EventCard id={event.id} game={event.game} description={event.description} date={event.date} time={event.time} organizer={event.organizer} deleteThisEvent={deleteThisEvent} joined={event.joined} setEvents={setEvents} />
          </section>
        ))}
      </article>
    </>
  );
}
