import { Button } from "@heroui/react";
interface ButtonCustomProps {
  labelbutton: string;
}

export default function CardButton({ labelbutton }: ButtonCustomProps){

return (<>
     <Button className="font-bold bg-none border-white  text-[#ffffff]" variant="bordered" radius="full">
        {labelbutton}
      </Button>


</>)


}