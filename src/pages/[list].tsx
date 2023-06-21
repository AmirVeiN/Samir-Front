"use client";
import { useRouter } from "next/router";
import { useAppSelector } from "../../store/hooks";
import NavBar from "@/components/navBar";
import ParticlesBackground from "@/components/particle/particleBackground";
import Image from "next/image";
import { RiComputerLine } from "react-icons/ri";
import { RiCpuLine } from "react-icons/ri";
import { BsMotherboardFill } from "react-icons/bs";
import Footer from "@/components/footer";

export function ComponentItems(props: {
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
      className="h-96 justify-around border-t-2 rounded-md border-main items-center w-[23rem] flex flex-col bg-two"
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

export default function Lists() {
  const router = useRouter();
  const { list } = router.query;
  const items = useAppSelector((items) =>
    items.products.filter((e) => e.type === list)
  );

  return (
    <div className="flex flex-col w-full h-full space-y-3 justify-center items-center">
      <NavBar />
      <div className="-z-10">
        <ParticlesBackground />
      </div>
      <div className="grid grid-cols-4 gap-y-6 w-[80%]">
        {items.map((e) => (
          <ComponentItems
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
      <Footer />
    </div>
  );
}
