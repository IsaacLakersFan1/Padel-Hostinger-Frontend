import {
  Trophy,
  Users,
  Medal,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

export function SelectPage() {
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src="https://martimx.vtexassets.com/arquivos/ids/1070169-800-800?v=638103614651900000&width=800&height=800&aspect=true" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Pages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => navigate("/dashboard/players")}>
            <Users/>
            <span>Players</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/dashboard/matches")}>
            <Trophy />
            <span>Matches</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/dashboard/rankings")}>
            <Medal />
            <span>Rankings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
