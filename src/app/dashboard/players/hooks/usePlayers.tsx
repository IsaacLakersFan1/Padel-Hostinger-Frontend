import { useState } from "react";
import axios from "axios";
import API_URL from "@/utils/apiConfig";
import { Player } from "../interfaces/player";
import { toastError } from "@/hooks/useToastError";

export const usePlayers = () => {
    const { showToastError } = toastError();
    const [players, setPlayers] = useState<Player[]>([]);
    const [activePlayers, setActivePlayers] = useState<Player[]>([]);
    const token = localStorage.getItem("PadelToken");

    const getAllPlayers = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/players/all-players`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setPlayers(response.data);
        } catch (error) {
            showToastError(error);
        }
    }

    const getActivePlayers = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/players/active-players`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setActivePlayers(response.data);
        } catch (error) {
            showToastError(error);
        }
    }

    const createPlayer = async (player: Player) => {
        try {
            await axios.post(`${API_URL}/api/players/create-player`, player, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getAllPlayers();
        } catch (error) {
            showToastError(error);
        }
    }

    // const updatePlayerStatus = async (playerId: number) => {
    //     const player = players.find(player => player.id === playerId);
    //     if (player && player.status === "active") {
    //         player.status = "inactive";
    //     } else if (player && player.status === "inactive") {
    //         player.status = "active";
    //     }

    //     try {
    //         await axios.put(`${API_URL}/api/players/update-player-status/${playerId}`, { status: player?.status }, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         });
    //         getAllPlayers();
    //     } catch (error) {
    //         showToastError(error);
    //     }
    // }
    
    return {
        players,
        activePlayers,
        getAllPlayers,
        getActivePlayers,
        createPlayer,
    }    
    
}

