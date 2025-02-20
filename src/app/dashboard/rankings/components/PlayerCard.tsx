import { Info, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PlayerStats } from "../interfaces/rankings";

interface PlayerCardProps {
  playerStats: PlayerStats;
  rank: number;
  isTopThree: boolean;
}

export const PlayerCard = ({
  playerStats,
  rank,
  isTopThree,
}: PlayerCardProps) => {
  const navigate = useNavigate();

  const winPercentage = (
    (playerStats.wins / (playerStats.totalMatches || 1)) *
    100
  ).toFixed(1);

  return (
    <div className="flex items-center justify-between border border-gray-300 rounded-md p-4 m-2 w-80 h-28">
      <section className="flex justify-center items-center gap-2">
        <span className="text-xl font-bold">#{rank}</span>
        {isTopThree && <Trophy className="text-yellow-500 w-6 h-6" />}
      </section>

      <div className="flex flex-col text-sm justify-center">
        <div className="flex items-center gap-2 justify-center">
        <img
          src={`../../../../../../../public/${playerStats.player.imageUrl}.jpeg`}
          alt={playerStats.player.name}
          className="w-16 h-16 rounded-full"
          onError={(e) => {
            e.currentTarget.onerror = null; // Prevent infinite loop
            e.currentTarget.src = "https://github.com/shadcn.png"; // Fallback image
          }}
        />
        <h1 className="text-lg font-bold">{playerStats.player.name}</h1>
        </div>
        <div className="flex gap-2 mt-2">
          <span className="text-green-600 font-bold">
            W: {playerStats.wins}
          </span>
          <span className="text-red-600 font-bold">
            L: {playerStats.losses}
          </span>
          <span className="text-blue-600 font-bold">{winPercentage}%</span>
        </div>
      </div>

      <Info
          onClick={() =>
            navigate(`/dashboard/players/${playerStats.player.id}`)
          }
          size={40}
        />
    </div>
  );
};
