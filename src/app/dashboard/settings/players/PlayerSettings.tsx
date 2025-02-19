import { TopBar } from "../../topBar/TopBar";
import { usePlayerSettings } from "./hooks/usePlayerSettings";
import { useEffect, useState } from "react";
import PlayerSettingsCard from "./components/PlayerSettingsCard";
import { Button } from "@/components/ui/button";
import CreatePlayerForm from "./components/CreatePlayerForm";

export default function PlayerSettings() {
  const { players, getAllPlayers } = usePlayerSettings();
  const [isCreatingPlayer, setIsCreatingPlayer] = useState(false);

  useEffect(() => {
    getAllPlayers();
  }, []);

  return (
    <>
      <TopBar>Player Settings</TopBar>
      {!isCreatingPlayer && (
        <section>
          <div className="flex justify-center mb-4">
            <Button onClick={() => setIsCreatingPlayer(true)}>
              Create Player
            </Button>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            {players?.map((player) => (
              <PlayerSettingsCard key={player.id} player={player} />
            ))}
          </div>
        </section>
      )}
      {isCreatingPlayer && 
        <section className="flex justify-center items-center">
            <CreatePlayerForm />
        </section>
      }
    </>
  );
}
