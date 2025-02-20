import { TopBar } from "../../topBar/TopBar";
import { Button } from "@/components/ui/button";
import { useSettings } from "./hooks/useSettings";

export const SettingsPage = () => {
  const { isDownloading, downloadDB } = useSettings();
  return (
    <>
        <TopBar>Settings</TopBar>
        <div className="flex flex-col items-center justify-center">
            <Button onClick={downloadDB} disabled={isDownloading}>{isDownloading ? "Downloading..." : "Download Database"}</Button>
        </div>
    </>
  )
}
