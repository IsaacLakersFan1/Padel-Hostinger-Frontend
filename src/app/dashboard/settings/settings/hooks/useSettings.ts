import { useState } from "react";
import API_URL from "@/utils/apiConfig";
import { toastError } from "@/hooks/useToastError";
export const useSettings = () => {
    const [isDownloading, setIsDownloading] = useState(false);
    const { showToastError } = toastError();
    const token = localStorage.getItem("PadelToken");
    

    // const downloadDB = async () => {
    //     setIsDownloading(true);
    //     try {
    //         const response = await axios.get(`${API_URL}/api/settings/download-db`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             },
    //             responseType: "blob" // This is correct for binary data
    //         });
    
    //         console.log("Downloaded file:", response);
    //         console.log("Response size:", response.data.size);
    
    //         if (!response.data || response.data.size === 0) {
    //             showToastError("The downloaded file is empty.");
    //             return;
    //         }
    
    //         const blob = new Blob([response.data], { type: "application/x-sqlite3" }); // Use SQLite-specific MIME type
    //         const url = window.URL.createObjectURL(blob);
            
    //         const a = document.createElement("a");
    //         a.href = url;
    //         a.download = "database.db";
    //         document.body.appendChild(a);
    //         a.click();
    //         document.body.removeChild(a);
    
    //         window.URL.revokeObjectURL(url); // Clean up memory
    
    //     } catch (error) {
    //         showToastError("Error downloading the database");
    //         console.error("Download error:", error);
    //     } finally {
    //         setIsDownloading(false);
    //     }
    // };

    const downloadDB = async () => {
        setIsDownloading(true);
        try {
            const response = await fetch(`${API_URL}/api/settings/download-db`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
    
            if (!response.ok) throw new Error("Failed to download");
    
            // Get filename from Content-Disposition header (if available)
            const contentDisposition = response.headers.get("Content-Disposition");
            let fileName = "database.db"; // Default filename
    
            if (contentDisposition) {
                const match = contentDisposition.match(/filename="?(.+?)"?$/);
                if (match && match[1]) {
                    fileName = match[1];
                }
            }
    
            // 🔹 Force `.db` extension if missing
            if (!fileName.endsWith(".db")) {
                fileName += ".db";
            }
    
            const blob = await response.blob();
            console.log("Downloaded Blob:", blob);
    
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.setAttribute("download", fileName); // Ensure correct filename
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
    
            setTimeout(() => {
                window.URL.revokeObjectURL(url);
            }, 100);
    
        } catch (error) {
            showToastError("Error downloading the database");
            console.error("Download error:", error);
        } finally {
            setIsDownloading(false);
        }
    };
    
    
    

    return {
        isDownloading,
        downloadDB
    }
    
}
