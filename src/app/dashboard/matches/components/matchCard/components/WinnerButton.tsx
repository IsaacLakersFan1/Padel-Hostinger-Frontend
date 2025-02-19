import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { WinnerButtonProps } from "../../../interfaces/winnerButton";

export const WinnerButton = (props: WinnerButtonProps) => {
  const {
    winnerTeam,
    matchId,
    onStatusChange,
    playerName1,
    playerName2,
    whoWin,
  } = props;
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={
              winnerTeam !== 0
                ? winnerTeam === whoWin
                  ? "success"
                  : "destructive"
                : "default"
            }
            className="w-32"
            disabled={winnerTeam !== 0}
          >
            Team 1
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm winner</DialogTitle>
            <DialogDescription>
              Are you sure this are the winners?
            </DialogDescription>
            Team 1
          </DialogHeader>
          <section className="flex mt-4">
            <div className="flex items-center gap-2 justify-center w-full">
              <DialogTitle className="flex items-center gap-2 justify-center">
                <img
                  src={`../../../../../public/${playerName1}.jpeg`}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                {playerName1}
              </DialogTitle>
            </div>
            <div className="flex items-center gap-2 justify-center w-full">
              <DialogTitle className="flex items-center gap-2 justify-center">
                <img
                  src={`../../../../../public/${playerName2}.jpeg`}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                {playerName2}
              </DialogTitle>
            </div>
          </section>
          <DialogFooter className="flex justify-between mt-6">
            <DialogClose asChild>
              <Button
                type="submit"
                onClick={() => {
                  onStatusChange(matchId, whoWin);
                }}
                className="mb-4"
              >
                Save changes
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button variant="outline" className="mb-4">
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
