/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import CardButton from "@/components/CardButton";
import { Card, CardHeader, CardFooter, Image, Avatar } from "@heroui/react";
import EditorJS from "@editorjs/editorjs";
import Quill from "quill";
import React, { useRef, useState, useEffect } from "react";
import "quill/dist/quill.core.css";
import ButtonCustom from "@/components/ButtonCustom";
import { CKEditor, useCKEditorCloud } from "@ckeditor/ckeditor5-react";

export default function QuestionThread() {
  const [Text, setText] = useState("");
  const cloud = useCKEditorCloud({
    version: "44.1.0",
    premium: true,
  });

  if (cloud.status === "error") {
    return <div>Error!</div>;
  }

  if (cloud.status === "loading") {
    return <div>Loading...</div>;
  }

  const {
    ClassicEditor,
    Heading,
    FontFamily,
    Indent,
    IndentBlock,
    Alignment,
    Essentials,
    List,
    Link,
    ListProperties,
    Paragraph,
    Bold,
    Italic,
    BlockQuote,
    Strikethrough,
    TextTransformation,
    Underline,
  } = cloud.CKEditor;

  const { FormatPainter } = cloud.CKEditorPremiumFeatures;
  return (
    <div className="mt-10 md:w-[1130px] sm:w-[210px]  mx-4 ">
      <span className="flex ">
        <p className="flex gap-2  mb-4 font-black">
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
          ตั้งกระทู้คำถาม
        </p>
      </span>

      <Card className="sm:w-[412px] md:w-[80rem] sm:h-[448px] max-h-[548px] mt-[2%]">
        <div className="mx-[3%] mt-[2%]">
          <div className="mb-3">
            <label className="font-extrabold text-[18px] mb-2">
              หัวข้อกระทู้
            </label>
            <input
              className=" appearance-none border border-solid rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="หัวข้อกระทู้"
            ></input>
          </div>
          <div className="mt-[1%]">
            <label htmlFor="" className="mt-[4%] font-extrabold text-[18px]">
              เนื้อหา
            </label>
            <CKEditor
              editor={ClassicEditor}
              data={Text}
              onChange={(event, editor) => {
                const data = editor.getData();
                setText(data);
              }}
              onInit={(editor) => {
                editor.editing.view.change((writer) => {
                  writer.setStyle(
                    "height",
                    "700px",
                    editor.editing.view.document.getRoot()
                  );
                });
              }}
              config={{
                licenseKey:
                  "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3Mzg4ODYzOTksImp0aSI6ImQ3YWEwOWU1LWNkZDUtNDY2Ni1iYmFiLWFkNjI2ZjZmOWExNSIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjA3ZWRkOWNjIn0.hakAMSlMVQBxnGw_N_GRjualBnHQSpcCKjhdRSDUE1f_jw4-8gn6b8bkeuuTvvmVEkApLZv1J2JvEx_J5H0vpw",
                plugins: [
                  FontFamily,
                  Underline,
                  TextTransformation,
                  Essentials,
                  Paragraph,
                  Bold,
                  Italic,
                  FormatPainter,
                  BlockQuote,
                  Strikethrough,
                  List,
                  ListProperties,
                  Link,
                  Heading,
                  Indent,
                  IndentBlock,
                  Alignment,
                ],
                toolbar: [
                  "heading",
                  "fontFamily",
                  "bold",
                  "italic",
                  "underline",
                  "strikethrough",
                  "blockQuote",
                  "numberedList",
                  "bulletedList",
                  "outdent",
                  "indent",
                  "alignment",
                  "link",
                ],
                alignment: {
                  options: ["left"],
                },
                heading: {
                  options: [
                    {
                      model: "paragraph",
                      title: "Paragraph",
                      class: "ck-heading_paragraph",
                    },
                    {
                      model: "heading1",
                      view: "h1",
                      title: "Heading 1",
                      class: "ck-heading_heading1",
                    },
                    {
                      model: "heading2",
                      view: "h2",
                      title: "Heading 2",
                      class: "ck-heading_heading2",
                    },
                    {
                      model: "heading3",
                      view: "h3",
                      title: "Heading 3",
                      class: "ck-heading_heading3",
                    },
                    {
                      model: "heading4",
                      view: "h4",
                      title: "Heading 4",
                      class: "ck-heading_heading4",
                    },
                    {
                      model: "heading5",
                      view: "h5",
                      title: "Heading 5",
                      class: "ck-heading_heading5",
                    },
                    {
                      model: "heading6",
                      view: "h6",
                      title: "Heading 6",
                      class: "ck-heading_heading6",
                    },
                  ],
                },
              }}
            />
            <div className="flex mt-3">
              <button className="max-sm:mx-auto sm:hidden max-sm:right-[33px] bg-[#A8AD00] w-[100px] px-4 py-2 text-white font-bold !mb-2 rounded-xl">
                ส่ง
              </button>
              <button className="absolute max-sm:invisible  right-[33px] bg-[#A8AD00] w-[100px] px-4 py-2 text-white font-bold !mb-2 rounded-xl">
                ส่ง
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
