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
    //         const response = await fetch(`${API_URL}/api/settings/download-db`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         });
    
    //         if (!response.ok) throw new Error("Failed to download");
    
    //         const blob = await response.blob();
    //         console.log("Downloaded Blob:", blob);
    
    //         const url = window.URL.createObjectURL(blob);
            
    //         // Ensure a correct filename
    //         const contentDisposition = response.headers.get("Content-Disposition");
    //         let fileName = "database.db";
    
    //         if (contentDisposition) {
    //             const match = contentDisposition.match(/filename="?(.+?)"?$/);
    //             if (match && match[1]) {
    //                 fileName = match[1];
    //             }
    //         }
    
    //         // 🔹 Create an invisible anchor tag and trigger a download
    //         const a = document.createElement("a");
    //         a.style.display = "none";  // Hide the element
    //         a.href = url;
    //         a.download = fileName;
    //         a.setAttribute('target', '_blank');
    
    //         document.body.appendChild(a);
    //         a.click();  // Programmatically trigger download
    //         document.body.removeChild(a);  // Cleanup
    
    //         setTimeout(() => {
    //             window.URL.revokeObjectURL(url);
    //         }, 100);
    
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
            // Directly open the download URL instead of using fetch
            window.open(`${API_URL}/api/settings/download-db`, "_blank");
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
