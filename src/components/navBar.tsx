"use client";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { CgPhone } from "react-icons/cg";
import { BsFire } from "react-icons/bs";
import { BsLaptop } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { FiLayers } from "react-icons/fi";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "../../store/hooks";
import { RiCpuLine } from "react-icons/ri";
import { BsMotherboardFill } from "react-icons/bs";

export function ItemsC(props: {
  image: string;
  id: number;
  price: number;
  name: string;
  cpu: string;
  creator: string;
  ram: number;
  ssd: string;
  screen: any;
}) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/items/${props.id}`)}
      className="justify-around border-t-2 h-96  rounded-md border-main items-center w-[23rem] flex flex-col bg-two"
    >
      <div>
        <Image src={`/${props.image}.png`} alt="" width={200} height={200} />
      </div>
      <div className="flex justify-center items-center flex-row space-x-1">
        <p>تومان</p>
        <p className="text-main font-bold text-xl">
          {Intl.NumberFormat("fa").format(props.price)}
        </p>
      </div>
      <div className="">{props.name}</div>
      <div className="flex flex-row space-x-2">
        <div className="bg-black w-16 h-16 justify-center space-y-1 items-center flex flex-col">
          <RiComputerLine className="text-xl" />
          <p className="text-xs">{props.screen}</p>
        </div>
        <div className="bg-black w-16 h-16 justify-center space-y-1 items-center flex flex-col">
          <RiCpuLine className="text-xl" />
          <p className="text-xs">{props.cpu}</p>
        </div>
        <div className="bg-black w-16 h-16 justify-center space-y-1 space-y-31 items-center flex flex-col">
          <BsMotherboardFill className="text-xl" />
          <p className="text-sm">{props.creator}</p>
        </div>
        <div className="bg-black w-16 h-16 justify-center space-y-1 items-center flex flex-col">
          <BsMotherboardFill className="text-xl" />
          <p className="text-base">{props.ram}</p>
        </div>
        <div className="bg-black w-16 h-16 justify-center space-y-1 items-center flex flex-col">
          <BsMotherboardFill className="text-xl" />
          <p className="text-sm">{props.ssd}</p>
        </div>
      </div>
    </button>
  );
}

export default function NavBar() {
  const router = useRouter();
  const [search, searchHandler] = useState("");
  const searchItems = (searchValue: string) => {
    searchHandler(searchValue);
  };

  const itemsSearch = useAppSelector((items) =>
    items.products.filter((e) => e.name.includes(search.toLocaleLowerCase()))
  );

  return (
    <div className="bg-two w-full flex justify-center items-center h-24">
      <div className="h-full w-[80%] flex flex-col">
        <div className=" w-full h-1/2 flex flex-row">
          <div className="w-[45%] h-full flex flex-row ">
            <div className=" h-full w-1/5 flex flex-row justify-center space-x-4 items-center">
              <div className="text-2xl bg-gray p-1.5 rounded-md">
                <FaShoppingCart />
              </div>
              <div className="text-3xl bg-gray p-1 rounded-md">
                <MdManageAccounts />
              </div>
            </div>
            <div className="h-full flex flex-row justify-center items-center space-x-2 w-1/3">
              <div className=" text-3xl text-main">
                <CgPhone />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <p className="text-main text-sm">02188951380</p>
                <p className="text-sm">02188951384</p>
              </div>
            </div>
            <div className=" h-full w-1/2 p-2 flex justify-end items-center">
              <div className="rounded-md w-full h-full flex flex-row space-x-1 justify-end items-center">
                <input
                  type="text"
                  className="bg-gray peer rounded-xl text-center font-iranSans w-full h-full"
                  value={search}
                  placeholder="...محصول مورد نظر خود را بیابید"
                  onChange={(e) => searchItems(e.target.value)}
                />
                <div className="text-white bg-gray rounded-xl p-1 text-2xl">
                  <AiOutlineSearch />
                </div>
                <div className="hidden peer-focus:flex focus:flex absolute inset-14 left-96  flex-row h-96 p-5 w-1/4 border justify-center items-center border-main border-t-4 border-r-0 border-l-0 border-b-0 bg-two rounded-xl drop-shadow-lg">
                  <div className="flex flex-col space-y-10 pt-10 overflow-y-scroll h-full w-full justify-center items-center">
                    {itemsSearch.map((e) => (
                      <ItemsC
                        image={e.image}
                        id={e.id}
                        name={e.name}
                        price={e.price}
                        screen={e.screen || e.motherBoard}
                        ram={e.ram}
                        creator={e.creator}
                        cpu={e.cpu}
                        ssd={e.storage}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => router.push("/")}
            className="w-[55%] h-full justify-end flex"
          >
            <img src="/logo2.png" alt="Loading.." width={200} height={200} />
          </button>
        </div>
        <div className=" w-full h-1/2 relative">
          <div className="flex w-full h-full flex-row justify-end items-center space-x-5">
            <div className="flex flex-col justify-end">
              <button
                onClick={() => router.push("/access")}
                className="peer py-3 flex-row text-white  flex space-x-1 justify-end items-center "
              >
                <p className="font-bold">قطعات کامپیوتر</p>
                <FiLayers className="text-xl" />
              </button>
              <div className="hidden peer-hover:flex hover:flex absolute inset-12 left-0 flex-row h-96 p-5 w-full border justify-center items-center border-main border-t-4 border-r-0 border-l-0 border-b-0 bg-two rounded-xl drop-shadow-lg">
                <div className="h-full w-1/3">
                  <Image
                    src={"/mb.png"}
                    alt="Loading..."
                    width={400}
                    height={400}
                  />
                </div>
                <div className="h-full w-2/3 flex flex-row space-x-3 justify-center items-start ">
                  <div className="h-full w-1/2 flex flex-col space-y-6">
                    <div className="flex space-y-2 w-full flex-col">
                      <button
                        onClick={() => router.push("/listItem/مادربرد")}
                        className="flex flex-row justify-end items-center rounded-md hover:text-main hover:border-main space-x-3 border-b-2 py-2 border-gray-400 w-full"
                      >
                        <p>مادربرد</p>
                        <AiOutlineCaretLeft className="text-main" />
                      </button>
                      <button
                        onClick={() => router.push("/listItem/پردازنده")}
                        className="flex flex-row justify-end items-center rounded-md hover:text-main hover:border-main space-x-3 border-b-2 py-2 border-gray-400 w-full"
                      >
                        <p>پردازنده</p>
                        <AiOutlineCaretLeft className="text-main" />
                      </button>
                      <button
                        onClick={() => router.push("/listItem/گرافیک")}
                        className="flex flex-row justify-end items-center rounded-md hover:text-main hover:border-main space-x-3 border-b-2 py-2 border-gray-400 w-full"
                      >
                        <p>گرافیک</p>
                        <AiOutlineCaretLeft className="text-main" />
                      </button>
                    </div>
                  </div>
                  <div className="h-full w-1/2 flex flex-col space-y-6">
                    <button
                      onClick={() => router.push("/access")}
                      className="flex items-end space-y-2 w-full flex-col"
                    >
                      <p className="font-bold text-main">قطعات کامپیوتر</p>
                    </button>
                    <div className="flex space-y-2 w-full flex-col">
                      <button
                        onClick={() => router.push("/listItem/رم")}
                        className="flex flex-row justify-end items-center rounded-md hover:text-main hover:border-main space-x-3 border-b-2 py-2 border-gray-400 w-full"
                      >
                        <p>حافظه رم</p>
                        <AiOutlineCaretLeft className="text-main" />
                      </button>
                      <button
                        onClick={() => router.push("/listItem/خنک کننده")}
                        className="flex flex-row justify-end items-center rounded-md hover:text-main hover:border-main space-x-3 border-b-2 py-2 border-gray-400 w-full"
                      >
                        <p>خنک کننده</p>
                        <AiOutlineCaretLeft className="text-main" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <button
                onClick={() => router.push("/pc")}
                className="peer py-3 flex-row text-white  flex space-x-1 justify-end items-center "
              >
                <p className="font-bold">قیمت کامپیوتر</p>
                <RiComputerLine className="text-xl" />
              </button>
              <div className="hidden peer-hover:flex hover:flex absolute inset-12 left-0 flex-row h-96 p-5 w-full border justify-center items-center border-main border-t-4 border-r-0 border-l-0 border-b-0 bg-two rounded-xl drop-shadow-lg">
                <div className="h-full w-1/3">
                  <Image
                    src={"/pc5.png"}
                    alt="Loading..."
                    width={400}
                    height={400}
                  />
                </div>
                <div className="h-full w-2/3 flex flex-row space-x-3 justify-center items-start ">
                  <div className="h-full w-1/2 flex flex-col space-y-6">
                    <button
                      onClick={() => router.push("/pc")}
                      className="flex items-end space-y-2 w-full flex-col"
                    >
                      <p className="font-bold">
                        قیمت و خرید کامپیوتر های پر فروش
                      </p>
                    </button>
                    <div className="flex space-y-2 w-full flex-col">
                      <button className="flex flex-row justify-end items-center rounded-md hover:text-main hover:border-main space-x-3 border-b-2 py-2 border-gray-400 w-full">
                        <p onClick={() => router.push("/listItem/خانگی")}>
                          سیستم خانگی
                        </p>
                        <AiOutlineCaretLeft className="text-main" />
                      </button>
                      <button
                        onClick={() => router.push("/listItem/تریدینگ")}
                        className="flex flex-row justify-end items-center rounded-md hover:text-main hover:border-main space-x-3 border-b-2 py-2 border-gray-400 w-full"
                      >
                        <p>سیستم تریدینگ</p>
                        <AiOutlineCaretLeft className="text-main" />
                      </button>
                      <button
                        onClick={() => router.push("/listItem/دانش آموزی")}
                        className="flex flex-row justify-end items-center rounded-md hover:text-main hover:border-main space-x-3 border-b-2 py-2 border-gray-400 w-full"
                      >
                        <p>سیستم دانش آموزی</p>
                        <AiOutlineCaretLeft className="text-main" />
                      </button>
                      <button
                        onClick={() => router.push("/listItem/دانش جویی")}
                        className="flex flex-row justify-end items-center rounded-md hover:text-main hover:border-main space-x-3 border-b-2 py-2 border-gray-400 w-full"
                      >
                        <p>سیستم دانش جویی</p>
                        <AiOutlineCaretLeft className="text-main" />
                      </button>
                    </div>
                  </div>
                  <div className="h-full w-1/2 flex flex-col space-y-6">
                    <button
                      onClick={() => router.push("/pc")}
                      className="flex items-end space-y-2 w-full flex-col"
                    >
                      <p className="font-bold">قیمت و خرید کامپیوتر</p>
                    </button>
                    <div className="flex space-y-2 w-full flex-col">
                      <button
                        onClick={() => router.push("/listItem/رندرینگ")}
                        className="flex flex-row justify-end items-center rounded-md hover:text-main hover:border-main space-x-3 border-b-2 py-2 border-gray-400 w-full"
                      >
                        <p>سیستم رندرینگ</p>
                        <AiOutlineCaretLeft className="text-main" />
                      </button>
                      <button
                        onClick={() => router.push("/listItem/گیمینگ")}
                        className="flex flex-row justify-end items-center rounded-md hover:text-main hover:border-main space-x-3 border-b-2 py-2 border-gray-400 w-full"
                      >
                        <p>کیس گیمینگ</p>
                        <AiOutlineCaretLeft className="text-main" />
                      </button>
                      <button
                        onClick={() => router.push("/listItem/اداری")}
                        className="flex flex-row justify-end items-center rounded-md hover:text-main hover:border-main space-x-3 border-b-2 py-2 border-gray-400 w-full"
                      >
                        <p>سیستم اداری</p>
                        <AiOutlineCaretLeft className="text-main" />
                      </button>
                      <button
                        onClick={() => router.push("/listItem/حسابداری")}
                        className="flex flex-row justify-end items-center rounded-md hover:text-main hover:border-main space-x-3 border-b-2 py-2 border-gray-400 w-full"
                      >
                        <p>سیستم حسابداری</p>
                        <AiOutlineCaretLeft className="text-main" />
                      </button>
                      <button
                        onClick={() => router.push("/listItem/طراحی")}
                        className="flex flex-row justify-end items-center rounded-md hover:text-main hover:border-main space-x-3 border-b-2 py-2 border-gray-400 w-full"
                      >
                        <p>سیستم طراحی و مهندسی</p>
                        <AiOutlineCaretLeft className="text-main" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <button
                onClick={() => router.push("/laptop")}
                className="peer py-3 flex-row text-white  flex space-x-1 justify-end items-center "
              >
                <p className="font-bold">قیمت لپ تاپ</p>
                <BsLaptop className="text-xl" />
              </button>
              <div className="hidden peer-hover:flex hover:flex absolute inset-12 left-0 flex-row h-96 p-5 w-full border justify-center items-center border-main border-t-4 border-r-0 border-l-0 border-b-0 bg-two rounded-xl drop-shadow-lg">
                <div className="h-full w-1/3">
                  <Image
                    src={"/laptap3.png"}
                    alt="Loading..."
                    width={400}
                    height={400}
                  />
                </div>
                <div className="h-full w-2/3 flex flex-row space-x-3 justify-center items-start ">
                  <div className="h-full w-1/2 flex flex-col space-y-6">
                    <div className="flex items-end space-y-2 w-full flex-col">
                      <p className="text-main font-bold">
                        قیمت و خرید لپ تاپ های پر فروش
                      </p>
                      <p className="font-bold">قیمت و خرید لپ تاپ ایسوس</p>
                    </div>
                    <div className="flex space-y-2 w-full flex-col">
                      <button
                        onClick={() => router.push("/listItem/ایسوس")}
                        className="flex flex-row justify-end items-center rounded-md hover:text-main hover:border-main space-x-3 border-b-2 py-2 border-gray-400 w-full"
                      >
                        <p>VivoBook لپ تاپ ایسوس</p>
                        <AiOutlineCaretLeft className="text-main" />
                      </button>
                      <button
                        onClick={() => router.push("/listItem/ایسوس")}
                        className="flex flex-row justify-end items-center rounded-md hover:text-main hover:border-main space-x-3 border-b-2 py-2 border-gray-400 w-full"
                      >
                        <p>TUF Gaming 15 لپ تاپ ایسوس</p>
                        <AiOutlineCaretLeft className="text-main" />
                      </button>
                    </div>
                  </div>
                  <div className="h-full w-1/2 flex flex-col space-y-6">
                    <div className="flex items-end space-y-2 w-full flex-col">
                      <p className="text-main font-bold">قیمت و خرید لپ تاپ</p>
                      <p className="font-bold">قیمت و خرید لپ تاپ لنوو</p>
                    </div>
                    <div className="flex space-y-2 w-full flex-col">
                      <button
                        onClick={() => router.push("/listItem/لنوو")}
                        className="flex flex-row justify-end items-center rounded-md hover:text-main hover:border-main space-x-3 border-b-2 py-2 border-gray-400 w-full"
                      >
                        <p>IdeaPad 3 لپ تاپ لنوو</p>
                        <AiOutlineCaretLeft className="text-main" />
                      </button>
                      <button
                        onClick={() => router.push("/listItem/لنوو")}
                        className="flex flex-row justify-end items-center rounded-md hover:text-main hover:border-main space-x-3 border-b-2 py-2 border-gray-400 w-full"
                      >
                        <p>IdeaPad Gaming 3 لپ تاپ لنوو</p>
                        <AiOutlineCaretLeft className="text-main" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="py-3 flex-row text-main flex space-x-1 justify-end items-center ">
              <p className="font-iranSans font-bold">تخفیفات ویژه</p>
              <BsFire className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
