import axios from "axios";
import { UseLoginForm } from "../interfaces/useLoginForm"
import { toastError } from "@/hooks/useToastError";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import API_URL from "@/utils/apiConfig";

export function useLoginForm(): UseLoginForm {

    const { showToastError } = toastError();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>, username: string, password: string) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/api/auth/login`, {
                username,
                password
            });
            addTokenToLocalStorage(response.data.token);
            navigate("/dashboard/players");
        } catch (error) {
            showToastError(error);
        }
    }

    const addTokenToLocalStorage = (token: string) => {
        localStorage.setItem("PadelToken", token);
    }

  return {
    handleLogin,
    addTokenToLocalStorage
  }
}
