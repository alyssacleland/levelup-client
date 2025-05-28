'use client';

import { useEffect, useState } from 'react';
import GameCard from '@/components/game/GameCard';
import { getGames } from '@/utils/sample-data/gameData';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

export default function GamesPage() {
  const [games, setGames] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getGames().then(setGames);
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          router.push('/games/new');
        }}
      >
        Register New Game
      </Button>

      <article className="games">
        <h1>Games</h1>
        {games.map((game) => (
          <section key={`game--${game.id}`} className="game">
            <GameCard title={game.title} maker={game.maker} numberOfPlayers={game.number_of_players} skillLevel={game.skill_level} />
          </section>
        ))}
      </article>
    </>
  );
}
