import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Progress,
} from "@heroui/react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
export default function CourseCard() {
  const list = [
    {
      title: "Orange",
      text: "  Generative AI and ChatGPT: Design Thinking Edition",
      img: "/HeadHuman.jpg",
      ProgressPerCent: 0,
    },
    {
      title: "Tangerine",
      text: "Generative ChatGPT:  UX  Design Edition",
      img: "/comandphone.jpg",
      ProgressPerCent: 10,
    },
    {
      title: "Raspberry",
      text: "เทคนิคการจัดทำบัญชี จัดการภาษีด้วยเทคโนโลยีดิจิทัล",
      img: "/com.png",
      ProgressPerCent: 40,
    },
    {
      title: "Lemon",
      text: "องค์ประกอบของการเป็นผู้ประกอบการ SME ที่ประสบความสำเร็จ",
      img: "/computer.jpg",
      ProgressPerCent: 80,
    },
  ];
  
  return (
    <div className=" min-w-[300px] md:w-[1150px] ">
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
          <SwiperSlide  key={index} >
            <Card className="h-[307px] sm:w-[351px] md:w-[251px]" key={index} radius="sm">
              <CardHeader className="absolute z-1 top-1 flex-col !items-start"></CardHeader>
              <CardBody className="p-0 h-[152px] overflow-auto rounded-none">
                <Card className=" sm:w-full ">
                  <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-[12px] w-[70%] text-white uppercase font-bold">
                      {item.text}
                    </p>
                  </CardHeader>
                  <Image
                    removeWrapper
                    radius="none"
                    alt="Card background"
                    className="z-1 w-full h-[170px] object-cover rounded-none"
                    src={item.img}
                  />
                </Card>
                <p className="p-4">{item.text}</p>
                {/* <Image
               radius="none"
               alt={item.title}
               removeWrapper
               className="z-0 w-full h-[152px] overflow-auto"
               shadow="sm"
               src={item.img}
               width="100%"
             /> */}
              </CardBody>
              <CardFooter className="text-small">
                <div>
                  <p>เรียนไปแล้ว {item.ProgressPerCent} %</p>
                  <Progress
                    aria-label="Loading..."
                    color="success"
                    value={item.ProgressPerCent}
                    className="sm:w-[320px] md:w-[230px]"
                  />
                </div>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper></div>
  )
}
