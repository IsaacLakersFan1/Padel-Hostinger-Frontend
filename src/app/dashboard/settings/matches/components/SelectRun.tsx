import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectRunProps } from "../interfaces/selectRun"

export const SelectRun = ({runs, getAllRuns, getMatchesByRun}: SelectRunProps) => {

    

  useEffect(() => {
    getAllRuns();
  }, []);


  return (
    <>
      <Select onValueChange={(value) => getMatchesByRun(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a run" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {runs.map((run) => (
              <SelectItem key={run.run} value={run.run.toString()}>
                {run.run}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};
