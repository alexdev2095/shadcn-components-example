'use client'

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast"
const Page = () => {
  const { toast } = useToast()
  return (
    <div className="grid grid-cols-4 gap-4">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          })
        }}
      >
        Show Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again" onClick={() => console.log('psss')}>Try again</ToastAction>,
          })
        }}
      >
        Show Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
        }}
      >
        Destuctive Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: "success",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          })
        }}
      >
        Success Toast
      </Button>
    </div>
  );
}

export default Page