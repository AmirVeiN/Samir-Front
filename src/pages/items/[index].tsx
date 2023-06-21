"use client";
import { useRouter } from "next/router";
import { useAppSelector } from "../../../store/hooks";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { BsCardChecklist } from "react-icons/bs";
import { VscColorMode } from "react-icons/vsc";
import { BsArrowLeftCircle } from "react-icons/bs";
import { MdOutlineAssuredWorkload } from "react-icons/md";
import NavBar from "@/components/navBar";
import ParticlesBackground from "@/components/particle/particleBackground";
import Image from "next/image";
import Footer from "@/components/footer";

export default function Item() {
  const router = useRouter();
  const { index } = router.query;

  if (typeof index === "string") {
    const item = useAppSelector((items) =>
      items.products.find((e) => e.id === parseInt(index))
    );

    if (item !== undefined)
      return (
        <div className="flex flex-col w-full h-full space-y-3 justify-center items-center">
          <NavBar />
          <div className="-z-10">
            <ParticlesBackground />
          </div>
          <div className="h-full bg-two w-[60%] rounded-xl flex flex-row justify-around p-5 items-center">
            <div className="w-1/2 h-full justify-center flex flex-col space-y-16 items-center">
              <div className="w-[70%] h-full flex flex-col space-y-4">
                <div className="flex flex-row space-x-2 justify-center items-center">
                  <p className="p-2 border text-right rounded-lg bg-black/50 border-gray w-full">
                    {item.name} : نام محصول
                  </p>
                  <MdOutlineDriveFileRenameOutline className="text-3xl" />
                </div>
                <div className="flex flex-row space-x-2 justify-center  items-center">
                  <div className="flex flex-row space-x-2 p-2 border rounded-lg bg-black/50 text-right justify-end border-gray w-full">
                    <p>تومان</p>
                    <p className="font-bold text-lg text-main">
                      {Intl.NumberFormat("fa").format(item.price)}
                    </p>
                    <p>: قیمت محصول</p>
                  </div>
                  <BsCashCoin className="text-3xl" />
                </div>
                <div className="flex flex-row space-x-2 justify-center items-center">
                  <p className="p-2 border text-right rounded-lg bg-black/50 border-gray w-full">
                    {item.creator} : سازنده محصول
                  </p>
                  <MdOutlineAssuredWorkload className="text-3xl" />
                </div>
                <div className="flex flex-row space-x-2 justify-center items-center">
                  <div className="flex flex-row space-x-2 p-2 border rounded-lg bg-black/50 text-right justify-end border-gray w-full">
                    <p>ماه</p>
                    <p className="font-bold text-lg text-main">
                      {Intl.NumberFormat("fa").format(item.warranty)}
                    </p>
                    <p>: گارانتی محصول</p>
                  </div>
                  <FaAward className="text-3xl" />
                </div>
                <div className="flex flex-row space-x-2 justify-center items-center">
                  <div className="flex flex-row space-x-2 p-2 border rounded-lg bg-black/50 text-right justify-end border-gray w-full">
                    <p className="">{item.color}</p>
                    <p>: رنگ محصول</p>
                  </div>
                  <VscColorMode className="text-3xl" />
                </div>
              </div>
              <button className="bg-main p-4 shadow-sm shadow-white rounded-xl">
                <p className="font-bold text-xl">اضافه به سبد خرید</p>
              </button>
            </div>
            <div className="w-1/2 h-full ">
              <Image
                className=" w-full"
                src={`/${item.image}.png`}
                alt="loading"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="h-full bg-two w-[60%] rounded-xl flex flex-row justify-around p-5 items-center">
            <div className="flex flex-col space-y-4 w-full h-full">
              <div className="flex flex-row space-x-3 justify-end items-center">
                <p className="text-xl font-bold">مشخصات کلی</p>
                <BsCardChecklist className="text-2xl" />
              </div>
              <div className="flex flex-col space-y-3">
                <div className="w-full flex flex-row border-[1px] p-1 border-main bg-black/50 justify-end items-center space-x-2 rounded-br-3xl text-end pr-4">
                  <p className="font-bold">مشخصات</p>
                  <BsArrowLeftCircle className="text-main" />
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-row space-x-2 pr-8">
                    <div className="w-5/6 flex flex-row p-2 bg-black/50 justify-end items-center space-x-2 text-end pr-4">
                      <p className="">{item.cpu}</p>
                    </div>
                    <div className="w-1/6 flex flex-row p-2 bg-black/50 justify-end items-center space-x-2 rounded-br-3xl text-end pr-4">
                      <p className="">نوع پردازنده</p>
                    </div>
                  </div>
                  <div className="flex flex-row space-x-2 pr-8">
                    <div className="w-5/6 flex flex-row p-2 bg-black/50 justify-end items-center space-x-2 text-end pr-4">
                      <p className="">{item.graphic}</p>
                    </div>
                    <div className="w-1/6 flex flex-row p-2 bg-black/50 justify-end items-center space-x-2 rounded-br-3xl text-end pr-4">
                      <p className="">نوع گرافیک</p>
                    </div>
                  </div>
                  <div className="flex flex-row space-x-2 pr-8">
                    <div className="w-5/6 flex flex-row p-2 bg-black/50 justify-end items-center space-x-2 text-end pr-4">
                      <p className="">{item.graphicStorage}</p>
                    </div>
                    <div className="w-1/6 flex flex-row p-2 bg-black/50 justify-end items-center space-x-2 rounded-br-3xl text-end pr-4">
                      <p className="">مقدار گرافیک</p>
                    </div>
                  </div>
                  <div className="flex flex-row space-x-2 pr-8">
                    <div className="w-5/6 flex flex-row p-2 bg-black/50 justify-end items-center space-x-2 text-end pr-4">
                      <p className="">{item.motherBoard}</p>
                    </div>
                    <div className="w-1/6 flex flex-row p-2 bg-black/50 justify-end items-center space-x-2 rounded-br-3xl text-end pr-4">
                      <p className="">نوع مادربرد</p>
                    </div>
                  </div>
                  <div className="flex flex-row space-x-2 pr-8">
                    <div className="w-5/6 flex flex-row p-2 bg-black/50 justify-end items-center space-x-2 text-end pr-4">
                      <p className="">{item.ram}</p>
                    </div>
                    <div className="w-1/6 flex flex-row p-2 bg-black/50 justify-end items-center space-x-2 rounded-br-3xl text-end pr-4">
                      <p className="">مقدار رم</p>
                    </div>
                  </div>
                  <div className="flex flex-row space-x-2 pr-8">
                    <div className="w-5/6 flex flex-row p-2 bg-black/50 justify-end items-center space-x-2 text-end pr-4">
                      <p className="">{item.ramType}</p>
                    </div>
                    <div className="w-1/6 flex flex-row p-2 bg-black/50 justify-end items-center space-x-2 rounded-br-3xl text-end pr-4">
                      <p className="">نوع رم</p>
                    </div>
                  </div>
                  <div className="flex flex-row space-x-2 pr-8">
                    <div className="w-5/6 flex flex-row p-2 bg-black/50 justify-end items-center space-x-2 text-end pr-4">
                      <p className="">{item.resolation}</p>
                    </div>
                    <div className="w-1/6 flex flex-row p-2 bg-black/50 justify-end items-center space-x-2 rounded-br-3xl text-end pr-4">
                      <p className="">رزولیشن</p>
                    </div>
                  </div>
                  <div className="flex flex-row space-x-2 pr-8">
                    <div className="w-5/6 flex flex-row p-2 bg-black/50 justify-end items-center space-x-2 text-end pr-4">
                      <p className="">{item.screen}</p>
                    </div>
                    <div className="w-1/6 flex flex-row p-2 bg-black/50 justify-end items-center space-x-2 rounded-br-3xl text-end pr-4">
                      <p className="">اندازه صفحه نمایش</p>
                    </div>
                  </div>
                  <div className="flex flex-row space-x-2 pr-8">
                    <div className="w-5/6 flex flex-row p-2 bg-black/50 justify-end items-center space-x-2 text-end pr-4">
                      <p className="">{item.storage}</p>
                    </div>
                    <div className="w-1/6 flex flex-row p-2 bg-black/50 justify-end items-center space-x-2 rounded-br-3xl text-end pr-4">
                      <p className="">نوع حافظه ذخیره سازی</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
  }
}
