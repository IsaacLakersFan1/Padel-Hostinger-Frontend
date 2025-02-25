import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export const CreateMatch = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Create Match</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Match</DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <div>
                <Button type="submit">Create</Button>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </div>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
