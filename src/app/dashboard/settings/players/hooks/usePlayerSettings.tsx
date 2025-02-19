import { useState } from "react";
import { Player } from "../interfaces/playerSettings";
import API_URL from "@/utils/apiConfig";
import axios from "axios";
import { toastError } from "@/hooks/useToastError";
import { toastSuccess } from "@/hooks/useToastSuccess";
import { useNavigate } from "react-router-dom";


export const usePlayerSettings = () => {    
    const { showToastError } = toastError();
    const { showToastSuccess } = toastSuccess();
    const [players, setPlayers] = useState<Player[]>([]);
    const token = localStorage.getItem("PadelToken");
    const navigate = useNavigate();

    const getAllPlayers = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/players/all-players`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setPlayers(response.data);
            // showToastSuccess("Players fetched successfully");
        } catch (error) {
            console.error(error);
            showToastError("Error fetching players");
        }
    }

    const createPlayer = async (name: string) => {
        try {
             await axios.post(`${API_URL}/api/players/player`, {name}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            showToastSuccess("Player created successfully");
            navigate("/dashboard/players");
        } catch (error) {
            console.error(error);
            showToastError("Error creating player");
        }
    }
    

    return {
        players,
        getAllPlayers,
        createPlayer
    }
}
