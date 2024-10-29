import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const Page = () => {
  const options = [
    {
      id: 1,
      property: 'default'
    },
    {
      id: 2,
      property: 'destructive'
    },
    {
      id: 3,
      property: 'success'
    },
    {
      id: 4,
      property: 'info'
    }
  ]
  return (
    <div className="grid gap-3">
      {
        options.map(option => (
          <Alert variant={option.property} key={option.id}>
            <Terminal className="h-4 w-4" />
            <AlertTitle>{option.property}</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
        ))
      }
    </div>
  );
}

export default Page