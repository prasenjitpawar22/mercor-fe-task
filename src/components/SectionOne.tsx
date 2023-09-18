import {
  apple,
  cube,
  cubeTwo,
  discord,
  downArrow,
  googlePlay,
  insta,
  ladder,
  phone,
  pillar,
  rays,
  twitter,
} from "../svg";

export default function SectionOne() {
  return (
    <section className="select-none xs:h-fit xl:min-h-[100vh] h-fit text-white bg-black p-10">
      <div className="xs:hidden relative  xl:flex pt-[calc(5rem+5rem)] flex-col items-center h-full justify-center">
        <>
          <img src={rays} className="absolute w-[1359.992px] h-[1359px]" />
          <img src={ladder} alt="ladder" className="absolute right-20 top-10" />
          <img
            src={cubeTwo}
            alt="cube-2"
            className="absolute left-14 bottom-8"
          />
          <img src={cube} alt="cube" className="absolute left-20 top-10" />
          <img
            src={pillar}
            alt="pillar"
            className="absolute right-20 -bottom-10"
          />
        </>
        <div className="relative mb-20 flex flex-col items-center justify-center">
          <span className="z-10 text-[193px] tracking-[0.5px] leading-[166px] font-bold uppercase">
            cash
          </span>
          <img
            className="z-20 right-12 absolute w-[370px] h-[450px]"
            src={phone}
            alt="phone"
          />
          <span className="z-50 text-[193px] tracking-[0.5px] leading-[166px] font-bold uppercase">
            app
          </span>
        </div>
        <div className="z-20 flex gap-2 w-full items-center justify-around h-full">
          <div className="flex items-center gap-4 w-1/2 h-fit">
            <button className="flex items-center bg-black gap-3 border border-white rounded px-3 py-2 uppercase font-Agrandir text-[12px] leading-[18px] tracking-[.5px] ">
              <img src={apple} /> App store
            </button>
            <button className="flex items-center bg-black gap-3 border border-white rounded px-3 py-2 uppercase font-Agrandir text-[12px] leading-[18px] tracking-[.5px] ">
              <img src={googlePlay} /> Google play
            </button>
          </div>
          <div className="h-fit">
            <img src={downArrow} alt="down" className="cursor-pointer" />
          </div>
          <div className="w-1/2 justify-end gap-4 flex items-center ">
            <p className="w-[300px] text-[10px] font-Mulish leading-[13px] text-[#B6B6B6]">
              Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
              See our BrokerCheck. Investing involves risk; you may lose money.
              Bitcoin trading offered by Cash App. Cash App Investing does not
              trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
              App facilitates banking services through Sutton Bank and Lincoln
              Savings Bank, Members FDIC.
            </p>
            <img src={discord} alt="discord" />
            <img src={twitter} alt="twitter" />
            <img src={insta} alt="instagram" />
          </div>
        </div>
      </div>

      <div className="xl:hidden pt-12 overflow-hidden xs:flex gap-4 justify-between items-center   ">
        <div className="flex relative">
          <img className="xs:hidden" src={phone} />{" "}
        </div>
        <div className="flex gap-3 flex-col items-start justify-start ">
          <span className="z-10 xs:text-[40px] xl:text-[70px] tracking-[0.5px] leading-[4rem] font-bold uppercase">
            cash app
          </span>
          <p className="xs:w-fit xl:w-[300px] text-[10px] font-Mulish leading-[.8rem] text-[#B6B6B6]">
            Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
            See our BrokerCheck. Investing involves risk; you may lose money.
            Bitcoin trading offered by Cash App. Cash App Investing does not
            trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
            App facilitates banking services through Sutton Bank and Lincoln
            Savings Bank, Members FDIC.
          </p>
          <div className="flex gap-2">
            <button className="flex transition-all hover:bg-white hover:text-black duration-1000 items-center bg-black gap-3 border border-white rounded px-3 py-2 uppercase font-Agrandir xs:text-[10px] xs:leading-3 xl:text-[12px] leading-[18px] tracking-[.5px] ">
              <img src={apple} /> App store
            </button>
            <button className="flex transition-all hover:bg-white hover:text-black duration-1000 items-center bg-black gap-3 border border-white rounded px-3 py-2 uppercase font-Agrandir xs:text-[10px] xs:leading-3 xl:text-[12px] leading-[18px] tracking-[.5px] ">
              <img src={googlePlay} /> Google play
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
