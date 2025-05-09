
"use client";
import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Resoure() {
    const { ref } = useSectionInView("My Resource");
  return (
    <section id="resource" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
    <div className="mb-20">
      <SectionHeading>My Resoure UX/UI</SectionHeading>

      <div className="flex space-x-7 mb-4 py-4  ">
        <a
          href="https://www.figma.com/design/9IJpMxaMJPJ6Xx74PHLlRA/IFinder-UX-UI?node-id=67-61&p=f&t=pPLsbIghJGjEXHaG-0"
          target="_blank"
          className=" bg-white dark:bg-white/5 border dark:border-white/10 hover:bg-slate-100  cursor-pointer rounded-xl w-[500px] h-[100px] flex justify-center items-center "
        >
          <div className="text-xl dark:text-white">iFinder</div>
        </a>
        <a
          href="https://www.figma.com/design/qPCHjDtfgzaXwDD2mPI9cJ/Final-Project-UI-Data-Analytics?node-id=0-1&t=lbmNJR84KKP50nZj-1"
          target="_blank"
          className=" bg-white  dark:bg-white/5  dark:border-white/10 border hover:bg-slate-100  cursor-pointer rounded-xl w-[500px] h-[100px] flex justify-center items-center "
        >
         <div className="text-xl dark:text-white">E-Found</div>
        </a>
      </div>
      <div className="flex space-x-7  ">
      <a
          href="https://www.figma.com/design/DsVmQzXrsHC0QXHlhlCkyA/B-Sakda-Ecommerce?node-id=25-2&p=f&t=sDYGIG1zOEZho95h-0"
          target="_blank"
          className=" bg-white dark:bg-white/5 border dark:border-white/10 hover:bg-slate-100  cursor-pointer rounded-xl w-[500px] h-[100px] flex justify-center items-center "
        >
         <div className="text-xl dark:text-white">Freelance Ecommerce</div>
        </a>
        
      </div>
    </div>
    </section>
  );
}
