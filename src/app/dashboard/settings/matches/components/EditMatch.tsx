import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EditMatchProps } from "../interfaces/editMatch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { Match } from "@/app/dashboard/matches/interfaces/Matches";

export const EditMatch = (props: EditMatchProps) => {
  const { getMatchById, updateMatch, match, players } = props;
  const [temporalMatch, setTemporalMatch] = useState<Match>(match);

  useEffect(() => {
    setTemporalMatch(match);
  }, [match]);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Match</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Match</DialogTitle>
            <DialogDescription>
              Make changes to your match here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Player 1
              </Label>
              <div className="col-span-3">
                <Select value={temporalMatch.player1Id?.toString()} onValueChange={(value) => setTemporalMatch({ ...temporalMatch, player1Id: parseInt(value) })}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={match?.player1?.name} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {players.map((player) => (
                        <SelectItem
                          key={player.id}
                          value={player.id.toString()}
                        >
                          {player.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Player 2
              </Label>
              <div className="col-span-3">
                <Select value={temporalMatch.player2Id?.toString()} onValueChange={(value) => setTemporalMatch({ ...temporalMatch, player2Id: parseInt(value) })}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={match?.player2?.name} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {players.map((player) => (
                        <SelectItem
                          key={player.id}
                          value={player.id.toString()}
                        >
                          {player.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Player 3
              </Label>
              <div className="col-span-3">
                <Select value={temporalMatch.player3Id?.toString()} onValueChange={(value) => setTemporalMatch({ ...temporalMatch, player3Id: parseInt(value) })}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={match?.player3?.name} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {players.map((player) => (
                        <SelectItem
                          key={player.id}
                          value={player.id.toString()}
                        >
                          {player.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Player 4
              </Label>
              <div className="col-span-3">
                <Select value={temporalMatch.player4Id?.toString()} onValueChange={(value) => setTemporalMatch({ ...temporalMatch, player4Id: parseInt(value) })}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={match?.player4?.name} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {players.map((player) => (
                        <SelectItem
                          key={player.id}
                          value={player.id.toString()}
                        >
                          {player.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Winner Team
              </Label>
              <div className="col-span-3">
                <Select value={temporalMatch.winnerTeam?.toString()} onValueChange={(value) => setTemporalMatch({ ...temporalMatch, winnerTeam: parseInt(value) })}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={match?.winnerTeam === 1 ? "Team 1" : "Team 2"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="1">Team 1</SelectItem>
                      <SelectItem value="2">Team 2</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Run
              </Label>
              <div className="col-span-3">
                <Input
                  id="run"
                  defaultValue={match?.run}
                  className="col-span-3"
                  onChange={(e) => setTemporalMatch({ ...temporalMatch, run: parseInt(e.target.value) })}
                />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Season
              </Label>
              <div className="col-span-3">
                <Input
                  id="season"
                  defaultValue={match?.season}
                  className="col-span-3"
                  onChange={(e) => setTemporalMatch({ ...temporalMatch, season: parseInt(e.target.value) })}
                />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Game Mode
              </Label>
              <div className="col-span-3">
                <Select value={temporalMatch.gameModeId?.toString()} onValueChange={(value) => setTemporalMatch({ ...temporalMatch, gameModeId: parseInt(value) })}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={match?.gameModeId === 1 ? "Mode 1" : "Mode 2"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="1">Mode 1</SelectItem>
                      <SelectItem value="2">Mode 2</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" onClick={() => updateMatch(temporalMatch)}>Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
