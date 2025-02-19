// import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useMatches } from "../hooks/useMatches";
import { useState } from "react";

export default function CreateMatchesForm({ onClose }: { onClose: () => void }) {
  const { createMatchesMode1, createMatchesMode2 } = useMatches();
  const [gameModeSelected, setGameModeSelected] = useState<string>("");

  const handleSelectChange = (value: string) => {
    setGameModeSelected(value);
  };

  const createMatches = async () => {
    if (gameModeSelected === "1") {
      await createMatchesMode1();
    } else if (gameModeSelected === "2") {
      await createMatchesMode2();
    }
    onClose();  // Close form after creating matches
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Matches</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="gameMode">Select Game Mode</Label>
              <Select onValueChange={handleSelectChange} value={gameModeSelected}>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Game Modes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1">1 Match per Player</SelectItem>
                    <SelectItem value="2">Winners keep playing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={createMatches} disabled={!gameModeSelected}>
          Create Matches
        </Button>
      </CardFooter>
    </Card>
  );
}
