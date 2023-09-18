import {
  barCodePhone,
  pillar1Section2,
  pillar2Section2,
  pillar3Section2,
  pillar4Section2,
  pillar5Section2,
  pillar6Section2,
  pillar7Section2,
  pillar8Section2,
  pillar9Section2,
} from "../svg/section-2";

export default function SectionTwo() {
  return (
    <section className="xs:h-fit xl:min-h-[110vh] relative bg-[#F8F6F6] overflow-hidden p-10">
      <div className="h-full xl:flex xs:hidden">
        <img
          src={barCodePhone}
          alt="bar-code-phone"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute left-[27%] top-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="capitalize text-[40px] font-Agrandir text-[#00D54B] leading-[40px]">
            payments
          </p>
          <p className="w-[352px] leading-[22px] tracking-[0.3px] font-Mulish text-[16px] text-[#000]">
            Send and receive money with anyone, donate to an important cause, or
            tip professionals. Just enter a $cashtag, phone number, or scan
            their QR code to pay.
          </p>
        </div>

        <img
          src={pillar1Section2}
          alt="2nd-pillar"
          className="absolute bottom-2 left-[8rem] z-10 h-[30%]"
        />
        <img
          src={pillar3Section2}
          alt="3rd-pillar"
          className="bottom-[3rem] left-[13rem] absolute"
        />
        <img
          src={pillar2Section2}
          alt="4th-last-pillar"
          className="bottom-[2rem] right-[29rem] z-10 absolute"
        />
        <img
          src={pillar6Section2}
          alt="5th-pillar"
          className="-bottom-[3rem] right-[30rem] z-10 absolute"
        />
        <img
          src={pillar7Section2}
          alt="2nd-last-pillar"
          className="absolute z-10 right-[12rem] bottom-20"
        />
        <img
          src={pillar8Section2}
          alt="1st-pillar"
          className="absolute z-10 bottom-0 left-0 h-2/4"
        />
        <img
          src={pillar9Section2}
          alt="3rd-last-pillar"
          className="bottom-0 absolute h-1/2 right-[15rem] z-10 "
        />
        <img
          src={pillar5Section2}
          alt="last-pillar"
          className="absolute -right-4 bottom-0 w-1/2"
        />
        <img
          src={pillar4Section2}
          alt="4th-pillar"
          className="absolute bottom-0 z-10 h-1/3 right-[40rem]"
        />
      </div>
      <div className="xs:flex flex-wrap overflow-hidden justify-center items-center xl:hidden ">
        <div className="flex flex-wrap justify-between w-full gap-4 items-center">
          <div>
            <img src={barCodePhone} />
          </div>
          <div>
            <div className="">
              <p className="capitalize text-[40px] font-Agrandir text-[#00D54B] leading-[40px]">
                payments
              </p>
              <p className="w-[352px] leading-[22px] tracking-[0.3px] font-Mulish text-[16px] text-[#000]">
                Send and receive money with anyone, donate to an important
                cause, or tip professionals. Just enter a $cashtag, phone
                number, or scan their QR code to pay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
