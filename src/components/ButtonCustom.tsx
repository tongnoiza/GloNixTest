import { Button } from "@heroui/react";
interface ButtonArgs {
  labelbutton: string;
}
export default function ButtonCustom({ labelbutton }: ButtonArgs) {
  return (
    <>
      <Button className="font-bold bg-white border-[#A8AD00] text-[#A8AD00]" variant="bordered" radius="full">
        {labelbutton}
      </Button>
    </>
  );
}
