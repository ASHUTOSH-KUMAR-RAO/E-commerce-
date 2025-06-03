import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

const page = () => {
  return (
    <div className="p-10">
  <div className="flex flex-col gap-y-4">
    <div>
      <Button>
        kaise ho Baby
      </Button>
    </div>

    <div>
      <Input placeholder="kaise ho input Bhaiya"/>
    </div>

    <div>
      <Progress value={30}/>
    </div>

    <div>
      <Textarea placeholder="Mai Text Area Hu"/>
    </div>
  </div>
  </div>
  )
}

export default page;





