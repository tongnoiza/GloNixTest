import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardHeader, CardFooter, Avatar } from "@heroui/react";
import ButtonCustom from "@/components/ButtonCustom";
import CardButton from "@/components/CardButton";
export default function CourseOnlineCard() {
  const ArrayData = [
    {
      buttonLabel: "Business",
      textHeader: "ลงทุนหุ้นมั่นใจ ต้องเข้าใจปัจจัย พื้นฐาน",
      TextBody: "รู้และเข้าใจปัจจัยที่ส่งผล กระทบต่อราคาหุ้น",
      imgpath: "/a1.png",
      CEOname: "ณัฐกานต์ สิทธิชัยอนันต์",
      Position_emp: "CEO Y.I.M Corporation",
      Profileimg: "/p1.png",
      Course_img_fill: "Course_img_fill1.png",
    },
    {
      buttonLabel: "Data",
      textHeader: "Progressive Web Application",
      TextBody:
        "การพัฒนา Application ด้วยคอนเซ็ปท์ Progressive Web Application (PWA)",
      imgpath: "/com.png",
      CEOname: "ปัญจมพงศ์ เสริมสวัสดิ์ศรี",
      Position_emp: "Google Developers",
      Profileimg: "/p2.png",
      Course_img_fill: "Course_img_fill2.png",
    },
    {
      buttonLabel: "Science",
      textHeader: "React Hooks in Action",
      TextBody: "เรียนรู้การเขียน React Hooks แบบ Best Practice",
      imgpath: "/comengineer.jpg",
      CEOname: "วรัทธน์ วงศ์มณีกิจ",
      Position_emp: "Co-Founder",
      Profileimg: "/p3.png",
      Course_img_fill: "Course_img_fill3.png",
    },
    {
      buttonLabel: "Tech",
      textHeader: "Generative AI and ChatGPT: Design Thinking Edition",
      TextBody: "ปลดล็อกขีดจำกัดการทำงาน ด้วยพลัง AI",
      imgpath: "/laptop.jpg",
      CEOname: "ทัศน์พล รัชตะสัมฤทธ",
      Position_emp: "Software Engineer",
      Profileimg: "/p4.png",
      Course_img_fill: "Course_img_fill4.png",
    },
  ];
  return (
    <>
      <div className="grid md:grid-flow-row-dense  md:grid-cols-1 sm:flex sm:flex-col mt-6">
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
            คอร์สออนไลน์
          </p>
          <p className="mr-4 mb-2 font-black ViewAllButton absolute max-md:hidden">
            <ButtonCustom labelbutton="ดูทั้งหมด" />
          </p>
        </span>
        <div className="min-w-[300px] md:w-[81rem] ">
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
            {ArrayData.map((item, index) => (
              <SwiperSlide key={index}>
                <Card className="m-4  sm:w-[312px] md:w-[304px] sm:h-[448px] mt-[2%]">
                  <CardHeader className="m-3 absolute z-10 top-1 flex-col !items-start">
                    <CardButton labelbutton={item.buttonLabel} />
                    <p
                      className={`${
                        index % 2 != 0 ? "text-white" : "text-black"
                      } font-black text-[22px] w-auto`}
                    >
                      {item.textHeader}
                    </p>
                    <p
                      className={`${
                        index % 2 != 0 ? "text-white" : "text-black"
                      }   mt-6 text-[15px] w-auto`}
                    >
                      {item.TextBody}
                    </p>
                  </CardHeader>
                  <img
                    style={{ opacity: "100%", borderRadius: "8%" }}
                    className="w-full h-full object-cover  rounded-md"
                    src={item.imgpath}
                  />
                  <img
                    style={{ opacity: "100%" }}
                    className="w-full h-full fillimg"
                    src={item.Course_img_fill}
                    alt="Card background"
                  />
                  <CardFooter className="flex text-white absolute bottom-0 z-10 gap-3">
                    <span>
                      <Avatar radius="full" size="lg" src={item.Profileimg} />
                    </span>
                    <div>
                      <p
                        className={`${
                          index % 2 != 0 ? "text-white" : "text-black"
                        }  w-[190px] text-[15px]`}
                      >
                        {item.CEOname}
                      </p>
                      <p
                        className={`${
                          index % 2 != 0 ? "text-white" : "text-black"
                        }  w-[200px] text-[15px]`}
                      >
                        {item.Position_emp}{" "}
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-[100px] justify-center sm:hidden align-middle  mx-auto">
          <ButtonCustom labelbutton="ดูทั้งหมด" />
        </div>
      </div>
    </>
  );
}
