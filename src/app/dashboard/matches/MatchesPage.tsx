import { TopBar } from "../topBar/TopBar";
import { useMatches } from "./hooks/useMatches";
import { useEffect, useState } from "react";
import MatchCards from "./components/matchCard/MatchCards";
import CreateMatchesForm from "./components/CreateMatchesForm";
import { Button } from "@/components/ui/button";

export default function MatchesPage() {
  const {
    matches,
    getMatches,
    updateMatchTeamWinner,
    addTeammate,
    getPossibleTeammates,
    possibleTeammates,
    addRandomPlayer,
    randomPlayer,
  } = useMatches();
  const [showCreateMatchesForm, setShowCreateMatchesForm] = useState(false);
  const [updateTrigger, setUpdateTrigger] = useState(0);

  useEffect(() => {
    getMatches();
  }, [updateTrigger]);

  const handleMatchUpdate = async (matchId: number, winnerTeam: number) => {
    await updateMatchTeamWinner(matchId, winnerTeam);
    setUpdateTrigger((prev) => prev + 1);
  };

  const handleClose = async () => {
    setShowCreateMatchesForm(false);
    setUpdateTrigger((prev) => prev + 1);
  };


  return (
    <>
      <TopBar>Matches</TopBar>
      {showCreateMatchesForm && (
        <div className="flex justify-center items-center">
          <CreateMatchesForm onClose={handleClose} />
        </div>
      )}
      {!showCreateMatchesForm && (
        <div className="flex flex-col gap-4 items-center">
          <Button onClick={() => setShowCreateMatchesForm(true)}>
            Create Matches
          </Button>
          <div className="container mx-auto p-4">
            <div className="flex flex-col gap-4">
              {matches.map((match) => (
                <MatchCards
                  key={match.id}
                  match={match}
                  onStatusChange={handleMatchUpdate}
                  addTeammate={addTeammate}
                  getPossibleTeammates={getPossibleTeammates}
                  possibleTeammates={possibleTeammates}
                  addRandomPlayer={addRandomPlayer}
                  randomPlayer={randomPlayer}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
