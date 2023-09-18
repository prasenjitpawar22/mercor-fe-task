import { apple, discord, googlePlay, insta, twitter } from "../svg";
import {
  darkDiscord,
  darkInsta,
  darTwitter,
  i,
  investingGrap,
  phone,
  phone2,
  rays,
} from "../svg/section-5/index";

export default function SectionFive() {
  return (
    <div className="xs:fit xl:min-h-[750px] flex items-center justify-center bg-[#00D54B] p-10 relative">
      <div className="xs:hidden xl:flex items-center justify-center">
        <img src={rays} alt="" className="absolute" />
        <div className="absolute flex-col items-center justify-center flex gap-12 ">
          <p className="capitalize text-center text-[40px] font-Agrandir text-[#FFF] leading-[40px]">
            Investing
          </p>
          <div className="flex gap-20">
            <div className="flex gap-10">
              <div className="flex flex-col">
                <p className="capitalize text-[22px] font-Agrandir text-[#000] leading-[40px]">
                  Stocks
                </p>
                <p className="w-[352px] leading-[22px] tracking-[0.3px] font-Mulish text-[16px] text-[#000]">
                  Whether you’re an expert or just getting started, Cash App is
                  the fastest and most accessible way to invest in stocks. Start
                  now with as little as $1.
                </p>
              </div>
              <img src={phone} alt="phone" className="z-20" />
            </div>
            <div className="flex gap-10">
              <img src={phone2} alt="phone2" className="z-20" />
              <div className="flex flex-col">
                <p className="capitalize text-[22px] font-Agrandir text-[#000] leading-[40px]">
                  Bitcoin
                </p>
                <p className="w-[352px] leading-[22px] tracking-[0.3px] font-Mulish text-[16px] text-[#000]">
                  Cash App is the fastest way to convert dollars to bitcoin.
                  From your home screen, six taps are all it takes to stack
                  sats, buy an entire bitcoin, or just see what it’s all about.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-3 left-10 flex items-center gap-4 w-1/2 h-fit z-20">
          <button className="flex items-center bg-[#FFF] gap-3 border border-[#000] rounded-[7px] px-3 py-2 uppercase font-Agrandir text-[12px] leading-[18px] tracking-[.5px] ">
            <img src={apple} /> App store
          </button>
          <button className="flex items-center  bg-[#FFF] gap-3 border border-[#000] rounded-[7px] px-3 py-2 uppercase font-Agrandir text-[12px] leading-[18px] tracking-[.5px] ">
            <img src={googlePlay} /> Google play
          </button>
        </div>
        <div className="absolute right-20 bottom-3 z-20">
          <div className="justify-end gap-4 flex items-center ">
            <p className="w-[300px] text-[10px] font-Mulish leading-[13px] text-[#606060]">
              Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
              See our BrokerCheck. Investing involves risk; you may lose money.
              Bitcoin trading offered by Cash App. Cash App Investing does not
              trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
              App facilitates banking services through Sutton Bank and Lincoln
              Savings Bank, Members FDIC.
            </p>
            <img src={darkDiscord} alt="discord" />
            <img src={darTwitter} alt="twitter" />
            <img src={darkInsta} alt="instagram" />
          </div>
        </div>
        <img src={i} alt="" className="absolute bottom-0 w-full left-0 z-10" />
        <img
          src={investingGrap}
          alt=""
          className="absolute bottom-3 left-0 z-10"
        />
      </div>
      <div className="xs:flex flex-wrap overflow-hidden xl:hidden justify-center items-center w-full">
        <div className="flex justify-between flex-wrap w-full gap-4">
          <div className="flex">
            <img src={phone} className="w-36" alt="" />
            <img src={phone2} className="w-36" alt="" />
          </div>
          <div className="flex flex-wrap flex-col justify-center items-center w-full">
            <div className="flex flex-col">
              <p className="capitalize text-[22px] font-Agrandir text-[#000] leading-[40px]">
                Stocks
              </p>
              <p className="w-[352px] leading-[22px] tracking-[0.3px] font-Mulish text-[16px] text-[#000]">
                Whether you’re an expert or just getting started, Cash App is
                the fastest and most accessible way to invest in stocks. Start
                now with as little as $1.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="capitalize text-[22px] font-Agrandir text-[#000] leading-[40px]">
                Bitcoin
              </p>
              <p className="w-[352px] leading-[22px] tracking-[0.3px] font-Mulish text-[16px] text-[#000]">
                Cash App is the fastest way to convert dollars to bitcoin. From
                your home screen, six taps are all it takes to stack sats, buy
                an entire bitcoin, or just see what it’s all about.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
