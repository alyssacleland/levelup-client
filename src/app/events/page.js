'use client';

import { useEffect, useState } from 'react';
import getEvents from '../../utils/sample-data/eventData';
import EventCard from '../../components/event/EventCard';

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then(setEvents);
  }, []);

  return (
    <article className="events">
      {events.map((event) => (
        <section key={`event--${event.id}`} className="event">
          <EventCard game={event.game} description={event.description} date={event.date} time={event.time} organizer={event.organizer} />
        </section>
      ))}
    </article>
  );
}
