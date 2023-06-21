"use client";
import img from "next/image";
import { BsPhone } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { BiInfoCircle } from "react-icons/bi";

export default function Footer() {
  return (
    <div className="">
      <div className="flex flex-col items-center w-full mt-12 pt-10 bg-two h-[25rem] ">
        <div className="flex h-1/3  flex-col w-[80%]">
          <div className="flex flex-row py-2 items-end justify-end">
            <p className=" text-right text-sm border-main px-2 border-l-[1px] ">
              تماس : ۰۹۹۱۰۷۷۴۲۱۶
            </p>
            <div className="">
              <BsPhone className="text-xl" />
            </div>
            <p className=" text-sm border-main px-2 border-l-[1px]">
              ساعت پاسخگویی : ۱۰ الی ۲۰
            </p>
            <BiTimeFive className="text-xl" />
          </div>
          <div className="flex flex-row items-end justify-end">
            <p className=" text-sm border-main px-2 border-l-[1px]">
              تهران، خیابان ولیعصر (عج)، تقاطع ولیعصر و طالقانی مجتمع تجاری
              اداری نور تهران طبقه همکف دوم پلاک ۷۰۱۰ فروشگاه کامپیوتر و لپ تاپ
              سامر کالا{" "}
            </p>
            <MdLocationOn className="text-xl" />
          </div>
        </div>
        <div className="flex border-b-[1px] border-main  w-[80%]"></div>
        <div className="flex justify-between items-start pt-2 flex-row w-[80%]">
          <div className="flex w-[30%] space-x-2 p-2 ">
            <div className="flex   border-2 rounded-xl ">
              <img
                className="bg-main/25 rounded-xl  space-x-2 "
                src={"/enamad.png"}
                alt="loading.."
                width={150}
                height={150}
              />
            </div>
            <div className="flex  border-2 rounded-xl">
              <img
                className="bg-main/25 rounded-xl  space-x-2 "
                src={"/neshan.png"}
                alt="loading.."
                width={150}
                height={150}
              />
            </div>
          </div>
          <div className="flex justify-between items-end flex-col w-[70%] ">
            <div className="flex flex-row justify-end ">
              <p className="text-right text-sm">درباره فروشگاه سامیر کالا</p>
              <BiInfoCircle className="text-xl" />
            </div>
            <div className="flex flex-row items-end justify-end w-[70] pt-2">
              <p className="text-right text-sm text-slate-400">
                فروشگاه سامر کالا وابسته به گروه مهندسی لعل فام با بیش از ۱۵ سال
                سابقه فعالیت در زمینه قطعات کامپیوتر و حوزه دیجیتال برآن شده است
                تا برای سهولت حال مشتریان عزیز براساس فعالیت های آنها و میزان
                کارایی هر سیستم متناسب با فعالیت؛ قطعات را به صورت بهینه شده
                اسمبل کرده و در اختیار مشتریان عزیز قرار دهد. تا آنها برای خرید
                یک سیستم کامل و مناسب با فعالیت کاریشان دچار مشکل نباشند و در
                اسرع وقت به خواسته خود برسند. تمام تلاش ما رضایت شما و سهولت
                خرید یک سیستم مطمئن می باشد.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center  w-full h-16 bg-purple-950">
        <div className="flex flex-row  w-[80%]  ">
          <div className="flex w-full justify-center items-center flex-row">
            <p className="font-bold">All Right Reserved ©2023</p>
          </div>
          <div className="flex w-full justify-center items-center flex-row">
            <p className="text-right">
              کلیه حقوق مادی و معنوی این وب سایت متعلق به گروه مهندسی لعل فام می
              باشد
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
