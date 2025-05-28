'use client';

import EventForm from '../../../components/EventForm';
import { useAuth } from '../../../utils/context/authContext';

export default function NewEventPage() {
  const { user } = useAuth();
  return (
    <div>
      <h2>Register New Event</h2>
      <EventForm user={user} />
    </div>
  );
}
