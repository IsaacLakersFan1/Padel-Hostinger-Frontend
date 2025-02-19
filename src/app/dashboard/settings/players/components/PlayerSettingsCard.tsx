import { Player } from "../interfaces/playerSettings";
import { Button } from "@/components/ui/button";
export default function PlayerSettingsCard({ player }: { player: Player }) {
  return (
    <>
        <div className="flex items-center justify-evenly gap-4 border border-gray-300 rounded-md p-4 m-2 w-72">
            <img src={`../../../../../../../public/${player.imageUrl}.jpeg`} alt="" className="w-16 h-16 rounded-full "/>
            <div>
                <h1 className="text-md font-bold ">{player.name}</h1>
            </div>
            <Button className="">Edit</Button>
        </div>
    </>
  )
}
