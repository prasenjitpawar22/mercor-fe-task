import {
  phone,
  burger,
  card,
  coffee,
  hand,
  stairs,
  stairs2,
  shoe,
} from "../svg/section-4/index";

export default function SectionFour() {
  return (
    <div className="xs:h-fit xl:min-h-[750px] bg-black relative p-10">
      <div className="xl:flex xs:hidden">
        <img
          src={phone}
          alt=""
          className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute left-[27%] top-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="capitalize w-[335px] text-[40px] font-Agrandir text-[#00D54B] leading-[40px]">
            Cash Card & Boost
          </p>
          <p className="w-[352px] leading-[22px] tracking-[0.3px] font-Mulish text-[16px] text-[#FFF]">
            The Cash Card is a free, customizable debit card that lets you pay
            online and in stores. It’s the only way to get Boosts—instant
            discounts that work at places where you want to spend.
          </p>
        </div>
        <img
          src={burger}
          alt=""
          className="absolute top-[24.3rem] z-10 right-[26rem] "
        />
        <img
          src={card}
          alt=""
          className="absolute top-[13rem] z-10 right-[19rem] "
        />
        <img
          src={coffee}
          alt=""
          className="absolute bottom-[7rem] z-10 right-[19.5rem] "
        />
        <img
          src={shoe}
          alt=""
          className="absolute bottom-[16.5rem] z-10 right-[1.5rem] "
        />
        <img
          src={hand}
          alt=""
          className="absolute top-[6rem] z-10 right-[13rem] "
        />
        <img src={stairs2} alt="" className="absolute left-0 bottom-0" />
        <img src={stairs} alt="" className="absolute right-0 top-0" />
      </div>
      <div className="xs:flex flex-wrap overflow-hidden xl:hidden justify-center items-center">
        <div className="flex-wrap flex justify-between w-full gap-4 items-center">
          <div>
            <img src={phone} />
          </div>
          <div>
            <p className="capitalize w-[335px] text-[40px] font-Agrandir text-[#00D54B] leading-[40px]">
              Cash Card & Boost
            </p>
            <p className="w-[352px] leading-[22px] tracking-[0.3px] font-Mulish text-[16px] text-[#FFF]">
              The Cash Card is a free, customizable debit card that lets you pay
              online and in stores. It’s the only way to get Boosts—instant
              discounts that work at places where you want to spend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
