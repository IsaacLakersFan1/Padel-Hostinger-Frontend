import { Button } from "@/components/ui/button";
import { PlayerCard as PlayerCardType } from "../interfaces/playerCard";
import { usePlayerCard } from "../hooks/usePlayerCard";
import { Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PlayerCard = ({ player, onStatusChange }: PlayerCardType & { onStatusChange: () => void }) => {
  const { isChangingStatus, handleChangeStatus } = usePlayerCard(player, onStatusChange);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center border border-gray-300 rounded-md p-4 m-2 w-72 ">
      <section className="flex items-center justify-center gap-4">
      <img
          src={`../../../../../../../public/${player.imageUrl}.jpeg`}
          alt={player.name}
          className="w-16 h-16 rounded-full"
          onError={(e) => {
            e.currentTarget.onerror = null; // Prevent infinite loop
            e.currentTarget.src = "https://github.com/shadcn.png"; // Fallback image
          }}
        />
        {!isChangingStatus && (
          <Button onClick={() => handleChangeStatus()} variant={player.status === "active" ? "success" : "destructive"} className="w-20 h-12">
            {player.status === "active" && !isChangingStatus
              ? "Active"
              : "Inactive"}
          </Button>
        )}
        {isChangingStatus && <Button>Changing</Button>}
            <Info onClick={() => navigate(`/dashboard/players/${player.id}`)} size={40}/>
      </section>
      <div>
        <h1 className="text-md font-bold">{player.name}</h1>
      </div>
    </div>
  );
};
