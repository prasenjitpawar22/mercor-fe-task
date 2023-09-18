import {
  column,
  cube,
  hole,
  hole2,
  monster,
  phone,
  ramp,
  ramp2,
  stairs,
  stairs2,
  track,
  track2,
  tube,
} from "../svg/section-3/index";

export default function SectionThree() {
  return (
    <div className="bg-[#00D54B] relative xs:h-fit xl:min-h-[750px] p-10 text-[#FFFFFF]">
      <div className="xs:hidden overflow-hidden xl:flex">
        <img
          src={phone}
          alt="banking-phone"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute left-[27%] top-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="capitalize text-[40px] font-Agrandir text-[#FFFFFF] leading-[40px]">
            Banking
          </p>
          <p className="w-[352px] leading-[22px] tracking-[0.3px] font-Mulish text-[16px] text-[#000]">
            Receive your paycheck, tax returns, and other direct deposits up to
            two days early using your Cash App routing and account number.
          </p>
        </div>
        <img src={hole2} alt="banking-hole" className="absolute top-0 left-0" />
        <img
          src={column}
          alt="banking-hole"
          className="absolute top-32 left-8"
        />
        <img
          src={stairs2}
          alt="banking-stairs-2"
          className="absolute bottom-[3rem] left-10"
        />
        <img
          src={ramp2}
          alt="banking-ram-2"
          className="absolute bottom-3 left-[8rem]"
        />
        <img
          src={tube}
          alt="banking-tube"
          className="absolute bottom-0 left-[30rem]"
        />
        <img
          src={hole}
          alt="banking-hole"
          className="absolute bottom-0 right-[10rem]"
        />
        <img
          src={cube}
          alt="banking-cubes"
          className="absolute bottom-20 right-[10rem]"
        />
        <img
          src={ramp}
          alt="banking-ramp"
          className="absolute top-[11rem] right-[14rem]"
        />
        <img
          src={track2}
          alt="banking-track-2"
          className="absolute top-[1rem] right-[4rem]"
        />
        <img
          src={monster}
          alt="banking-monster"
          className="absolute bottom-[4rem] right-[1rem]"
        />
        <img
          src={stairs}
          alt="banking-monster"
          className="absolute bottom-[12rem] right-[5rem]"
        />
      </div>
      <div className="xs:flex flex-wrap xl:hidden">
        <div className="flex justify-between flex-wrap overflow-hidden w-full items-center">
          <div className="">
            <div>
              <p className="capitalize text-[40px] font-Agrandir text-[#FFFFFF] leading-[40px]">
                Banking
              </p>
              <p className="w-[352px] leading-[22px] tracking-[0.3px] font-Mulish text-[16px] text-[#000]">
                Receive your paycheck, tax returns, and other direct deposits up
                to two days early using your Cash App routing and account
                number.
              </p>
            </div>
          </div>
          <div className="">
            <img src={phone} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
