import { SelectPage } from "./components/SelectPage";
import { SettingsOptions } from "./components/SettingsOptions";

export function TopBar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center justify-around mt-4 mb-12">
        <SelectPage />
        <h1 className="text-3xl font-bold">{children}</h1>
        <SettingsOptions />
      </div>
    </>
  );
}
