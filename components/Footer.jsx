import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import Category from "./Category";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import Gallery from "./news/Gallery";
import RecentNewsFooter from "./news/RecentNewsFooter";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-[#1e1919]">
        <div className="px-4 md:px-8 py-10 w-full gap-12 grid lg:grid-cols-4 grid-cols-1">
          <div className="w-full">
            <div className="w-full flex flex-col gap-y-[14px]">
              <Image
                className=""
                width={200}
                height={100}
                src={logo}
                alt="logo"
              />
              <h2 className="text-slate-300">
              موقع مباشر مصر هو بوابة إخبارية شاملة تهدف إلى تقديم تغطية متميزة لأهم الأخبار والأحداث الجارية في مصر والعالم العربي. يوفر الموقع محتوى متنوع يشمل السياسة، الاقتصاد، الرياضة، الثقافة، الفن، والتكنولوجيا، بالإضافة إلى الأخبار العاجلة والمباشرة من قلب الحدث. يسعى مباشر مصر إلى أن يكون مصدرًا موثوقًا وسريعًا للمعلومة، من خلال تقديم تحليلات عميقة، وتقارير ميدانية، ومقالات رأي من نخبة من الصحفيين والمحللين. يتميز الموقع بتصميم حديث وسهل الاستخدام، مما يتيح للزوار التنقل بسلاسة بين الأقسام المختلفة، والبقاء على اطلاع دائم بأحدث المستجدات من خلال التحديثات الفورية والإشعارات.
              </h2>
            </div>
          </div>
          <Gallery />
          <div>
            <Category categories={[]} titleStyle="text-white" />
          </div>
          <RecentNewsFooter />
        </div>
      </div>
      <div className="bg-[#262323]">
        <div className="px-4 md:px-8 py-5 flex flex-col md:flex-row gap-3 justify-between items-center">
          <div className="flex gap-y-2 text-gray-400 justify-start items-center">
            <span>حقوق الطبع والنشر © 2024</span>
          </div>
          <div className="flex gap-x-[4px]">
            <a
              className="w-[37px] h-[35px] text-white flex justify-center items-center bg-[#ffffff2b]"
              href="#"
            >
              <FaFacebookF />
            </a>
            <a
              className="w-[37px] text-white h-[35px] flex justify-center items-center bg-[#ffffff2b]"
              href="#"
            >
              <AiOutlineTwitter />
            </a>
            <a
              className="w-[37px] text-white h-[35px] flex justify-center items-center bg-[#ffffff2b]"
              href="#"
            >
              <AiFillYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
