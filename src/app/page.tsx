"use client";
import CatagoryCard from "@/components/CatTagoryCard";
import ButtonCustom from "@/components/ButtonCustom";
import {Iconcustom} from './IconTest'
//  import logo from '../../public/logo.png'
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
  Input,
  Avatar,
} from "@heroui/react";
import CourseCard from "@/components/CourseCard";
interface CardData {
  TextHeader: string;
  TextBody: string;
}

function SearchInput() {
  return (
    <Input
      endContent={
        <Button className="searchButton" radius="none">
          ค้นหา
        </Button>
      }
      placeholder="ค้นหาหลักสูตร"
      startContent={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      }
      radius="sm"
      type="text"
    />
  );
}

export default function Home() {
  const CardData: CardData[] = [
    {
      TextHeader: "Data",
      TextBody: "เรียนรู้และฝึกฝนกระบวนการคิด สร้างมูลค่าให้ธุรกิจด้วยข้อมูล",
    },
    {
      TextHeader: "Science",
      TextBody: "เรียนรู้และฝึกฝนกระบวนการคิด ด้วยกระบวนการทางวิทยาศาสตร์",
    },
    {
      TextHeader: "Tech",
      TextBody: "พร้อมเป็นที่ต้องการของตลาด แรงงานด้วยทักษะการเขียนโปรแกรม",
    },
    {
      TextHeader: "Business",
      TextBody:
        "พลิกโฉมธุรกิจในยุคดิจิทัลด้วยการเข้าถึงลูกค้าในช่องทาง และเวลาที่เหมาะ",
    },
  ];
  return (
    <>
      <div className="grid md:grid-cols-2 ">
        <div className="grid">
          <Image
            className="ml-7"
            src="/logo.png"
            width={351.74}
            height={255.98}
            alt="Picture of the author"
          />
          <div className="md:w-[400px] sm:max-w-[500px] sm:w-[400px] mt-5">
            <SearchInput />
          </div>
        </div>
        {/* md:max-w-[755px] */}
        <div className="sm:w-[350px] md:min-w-[760px] ml-3 mt-5 col-span-1 ">
          <div className="flex flex-col bg-white m-auto p-auto ">
            <div className="flex sm:overflow-x-scroll pb-10 hide-scroll-bar">
              <div className="flex  gap-2">
                <Card className="md:w-[312px]  sm:w-[212px] sm:h-[548px]">
                  <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-[32px] text-white uppercase font-bold">
                      Generative AI and ChatGPT: Design Thinking Edition
                    </p>
                    <h4 className="text-[24px] text-white font-medium text-large">
                      ปลดล็อกขีดจำกัดการทำงาน ด้วยพลัง AI
                    </h4>
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="backdrop-contrast-50 bg-white/30 z-1 w-full h-full object-cover"
                    src="/Excomputer.png"
                  />
                  <CardFooter className="flex text-white absolute bottom-0 z-10 gap-3">
                    <span>
                      <Avatar radius="full" size="lg" src="/profile1.png" />
                    </span>
                    <div>
                      <p className="w-[190px]">ณัฐกานต์ สิทธิชัยอนันต์</p>{" "}
                      <p className="w-[200px]">CEO Y.I.M Corporation </p>
                    </div>
                  </CardFooter>
                </Card>
                <Card className="w-[150px] h-[548px]">
                  <CardHeader className="absolute z-10 top-1 flex-col  flex justify-center items-center -rotate-90">
                    <p className=" text-[24px] text-white  w-[500px]">
                      Generative ChatGPT:{" "}
                    </p>
                    <p className="text-[24px] text-white font-medium text-large w-[500px]">
                      UX Design Edition
                    </p>
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://heroui.com/images/card-example-3.jpeg"
                  />
                </Card>
                <Card className="w-[150px] h-[548px]">
                  <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">
                      Supercharged
                    </p>
                    <h4 className="text-white font-medium text-large">
                      Creates beauty like a beast
                    </h4>
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="https://heroui.com/images/card-example-2.jpeg"
                  />
                  <CardFooter className=" text-white absolute bottom-0 z-10 justify-between">
                    <div>
                      <p>Available soon.</p>
                      <p>Get notified.</p>
                    </div>
                    <Button
                      className="text-tiny"
                      color="primary"
                      radius="full"
                      size="sm"
                    >
                      Notify Me
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-flow-row-dense  md:grid-cols-1 sm:flex sm:flex-col ">
        <span className="flex ">
          <p className="flex gap-2 ml-4 mb-4 font-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
              />
            </svg>
            เลือกเรียนตามหัวข้อที่สนใจ
          </p>
          <p className="mr-4 mb-4 font-black right-[305px] absolute max-md:hidden">
          <ButtonCustom labelbutton="ดูทั้งหมด" />
          </p>
          {/* <div className="w-[100px] sm:flex-col  max-md:hidden rtl">
         
          </div> */}
        </span>

     
          <div className="grid md:grid-cols-4  mt-5 gap-x-32">
            {CardData.map((v, i) => {
              return <div key={i} className="m-4"><CatagoryCard data={v}  /></div> 
            })}
          </div>
          <div className="w-[100px] justify-center sm:hidden align-middle mt-2 mx-auto">
        <ButtonCustom labelbutton="ดูทั้งหมด" />
      </div>
      </div>

      <p className="mr-4 mb-4 font-black right-[305px] absolute max-md:hidden">
          <ButtonCustom labelbutton="ดูทั้งหมด" />
          </p>
      <div className="grid md:grid-flow-row-dense md:grid-cols-2 grid-rows-1 sm:flex sm:flex-col">
        <span className="flex md:justify-between col-span-2">
        <p className="flex gap-2 ml-4 mb-4 font-black  mt-[1%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
          />
        </svg>
        คอร์สของฉัน
      </p>
          {/* <div className="w-[100px] sm:flex-col sm:justify-end max-md:hidden">
            <ButtonCustom labelbutton="ดูทั้งหมด" />
          </div> */}
        </span>
          <div className="grid md:grid-cols-4 mt-5 gap-x-32 m-4">
          <CourseCard />
          </div>
        
      </div>
      
 
        {/* <button className="mr-5"><code> prev</code> </button>  */}
        <div className="ml-4 min-w-[700px] gap-x-32">  </div>
      
        {/* <button className="ml-5"><code> next </code> </button>  */}
      <div className="w-[100px] justify-center sm:hidden align-middle mt-10 mx-auto">
        <ButtonCustom labelbutton="ดูทั้งหมด" />
      </div>
      <Card className="md:w-[312px]  sm:w-[212px] sm:h-[548px]">
                  <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-[32px] text-white uppercase font-bold">
                      Generative AI and ChatGPT: Design Thinking Edition
                    </p>
                    <h4 className="text-[24px] text-white font-medium text-large">
                      ปลดล็อกขีดจำกัดการทำงาน ด้วยพลัง AI
                    </h4>
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="backdrop-contrast-50 bg-white/30 z-1 w-full h-full object-cover"
                    src="/Excomputer.png"
                  />
                  <CardFooter className="flex text-white absolute bottom-0 z-10 gap-3">
                    <span>
                      <Avatar radius="full" size="lg" src="/profile1.png" />
                    </span>
                    <div>
                      <p className="w-[190px]">ณัฐกานต์ สิทธิชัยอนันต์</p>{" "}
                      <p className="w-[200px]">CEO Y.I.M Corporation </p>
                    </div>
                  </CardFooter>
                </Card>
      <footer className="mt-[5%] mb-[5%]">sadfasf</footer>
    </>
  );
}
