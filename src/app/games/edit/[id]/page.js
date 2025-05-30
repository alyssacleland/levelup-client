'use client';

import GameForm from '@/components/GameForm';
import { useAuth } from '@/utils/context/authContext';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getGameById } from '@/utils/sample-data/gameData';

export default function EditGamePage({ params }) {
  const { user } = useAuth();

  const [editGame, setEditGame] = useState();
  const { id } = params;

  useEffect(() => {
    getGameById(id).then((game) => {
      setEditGame({
        id: game.id,
        ...game,
        title: game.title,
        maker: game.maker,
        numberOfPlayers: game.number_of_players,
        skillLevel: game.skill_level,
        gameTypeId: game.game_type.id,
      });
    });
  }, [id]);

  // ...game spread operator. It means: "copy all key-value pairs from game into this new object." TODO: later cna prob remove everything else besides that. just make sure buttons still display and work correctly

  return (
    <div>
      <h2>EDIT THAT GAMMMMMEEEE</h2>
      <GameForm user={user} gameObj={editGame} />
    </div>
  );
}

EditGamePage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
