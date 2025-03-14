"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = theme === "dark";
  return (
    <div
      className={`md:h-[912px] h-[710px] mt-[70px] p-4 relative rounded-[35px] border overflow-hidden ${
        isDarkMode
          ? "border-gray-700  text-white"
          : "border-[#E6E6E6] text-black"
      }`}
      style={{ opacity: 1, transform: "none" }}
    >
      <BackgroundGrid isDarkMode={isDarkMode} />
      <FloatingElements />
      <ContentSection />
    </div>
  );
};

const BackgroundGrid = ({ isDarkMode }: { isDarkMode: Boolean }) => (
  <div
    className="absolute -z-20 top-0 left-0 w-full h-full"
    style={{
      backgroundImage: `radial-gradient(circle, ${isDarkMode ? "#3f3f46" : "#e6e6e6"} 1px, transparent 1px)`,
      backgroundSize: "10px 10px"
    }}
  />
);
const AnimatedCard = ({
  children,
  className
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, scale: 0.8, rotate: -19 }}
    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -19 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
  );
};
const FloatingElements = () => {
  const { scrollYProgress } = useScroll();
  const lightningScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const lightningRotate = useTransform(scrollYProgress, [0, 0.5], [0, 15]);
  return (
    <>
      <LightningIcon className="absolute -z-10 md:top-24 md:left-36 top-4 left-4 rotate-[-15.11deg]" />
      <LightningIcon className="absolute -z-10 md:bottom-80 md:right-96 bottom-64 right-11 rotate-[14deg]" />
        <CalendarCard className="absolute -z-10 md:bottom-52 bottom-36 md:-left-5 -left-14 rotate-[12deg] hidden md:block"/>
      <SocialMediaIntegration className="absolute -z-10 md:-bottom-40 -bottom-36 md:-left-20 -left-32 rotate-[20deg]" />
      <AnimatedCard className="absolute -z-10 md:-bottom-16 md:right-72 -bottom-20 right-16 rotate-[-19deg]">
        <CalendarCard />
      </AnimatedCard>
      <InterviewCards className="absolute -z-10 md:-bottom-36 md:-right-10 -bottom-36 -right-48 rotate-[-12deg]" />
    </>
  );
};

const LightningIcon = ({ className }: { className: string }) => (
  <div className={className}>
    <div style={{ opacity: 1, transform: "scale(1) rotate(0deg)" }}>
      <div
        style={{
          background:
            "linear-gradient(147.09deg, #fbfbfb 9.63%, #e8e8e8 91.74%)"
        }}
        className="size-16 md:size-20 lg:size-28 flex items-center justify-center rounded-xl lg:rounded-3xl border border-[#f3f3f3] shadow-[0px_5px_11px_0px_rgba(0,0,0,0.1),0px_20px_20px_0px_rgba(0,0,0,0.09),0px_44px_27px_0px_rgba(0,0,0,0.05),0px_79px_32px_0px_rgba(0,0,0,0.01),0px_123px_35px_0px_rgba(0,0,0,0)]"
      >
        <svg
          width="39"
          height="51"
          viewBox="0 0 39 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 md:h-20 md:w-20 h-10 w-10"
        >
          <g filter="url(#filter0_di_309_821)">
            <path
              d="M28.4037 17H22.9204C22.3083 17 21.8399 16.455 21.9318 15.8498L23.0424 8.53875C23.0806 8.28789 23.0686 8.03089 23.0071 7.78565C22.9456 7.54042 22.8361 7.31285 22.6863 7.11878C22.5365 6.92471 22.3499 6.76882 22.1396 6.66195C21.9292 6.55509 21.7002 6.49982 21.4684 6.5H13.2526C12.8753 6.50012 12.5103 6.647 12.2225 6.91454C11.9346 7.18207 11.7425 7.55294 11.6802 7.96125L9.02186 25.4612C8.98364 25.712 8.99565 25.9688 9.05706 26.2139C9.11847 26.459 9.2278 26.6865 9.37745 26.8806C9.52709 27.0746 9.71347 27.2305 9.9236 27.3375C10.1337 27.4445 10.3626 27.4999 10.5942 27.5H15.973C16.5253 27.5 16.973 27.9477 16.973 28.5V37.8148C16.973 38.8346 18.3204 39.2002 18.8358 38.3203L29.7465 19.6968C29.9015 19.4323 29.9887 19.1269 29.999 18.8126C30.0092 18.4983 29.9421 18.1868 29.8047 17.9109C29.6673 17.6349 29.4647 17.4047 29.2182 17.2444C28.9716 17.0841 28.6903 16.9997 28.4037 17Z"
              fill="#25A18E"
            />
            <path
              d="M28.4037 17H22.9204C22.3083 17 21.8399 16.455 21.9318 15.8498L23.0424 8.53875C23.0806 8.28789 23.0686 8.03089 23.0071 7.78565C22.9456 7.54042 22.8361 7.31285 22.6863 7.11878C22.5365 6.92471 22.3499 6.76882 22.1396 6.66195C21.9292 6.55509 21.7002 6.49982 21.4684 6.5H13.2526C12.8753 6.50012 12.5103 6.647 12.2225 6.91454C11.9346 7.18207 11.7425 7.55294 11.6802 7.96125L9.02186 25.4612C8.98364 25.712 8.99565 25.9688 9.05706 26.2139C9.11847 26.459 9.2278 26.6865 9.37745 26.8806C9.52709 27.0746 9.71347 27.2305 9.9236 27.3375C10.1337 27.4445 10.3626 27.4999 10.5942 27.5H15.973C16.5253 27.5 16.973 27.9477 16.973 28.5V37.8148C16.973 38.8346 18.3204 39.2002 18.8358 38.3203L29.7465 19.6968C29.9015 19.4323 29.9887 19.1269 29.999 18.8126C30.0092 18.4983 29.9421 18.1868 29.8047 17.9109C29.6673 17.6349 29.4647 17.4047 29.2182 17.2444C28.9716 17.0841 28.6903 16.9997 28.4037 17Z"
              fill="url(#paint0_linear_309_821)"
              fillOpacity="0.7"
            />
          </g>
          <defs>
            <filter
              id="filter0_di_309_821"
              x="0"
              y="0.5"
              width="39"
              height="50.3164"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="3"></feOffset>
              <feGaussianBlur stdDeviation="4.5"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_309_821"
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_309_821"
                result="shape"
              ></feBlend>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset></feOffset>
              <feGaussianBlur stdDeviation="1.24444"></feGaussianBlur>
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              ></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_309_821"
              ></feBlend>
            </filter>
            <linearGradient
              id="paint0_linear_309_821"
              x1="15"
              y1="3.93902"
              x2="41.039"
              y2="28.2012"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7BD1FF"></stop>
              <stop offset="1" stopColor="#7BD1FF" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
);

const CalendarCard = ({className="", bgColor = "#e2e8f0" }: { className?:string,bgColor?: string }) => (
  <div className={className}>
  <div
    style={{
      opacity: bgColor === "#e2e8f0" ? 1 : 0,
      transform: "scale(0.9) rotate(5deg)"
    }}
  >
    <div className="md:[&>*]:scale-100 [&>*]:scale-75">
      <div className="w-[220px] h-[242px] rounded-2xl overflow-hidden bg-[#FFFFFF] shadow-[0px_7px_15px_0px_#3333331A,0px_27px_27px_0px_#33333317,0px_60px_36px_0px_#3333330D,0px_106px_43px_0px_#33333303,0px_166px_47px_0px_#33333300]">
        <div
          className="h-10 font-normal text-sm flex items-center p-4 text-neutral-700"
          style={{ backgroundColor: bgColor }}
        >
          Analytics
        </div>
        <div className="p-2 space-y-2">
          <p className="text-sm p-1 text-neutral-700">Google meet</p>
          <div className="px-1">
            <p className="text-base -mb-1.5">Meeting with Elon</p>
            <label className="text-xs text-neutral-700">
              10:30 | Hyderabad
            </label>
          </div>
          <div className="px-1">
            <p className="text-base -mb-1.5">Aceternity Morning Call</p>
            <label className="text-xs text-neutral-700">14:30 | Remote</label>
          </div>
          <div className="px-1">
            <p className="text-base -mb-1.5">Evening Catchup</p>
            <label className="text-xs text-neutral-700">18:30 | Remote</label>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
);

const SocialMediaIntegration = ({ className }: { className: string }) => (
  <div className={className}>
    <div style={{ opacity: 1, transform: "scale(0.9) rotate(5deg)" }}>
      <div className="md:[&>*]:scale-100 [&>*]:scale-[0.6]">
        <div className="relative w-[405px] h-[439px]">
          <Image
            src="https://playful-template-aceternity.vercel.app/assets/Social_Media.svg"
            alt="Social_Media"
            layout="fill"
            className="absolute -z-10 top-0 left-0"
          />
          <p className="absolute left-16 top-[70px] font-medium z-10">
            Social Media Integrations
          </p>
          <div className="absolute left-10 mt-7 flex w-[405px] h-[439px] z-[-1px]">
            <Image
              src="https://playful-template-aceternity.vercel.app/assets/social/discord.svg"
              alt="discord"
              width={200}
              height={200}
              className="rotate-[-16deg]"
            />
            <Image
              src="https://playful-template-aceternity.vercel.app/assets/social/insta.svg"
              alt="instagram"
              width={200}
              height={200}
              className="rotate-[7deg] ml-[-155px]"
            />
            <Image
              src="https://playful-template-aceternity.vercel.app/assets/social/fb.svg"
              alt="facebook"
              width={200}
              height={200}
              className="rotate-[-10deg] ml-[-125px]"
            />
            <Image
              src="https://playful-template-aceternity.vercel.app/assets/social/in.svg"
              alt="linkedin"
              width={200}
              height={200}
              className="rotate-[12deg] ml-[-150px]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const InterviewCards = ({ className }: { className: string }) => (
  <div className={className}>
    <div style={{ opacity: 1, transform: "scale(1) rotate(0deg)" }}>
      <div className="md:[&>*]:scale-100 [&>*]:scale-75">
        <div className="relative w-[400px] h-[439px]">
          <Image
            src="https://playful-template-aceternity.vercel.app/assets/Social_Media.svg"
            alt="Social_Media"
            layout="fill"
            className="absolute -z-10 top-0 left-0"
          />
          <Image
            src="https://playful-template-aceternity.vercel.app/assets/paper_clip.png"
            alt="paper_clip"
            width={400}
            height={400}
            className="absolute left-5 -top-10 font-medium z-10 rotate-[8deg] h-20 w-20 aspect-square"
          />
          <div className="absolute left-12 mt-24 flex flex-col gap-4 w-[300px] h-[439px] z-[-1px]">
            <InterviewCard name="Manu" feedback="Candidate is mid." />
            <InterviewCard name="Ruru" feedback="Candidate is good." />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const InterviewCard = ({
  name,
  feedback
}: {
  name: string;
  feedback: string;
}) => (
  <div className="flex items-center justify-between p-4 w-[300px] h-20 bg-white rounded-xl shadow-[0px_3px_8px_-1px_#3232470D,0px_0px_1px_0px_#0C1A4B3D]">
    <div className="flex items-center">
      <div className="relative w-[50px] h-[50px]">
        <Image
          src="https://playful-template-aceternity.vercel.app/assets/avatar.png"
          alt="avatar"
          width={50}
          height={50}
          className="rounded-full"
        />
        <Image
          src="https://playful-template-aceternity.vercel.app/assets/avatar_badge.png"
          alt="avatar"
          width={20}
          height={20}
          className="absolute bottom-0 right-0"
        />
      </div>
      <div className="grid ml-4">
        <h1 className="font-semibold">{name}'s Interview</h1>
        <p className="font-normal text-sm">{feedback}</p>
      </div>
    </div>
    <div>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5461 7.54623C13.6507 7.54623 14.5461 6.6508 14.5461 5.54623C14.5461 4.44166 13.6507 3.54623 12.5461 3.54623C11.4416 3.54623 10.5461 4.44166 10.5461 5.54623C10.5461 6.6508 11.4416 7.54623 12.5461 7.54623Z"
          fill="#7A7A9D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5461 14.5462C13.6507 14.5462 14.5461 13.6508 14.5461 12.5462C14.5461 11.4417 13.6507 10.5462 12.5461 10.5462C11.4416 10.5462 10.5461 11.4417 10.5461 12.5462C10.5461 13.6508 11.4416 14.5462 12.5461 14.5462Z"
          fill="#7A7A9D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5461 21.5462C13.6507 21.5462 14.5461 20.6508 14.5461 19.5462C14.5461 18.4417 13.6507 17.5462 12.5461 17.5462C11.4416 17.5462 10.5461 18.4417 10.5461 19.5462C10.5461 20.6508 11.4416 21.5462 12.5461 21.5462Z"
          fill="#7A7A9D"
        />
      </svg>
    </div>
  </div>
);

const ContentSection = () => (
  <div className="w-full h-5/6 flex flex-col items-center justify-center">
    <Link href="/blog/Artificial-Intelligence">
      <div
        className="md:w-[459px] w-72 md:h-10 h-9 rounded-xl bg-emerald-500/50 flex items-center justify-center md:gap-3 gap-1"
        style={{ transform: "translateY(0px)", opacity: 1 }}
      >
        <Image
          src="https://playful-template-aceternity.vercel.app/assets/banner_Icon.svg"
          alt="hero_text"
          width={20}
          height={20}
          className="size-5 md:size-6"
        />
        <p className="md:text-base text-[10px] font-semibold">
          New! Record user interviews without recording bots
        </p>
      </div>
    </Link>

    <h1 className="md:text-6xl text-2xl font-bold text-center md:w-4/6 w-full mt-8">
      {[
        "Record",
        "interviews.",
        "Centralise",
        "feedback",
        "automatically."
      ].map((word, index) => (
        <span
          key={index}
          className="inline-block"
          style={{ transform: "translateY(0px)", opacity: 1 }}
        >
          {word}{" "}
        </span>
      ))}
    </h1>

    <p
      className="md:text-lg text-sm font-medium leading-[23px] text-center tracking-tight max-w-2xl mx-auto w-[95%] mt-9 text-neutral-600"
      style={{ transform: "translateY(0px)", opacity: 1 }}
    >
      Record and organize user interviews automatically. Focus on what matters -
      connecting with users.
    </p>

    <Link href="/sign-up">
      <button
        className="flex items-center justify-center w-56 h-12 mt-9 rounded-xl border border-emerald-700 bg-gradient-to-b from-emerald-500 to-brand text-base font-semibold text-white"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 14.8px",
          transform: "translateY(0px)",
          opacity: 1
        }}
      >
        Get started - it's free
        <ArrowRight className="h-4 w-4 ml-2" />
      </button>
    </Link>
  </div>
);

export default HeroSection;
