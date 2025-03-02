import { useEffect } from "react";
import { TopBar } from "../../topBar/TopBar";
import { CreateMatch } from "./components/CreateMatch";
import { MatchCard } from "./components/MatchCard";
import { SelectRun } from "./components/SelectRun";
import { useMatches } from "./hooks/useMatches";

export const MatchesSettings = () => {
  const {
    matches,
    match,
    getMatchesByRun,
    getMatchById,
    createMatch,
    updateMatch,
    run,
    runs,
    getAllRuns,
    players,
    getAllPlayers
  } = useMatches();

  return (
    <>
      <section className="flex flex-col gap-4 items-center justify-center w-11/12 mx-auto">
        <TopBar>Matches Settings</TopBar>
        <CreateMatch />
        <div className="flex items-center justify-center w-full">
          <SelectRun
            getAllRuns={getAllRuns}
            getMatchesByRun={getMatchesByRun}
            runs={runs}
          />
        </div>
        <div className="w-full">
          <MatchCard matches={matches} getMatchById={getMatchById} updateMatch={updateMatch} match={match} players={players} />
        </div>
      </section>
    </>
  );
};
