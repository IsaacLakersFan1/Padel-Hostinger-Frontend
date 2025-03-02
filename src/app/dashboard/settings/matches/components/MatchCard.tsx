import { MatchCardProps } from "../interfaces/matchCard";
import { Player } from "./Players";
import { Badge } from "@/components/ui/badge"
import { EditMatch } from "./EditMatch"

export const MatchCard = ({ matches, getMatchById, updateMatch, match, players }: MatchCardProps) => {
  console.log('match', match);
  return (
    <>
      <div>
        {matches.map((match) => (
          <>
            <div className="flex flex-col gap-4 rounded-lg p-4 border border-gray-300 mb-4">
              <section className="flex items-center gap-2 justify-between w-full">
                <div className="flex flex-col items-start gap-2">
                  <Player
                    playerName={match.player1?.name}
                    playerNumber={1}
                    gameModeId={match.gameModeId}
                    matchId={match.id}
                  />
                  <Player
                    playerName={match.player2?.name}
                    playerNumber={2}
                    gameModeId={match.gameModeId}
                    matchId={match.id}
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">VS</h2>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Player
                    playerName={match.player3?.name}
                    playerNumber={3}
                    gameModeId={match.gameModeId}
                    matchId={match.id}
                  />
                  <Player
                    playerName={match.player4?.name}
                    playerNumber={4}
                    gameModeId={match.gameModeId}
                    matchId={match.id}
                  />
                </div>
              </section>
              <section className="flex items-center gap-2 w-full">
                <div className="flex items-center gap-2 justify-center w-full">
                  <Badge variant="default">
                    <p>Winner team {match.winnerTeam}</p>
                  </Badge>
                </div>
                <div className="flex items-center gap-2 justify-center w-full">
                  <EditMatch 
                    id={match.id} 
                    getMatchById={getMatchById} 
                    updateMatch={updateMatch} 
                    match={match} 
                    players={players} 
                  />
                </div>
              </section>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
