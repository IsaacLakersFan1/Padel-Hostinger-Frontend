import { Match } from "../interfaces/Matches";
import { useState } from "react";
import axios from "axios";
import API_URL from "../../../../utils/apiConfig";
import { toastError } from "@/hooks/useToastError";
import { Player } from "@/app/dashboard/players/interfaces/player";

export const useMatches = () => {
  const token = localStorage.getItem("PadelToken");
  const { showToastError } = toastError();
  const [matches, setMatches] = useState<Match[]>([]);
  const [possibleTeammates, setPossibleTeammates] = useState<Player[]>([]);
  const [randomPlayer, setRandomPlayer] = useState<Player>();

  const getMatches = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/matches/last-run-matches`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMatches(response.data.matches);
    } catch (error) {
      showToastError(error);
    }
  };

  const updateMatchTeamWinner = async (matchId: number, winnerTeam: number) => {
    try {
      await axios.post(
        `${API_URL}/api/matches/update-match-team-winner`,
        {
          matchId,
          winnerTeam,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await getMatches();
    } catch (error) {
      showToastError(error);
    }
  };

  const addTeammate = async (
    matchId: number,
    playerId: number,
    slot: number
  ) => {
    try {
      await axios.post(
        `${API_URL}/api/matches/add-teammate`,
        {
          matchId,
          playerId,
          slot,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await getMatches();
      await getPossibleTeammates(matchId);
    } catch (error) {
      showToastError(error);
    }
  };

  const getPossibleTeammates = async (matchId: number) => {
    try {
      const response = await axios.get(`${API_URL}/api/players/possible-teammates/${matchId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPossibleTeammates(response.data);
    } catch (error) {
      showToastError(error);
    }
  };

  const addRandomPlayer = (players: Player[]) => {
    if (players.length === 0) return; // Avoid errors if array is empty

    const randomIndex = Math.floor(Math.random() * players.length);
    setRandomPlayer(players[randomIndex]);
};

  const createMatchesMode1 = async () => {
    try {
      await axios.post(
        `${API_URL}/api/matches/create-matches-mode-1`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getMatches();
    } catch (error) {
      showToastError(error);
    }
  };

  const createMatchesMode2 = async () => {
    try {
      await axios.post(
        `${API_URL}/api/matches/create-matches-mode-2`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getMatches();
    } catch (error) {
      showToastError(error);
    }
  };

  return {
    matches,
    getMatches,
    updateMatchTeamWinner,
    addTeammate,
    createMatchesMode1,
    createMatchesMode2,
    possibleTeammates,
    getPossibleTeammates,
    addRandomPlayer,
    randomPlayer,
  };
};
