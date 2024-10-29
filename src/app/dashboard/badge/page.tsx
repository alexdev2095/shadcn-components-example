import { Badge } from "@/components/ui/badge";

const Page = () => {
  return (
    <div className="flex gap-6">
      <Badge variant='default'> default</Badge>
      <Badge variant='destructive'>desctructive </Badge>
      <Badge variant='outline'>outline </Badge>
      <Badge variant='secondary'>secondary </Badge>
      <Badge variant='success'>success </Badge>
      <Badge variant='info'>info </Badge>
    </div>
  );
}

export default Page