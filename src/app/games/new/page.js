'use client';

import GameForm from '../../../components/GameForm';
import { useAuth } from '../../../utils/context/authContext';

export default function NewGamePage() {
  const { user } = useAuth();
  return (
    <div>
      <h2>Register New Game</h2>
      <GameForm user={user} />
    </div>
  );
}
