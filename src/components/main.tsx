"use client";
import img from "next/image";
import { BsLaptop } from "react-icons/bs";
import ParticlesBackground from "@/components/particle/particleBackground";
import { useRouter } from "next/router";

export default function MainPage() {
  const router = useRouter();
  return (
    <div className="w-full h-full px-48 flex flex-col space-y-24">
      <div className="-z-10">
        <ParticlesBackground />
      </div>
      <div className="flex flex-row space-x-4 items-center mt-10">
        <div className="flex flex-col space-y-8">
          <div className="text-main font-bold text-5xl flex justify-end">
            خرید کامپیوتر
          </div>
          <p className=" flex  h-full justify-end text-right">
            به دنبال خرید پیسی یا کامپیوتر با کانفیگ مورد نظر خودت هستی و یا
            اینکه انتخاب قطعات در کنار هم برات دشواره؟ کافیه به فروشگاه بی نظیر
            کامپیوتر های اسمبل شده پیسی کالا سر بزنی. تنوع فوق العاده در انتخاب
            بر اساس نوع کاربری .از کامپیوتر های گیمینگ مخصوص گیمر های دوست
            داشتنی گرفتع تا کامپیوتر های مخصوص فعالیت های خانگی و دانش آموزی.
            قدرت ما در انتخاب مناسب ترین قطعات به همراه ضمانت و قیمت فوق العاده
            می باشد . کافیه به فروشگاه کامپیوتر ما یه سری بزنی
          </p>
          <div className="flex justify-end">
            <button
              onClick={() => router.push("/pc")}
              className="bg-main w-fit shadow-sm shadow-white p-3 rounded-xl flex flex-row justify-center items-center space-x-3"
            >
              <p> قیمت و خرید کامپیوتر</p>
              <BsLaptop className="text-xl" />
            </button>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="flex justify-end font-bold text-2xl ">
              محبوب ترین دسته بندی ها
            </p>
            <div className="flex flex-row space-x-3 justify-end">
              <button
                onClick={() => router.push("/listItem/دانش جویی")}
                className="p-2 bg-main font-bold rounded-md shadow-sm shadow-white"
              >
                کامپیوتر دانشجویی
              </button>
              <button
                onClick={() => router.push("/listItem/گیمینگ")}
                className="p-2 bg-main font-bold rounded-md shadow-sm shadow-white"
              >
                کیس گیمینگ
              </button>
              <button
                onClick={() => router.push("/listItem/رندرینگ")}
                className="p-2 bg-main font-bold rounded-md shadow-sm shadow-white"
              >
                سیستم رندرینگ
              </button>
            </div>
          </div>
        </div>
        <img src={"/main7.png"} alt="Loading..." width={600} height={600} />
      </div>
      <div className="flex flex-row space-x-4 items-center">
        <img src={"/lap3.png"} alt="Loading..." width={600} height={600} />
        <div className="flex flex-col space-y-8">
          <div className="text-main font-bold text-5xl flex justify-end">
            خرید انواع لپ تاپ
          </div>
          <p className=" flex  h-full text-right">
            خرید انواع برند های لپ تاپ با بهترین قیمت روز بازار ایران در سایت
            سامیر کالا, تنوع بی نظیر در انواع مدلها و سری های بازار با انواع
            کانفیگ های مورد نیاز کابران که در هیچوب سایت دیگری یافت نخواهد کرد .
            هر نوع کانفیگ از حافظه رم متنوع تا حافظه ذخیره سازی گرافیک و صفحه
            نمایش برای تمام سری های محبوب لپ تاپ های روز دنیا در سایت سامیر کالا
            موجود می باشد. هر نیازی که درخصوص خرید لپ تاپ دارید بی تردید در سایت
            ما با بهترین قیمت به دست خواهید اورد
          </p>
          <div className="flex justify-end">
            <button
              onClick={() => router.push("/laptop")}
              className="bg-main w-fit shadow-sm shadow-white p-3 rounded-xl flex flex-row justify-center items-center space-x-3"
            >
              <p> قیمت و خرید لپ تاپ</p>
              <BsLaptop className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-4 items-center mt-10">
        <div className="flex flex-col space-y-8">
          <div className="text-main font-bold text-5xl flex justify-end">
            خرید انواع قطعات و لوازم جانبی
          </div>
          <p className=" flex  h-full justify-end text-right">
            خرید انواع قطعات کامپیوتر و لوازم جانبی آن مانند کارت گرافیک پردازه
            حافظه رم حافظه ذخیره سازی منبع تغدیه کیس و... تمامی قطعات در سایت
            سامر کالا دارای گارانتی می باشد . از مهمترین ویژگی های محصولات ما
            قیمت فوق العاده به نسبت بازار ایران است . بنابراین با خیال راحت می
            توانید هر قعطه ای را که نیاز داشتید در بین تنوع بسیار بالای فروشگاه
            قطعات ما بیابید و خریداری کنید
          </p>
          <div className="flex justify-end">
            <button
              onClick={() => router.push("/access")}
              className="bg-main w-fit shadow-sm shadow-white p-3 rounded-xl flex flex-row justify-center items-center space-x-3"
            >
              <p>قیمت قطعات و لوازم جانبی</p>
              <BsLaptop className="text-xl" />
            </button>
          </div>
        </div>
        <img src={"/game2.png"} alt="Loading..." width={600} height={600} />
      </div>
      <div className="flex flex-col space-y-8 justify-center items-center">
        <div className="text-main font-bold text-5xl flex justify-center">
          برترین متخصصین کشور
        </div>
        <p className="flex w-1/2 h-full justify-end text-center">
          برترین متخصصین را گرد هم اوردیم تا بهترین ها را برای شما به ارمغان
          آوریم . وب سایت پی سی کالا که یکی از زیر مجموعه های گروه مهندسی سامر
          میباشد . متشکل از برترین کارشناسان حوزه تکنولوژی و فروش از بین جوانان
          میهمان می باشد. هدف ما در این رقابت قدرت کسب رضایت حداکثری شما مشتریان
          گرامی است. هر روز و هر لحظه به دنبال خلق ایده نو و خدمات با بهترین
          کیفیت به شما هستیم
        </p>
        <div className="flex flex-row -space-x-36">
          <img src={"/parche.png"} alt="Loading..." width={300} height={300} />
          <div className="flex flex-col space-y-6">
            <p className="font-bold text-xl text-right">تماس با ما</p>
            <p className="font-bold text-2xl text-right text-main">
              سریعترین راه ارتباطی
            </p>
            <p className="font-bold text-4xl text-right">0 9 1 0 7 7 4 2 1 6</p>
            <p className="font-bold text-2xl text-right text-main">
              0 4 5 3 3 3 5 1 7 8 3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
