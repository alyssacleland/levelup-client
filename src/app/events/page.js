'use client';

import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { deleteEvent, getEvents } from '../../utils/sample-data/eventData';
import EventCard from '../../components/event/EventCard';

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const router = useRouter();

  const deleteThisEvent = (id) => {
    deleteEvent(id).then(() => {
      getEvents().then(setEvents);
    });
  };

  useEffect(() => {
    getEvents().then(setEvents);
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
            <EventCard id={event.id} game={event.game} description={event.description} date={event.date} time={event.time} organizer={event.organizer} deleteThisEvent={deleteThisEvent} />
          </section>
        ))}
      </article>
    </>
  );
}
