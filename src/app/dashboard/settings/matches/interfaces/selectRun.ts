export interface SelectRunProps {
    runs: {
        run: number
    }[],
    getAllRuns: () => Promise<void>,
    getMatchesByRun: (run: string) => Promise<void>
}


