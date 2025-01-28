"use client";
export const chevrondown = () =>{
  return <><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
</>
}
import React ,{  useState } from "react";
import {
  Navbar,
  // Avatar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Avatar,
} from "@heroui/react";


export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["รายวิชา", "ถ่ายทอดสด", "กระทู้คำถาม"];
  return (
    <> 
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} >
      <NavbarContent >
        <NavbarBrand>
          <img src="/Logo1.png"/>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 ml-[-16rem]">
        <NavbarItem>
          <Link color="foreground" href="#">
            รายวิชา
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  href="#">ถ่ายทอดสด</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            กระทู้คำถาม
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" >
        <NavbarItem className="hidden lg:flex gap-2 mr-[-17rem]">
          <Button color="default">ออกจากระบบ</Button>
          <Button className="bg-black text-white"><Avatar  src="usericon.png" className="m-3"/> Siriwat Rachanon {chevrondown()} </Button>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    className="md:hidden"
        />
      </NavbarContent>
      <NavbarMenu className="bg-teal-900">
        <section className="mt-[35%]">
            {menuItems.map((item, index) => (
            <NavbarMenuItem key={index} className="text-center">
              <div className="border-t border-white mt-2 mx-2"></div>
              <Link
                className=" text-white mx-auto my-[1rem]"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
          <div className="border-t border-white mt-2 mx-2"></div>
        </section>
        

        <Button className="bg-black text-white mt-[10rem] p-7"> Siriwat Rachanon</Button>
        <Button className="p-7 text-[15px] text-black"  color="default">ออกจากระบบ</Button>
      </NavbarMenu>
    </Navbar></>
  );
}
