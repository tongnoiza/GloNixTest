"use client";
import "quill/dist/quill.core.css";
import {
  Image,
  Button,
  Input,
} from "@heroui/react";

import CourseOnlineCard from "./CourseOnlineCard";
import MyCourseCard from "./MyCourseCard";
import ArticleAndNews from "./ArticleAndNews";
import QuestionThread from "./QuestionThread";
import TopicLearn from "./TopicLearn";

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
  
  return (
    <>
      <div className="grid md:grid-cols-2 sm:grid-cols-1">
        <div className="grid ml-5 mt-[2%]">
          <span className="text-[#00665E] text-[18px]">
            Lorem ipsum dolor sit amet, consectetur
          </span>
          <Image
            className="top-[2%]"
            src="/logo.png"
            width={301.74}
            height={205.98}
            alt="Picture of the author"
          />
          <div className="md:w-[400px] max-sm:w-[350px] sm:mx-auto mt-[1%] md:ml-[-1rem]">
            <SearchInput />
          </div>
        </div>
        <div className="max-sm:w-[360px] md:min-w-[760px] mt-5 col-span-1 ">
          <div className="flex flex-col bg-white p-auto ">
            <div className="flex max-sm:overflow-x-scroll pb-10 hide-scroll-bar md:ml-[-16rem] ">
              <div className="flex gap-5 sm:mx-auto">
                    <img src="fill_Card1.png" height={548+'px'} width={412+'px'}/>
                  <img src="fill_Card2.png" height={548+'px'} width={150+'px'}/>
                <img src="fill_Card3.png" height={548+'px'} width={150+'px'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TopicLearn/>
      <MyCourseCard />
      <CourseOnlineCard />
      <ArticleAndNews />
      <QuestionThread />
    </>
  );
}
