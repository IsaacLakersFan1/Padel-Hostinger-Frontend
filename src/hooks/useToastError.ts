// import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"

export function toastError() {

    const { toast } = useToast();

    const showToastError = (error: any) => {
        const errorMessage = error.response?.data?.message || error.message || error || "An unexpected error occurred";
        toast({
            title: "Uh oh! Something went wrong.",
            description: errorMessage,
            variant: "destructive",
        })
    }

  return {
    showToastError
  }
  
}
