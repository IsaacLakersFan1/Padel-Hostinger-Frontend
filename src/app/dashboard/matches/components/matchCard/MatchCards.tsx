import { Player } from "./components/Player";
import { WinnerButton } from "./components/WinnerButton";
import { MatchCardProps } from "../../interfaces/matchCard";

export default function MatchCards(props: MatchCardProps) {
  const { match, onStatusChange, addTeammate, getPossibleTeammates, possibleTeammates, addRandomPlayer, randomPlayer } = props;

  return (
    <>
      <div className="flex flex-col gap-4 rounded-lg p-4 border border-gray-300">
        <section className="flex items-center gap-2 justify-between w-full">
          <div className="flex flex-col items-start gap-2">
            <Player
              playerName={match.player1?.name}
              playerNumber={1}
              gameModeId={match.gameModeId}
              matchId={match.id}
              addTeammate={addTeammate}
              getPossibleTeammates={getPossibleTeammates}
              possibleTeammates={possibleTeammates}
              addRandomPlayer={addRandomPlayer} 
              randomPlayer={randomPlayer}
            />
            <Player
              playerName={match.player2?.name}
              playerNumber={2}
              gameModeId={match.gameModeId}
              matchId={match.id}
              addTeammate={addTeammate}
              getPossibleTeammates={getPossibleTeammates}
              possibleTeammates={possibleTeammates}
              addRandomPlayer={addRandomPlayer}
              randomPlayer={randomPlayer}
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
              addTeammate={addTeammate}
              getPossibleTeammates={getPossibleTeammates}
              possibleTeammates={possibleTeammates}
              addRandomPlayer={addRandomPlayer}
              randomPlayer={randomPlayer}
            />
            <Player
              playerName={match.player4?.name}
              playerNumber={4}
              gameModeId={match.gameModeId}
              matchId={match.id}
              addTeammate={addTeammate}
              getPossibleTeammates={getPossibleTeammates}
              possibleTeammates={possibleTeammates}
              addRandomPlayer={addRandomPlayer}
              randomPlayer={randomPlayer}
            />
          </div>
        </section>
        <section className="flex items-center gap-2 w-full">
          <div className="flex items-center gap-2 justify-between w-full">
            <WinnerButton
              winnerTeam={match.winnerTeam}
              matchId={match.id}
              onStatusChange={onStatusChange}
              playerName1={match.player1?.name}
              playerName2={match.player2?.name}
              whoWin={1}
            />
            <WinnerButton
              winnerTeam={match.winnerTeam}
              matchId={match.id}
              onStatusChange={onStatusChange}
              playerName1={match.player3?.name}
              playerName2={match.player4?.name}
              whoWin={2}
            />
          </div>
        </section>
      </div>
    </>
  );
}
