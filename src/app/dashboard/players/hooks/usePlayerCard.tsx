import { useState } from "react";
import API_URL from "@/utils/apiConfig";
import axios from "axios";
import { toastError } from "@/hooks/useToastError";
// import { toastSuccess } from "@/hooks/useToastSuccess";
import { Player } from "../interfaces/player";

export const usePlayerCard = (player: Player, onStatusChange: () => void) => {

    const [isChangingStatus, setIsChangingStatus] = useState(false);
    const { showToastError } = toastError();
    // const { showToastSuccess } = toastSuccess();

    const token = localStorage.getItem("PadelToken");

    const handleChangeStatus = async () => {
        // setIsChangingStatus(true);
        const playerInfo = player
        if (playerInfo && playerInfo.status === "active") {
            playerInfo.status = "inactive";
        } else if (playerInfo && playerInfo.status === "inactive") {
            playerInfo.status = "active";
        }

        try {
            await axios.put(`${API_URL}/api/players/player/${playerInfo.id}`, { status: playerInfo?.status }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            onStatusChange();
            // showToastSuccess("Status changed successfully");
            setIsChangingStatus(false);
        } catch (error) {
            showToastError(error);
            setIsChangingStatus(false);
        }
    }

    return {
        isChangingStatus,
        handleChangeStatus
    }


}