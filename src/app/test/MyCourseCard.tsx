/* eslint-disable @next/next/no-img-element */
import ButtonCustom from "@/components/ButtonCustom";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Progress,
} from "@heroui/react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
export default function MyCourseCard() {
  const list = [
    {
      title: "Orange",
      text: "  Generative AI and ChatGPT: Design Thinking Edition",
      img: "/HeadHuman.jpg",
      ProgressPerCent: 0,
      MyCourse_fill_img: "MyCourse_fill1.png",
    },
    {
      title: "Tangerine",
      text: "Generative ChatGPT:  UX  Design Edition",
      img: "/comandphone.jpg",
      ProgressPerCent: 10,
      MyCourse_fill_img: "MyCourse_fill2.png",
    },
    {
      title: "Raspberry",
      text: "เทคนิคการจัดทำบัญชี จัดการภาษีด้วยเทคโนโลยีดิจิทัล",
      img: "/com.png",
      ProgressPerCent: 40,
      MyCourse_fill_img: "MyCourse_fill3.png",
    },
    {
      title: "Lemon",
      text: "องค์ประกอบของการเป็นผู้ประกอบการ SME ที่ประสบความสำเร็จ",
      img: "/computer.jpg",
      ProgressPerCent: 80,
      MyCourse_fill_img: "MyCourse_fill4.png",
    },
  ];
  return (
    <>
      <div className="grid md:grid-flow-row-dense md:grid-cols-2 grid-rows-1 sm:flex sm:flex-col sm:min-w-[420px] ">
        <span className="flex ">
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
          <p className="mr-4  mb-4 font-black ViewAllButton absolute max-md:hidden">
            <ButtonCustom labelbutton="ดูทั้งหมด" />
          </p>
        </span>
        <div className="grid md:grid-cols-4 gap-x-32 mx-2">
          <div className=" min-w-[300px] md:w-[81rem] ">
            <Swiper
              navigation={true}
              breakpoints={{
                342: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {list.map((item, index) => (
                <SwiperSlide key={index}>
                  <Card
                    className="h-[327px] sm:w-[421px] md:w-[300px] bottomCardRadias"
                    key={index}
                    radius="sm"
                  >
                    <CardHeader className="absolute z-1 top-1 flex-col !items-start"></CardHeader>
                    <CardBody className="p-0 h-[152px] overflow-auto rounded-none">
                      <Card
                        style={{ borderRadius: "0px" }}
                        className="sm:w-full "
                      >
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                          <p className="text-[12px] w-[80%] text-white font-bold">
                            {item.text}
                          </p>
                        </CardHeader>
                        <figure className="container  ">
                          <img
                            alt="Card background"
                            className="z-1 w-full !h-[200px] object-cover"
                            src={item.img}
                          />
                          <img
                            style={{
                              opacity: "100%",
                              borderBottomLeftRadius: "0%",
                            }}
                            className="h-[100%] fillimg"
                            src={item.MyCourse_fill_img}
                            alt="Movie"
                          />
                        </figure>
                      </Card>
                      <div className="mx-4 mt-4">{item.text}</div>
                    </CardBody>
                    <CardFooter className="text-small">
                      <div>
                        <p>เรียนไปแล้ว {item.ProgressPerCent} %</p>
                        <Progress
                          aria-label="Loading..."
                          color="success"
                          value={item.ProgressPerCent}
                          className="max-sm:w-[330px] md:w-[230px]"
                        />
                      </div>
                    </CardFooter>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="w-[100px] justify-center sm:hidden align-middle mt-6 mx-auto">
        <ButtonCustom labelbutton="ดูทั้งหมด" />
      </div>
    </>
  );
}
