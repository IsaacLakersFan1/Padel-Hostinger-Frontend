import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { usePlayerSettings } from "../hooks/usePlayerSettings";

export default function CreatePlayerForm() {
  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();
  const { createPlayer } = usePlayerSettings();
  return (
    <>
<Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Player</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name of the player</Label>
              <Input id="name" placeholder="Name of the player" onChange={(e) => setPlayerName(e.target.value)}/>
            </div>

          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => navigate("/dashboard/players")}>Cancel</Button>
        <Button onClick={() => createPlayer(playerName)}>Create Player</Button>
      </CardFooter>
    </Card>
    </>
  );
}
