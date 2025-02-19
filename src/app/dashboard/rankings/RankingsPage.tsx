import { TopBar } from "../topBar/TopBar";
import { useEffect } from "react";
import { PlayerCard } from "./components/PlayerCard";
import { useRankings } from "./hooks/useRankings";

export function RankingsPage() {
    const { players, getRankings } = useRankings();

    useEffect(() => {
        getRankings();
    }, []);

    const sortedPlayers = [...players].sort((a, b) => {
        const winPercentageA = a.wins / (a.totalMatches || 1); 
        const winPercentageB = b.wins / (b.totalMatches || 1);
        return winPercentageB - winPercentageA; 
    });

    return (
        <div className="min-h-screen">
            <TopBar>Players</TopBar>
            <div className="container mx-auto p-4">
                <div className="flex flex-col gap-4 justify-center items-center">
                    {sortedPlayers.map((playerStats, index) => (
                        <PlayerCard 
                            key={playerStats.player.id} 
                            playerStats={playerStats} 
                            rank={index + 1} 
                            isTopThree={index < 3} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
