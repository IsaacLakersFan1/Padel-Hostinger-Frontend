import { AddTeammateProps } from "../../../interfaces/addTeammate";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Player } from "@/app/dashboard/players/interfaces/player";

export const AddTeammate = (props: AddTeammateProps) => {
  const {
    matchId,
    slot,
    addTeammate,
    getPossibleTeammates,
    possibleTeammates,
    addRandomPlayer,
    randomPlayer,
  } = props;
  const [selectedPlayer, setSelectedPlayer] = useState<Player>();
  const [open, setOpen] = useState(false);

  const handleAddRandomPlayer = () => {
    addRandomPlayer(possibleTeammates);
    setSelectedPlayer(randomPlayer);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="success" 
          className="w-24 h-8"
          onClick={() => {
            getPossibleTeammates(matchId);
          }}
        >
          <h1 className="text-xs">Add Teammate</h1>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Teammate</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-4">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 items-center mt-4">
              <Label htmlFor="gameMode">Select a sepecific Player</Label>
              <Select
                onValueChange={(value) => {
                  const player = possibleTeammates.find(
                    (p) => p.id === parseInt(value)
                  );
                  setSelectedPlayer(player);
                }}
                value={selectedPlayer?.id.toString()}
              >
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Players" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {possibleTeammates.map((player) => (
                      <SelectItem key={player.id} value={player.id.toString()}>
                        {player.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
        <Button variant="info" className="mb-4" onClick={() => {
          handleAddRandomPlayer();
        }}>
          Add Random Player
        </Button>
        <div className="flex flex-col gap-2 text-center">
          <p>Teammate to add:</p>
          {selectedPlayer && (
            <div className="flex items-center gap-2 justify-center mt-4">
              <p className="text-2xl font-bold">{selectedPlayer?.name}</p>
              <img
          src={`../../../../../../../public/${selectedPlayer.imageUrl}.jpeg`}
          alt={selectedPlayer.name}
          className="w-16 h-16 rounded-full"
          onError={(e) => {
            e.currentTarget.onerror = null; // Prevent infinite loop
            e.currentTarget.src = "https://github.com/shadcn.png"; // Fallback image
          }}
        />
            </div>
          )}
        </div>

        <DialogFooter className="flex justify-between mt-6">
          <DialogClose asChild>
            <Button
              type="submit"
              onClick={() => {
                if (selectedPlayer) {
                  addTeammate(matchId, selectedPlayer.id, slot);
                }
              }}
              className="mb-4"
            >
              Confirm Add Teammate
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="outline" className="mb-4">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
