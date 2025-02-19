import { TopBar } from "../topBar/TopBar";
import { usePlayers } from "./hooks/usePlayers";
import { useEffect } from "react";
import { PlayerCard } from "./components/PlayerCard";

export default function PlayersPage() {
  const {
    players,
    activePlayers,
    getAllPlayers,
    getActivePlayers,
  } = usePlayers();

  useEffect(() => {
    getAllPlayers();
    getActivePlayers();
  }, []);

  return (
    <div className="min-h-screen">
      <TopBar>Players</TopBar>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
          <h2 className="text-2xl font-bold">Active players: {activePlayers.length}</h2>
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onStatusChange={() => {
                getAllPlayers();
                getActivePlayers();
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
