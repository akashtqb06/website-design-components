"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import SparklesCore from "./ui/particles";

export default function FeaturesSection() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  return (
    <div className="px-4 py-20 max-w-5xl mx-auto relative z-40">
      {/* Lightning Icon in Perspective */}
      <div className="[perspective:400px] [transform-style:preserve-3d]">
        <motion.div
          className={`h-14 w-14 p-[4px] rounded-md mx-auto relative ${
            isDarkMode
              ? "bg-gradient-to-b from-neutral-800 to-neutral-950"
              : "bg-gradient-to-b from-neutral-200 to-neutral-400"
          }`}
          style={{ transform: "rotateX(25deg)", transformOrigin: "center" }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <div
            className={`rounded-[5px] h-full w-full relative z-20 flex justify-center items-center overflow-hidden ${
              isDarkMode ? "bg-[#1a1a1a]" : "bg-white"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`h-6 w-6 ${
                isDarkMode ? "text-cyan-500" : "text-cyan-600"
              }`}
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <div
            className={`absolute bottom-0 inset-x-0 opacity-50 rounded-full blur-lg h-4 w-full mx-auto z-30 ${
              isDarkMode ? "bg-neutral-600" : "bg-neutral-400"
            }`}
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-[60%] mx-auto" />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-r from-transparent via-cyan-600 blur-sm to-transparent h-[8px] w-[60%] mx-auto" />
        </motion.div>
      </div>

      {/* Title and Subtitle */}
      <h2
        className={`max-w-5xl mx-auto text-center tracking-tight font-medium text-3xl md:text-5xl md:leading-tight pt-4 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Automate your social media
      </h2>
      <h2
        className={`text-sm md:text-base max-w-4xl my-4 mx-auto text-center font-normal ${
          isDarkMode ? "text-neutral-400" : "text-gray-600"
        }`}
      >
        Proactiv houses a rich set of features to automate your marketing
        efforts across all social media
      </h2>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 py-10">
        {/* Social Media Integration Card */}
        <FeatureCardTitleUp
          title="Post to multiple platforms at once"
          description="With our AI-powered platform, you can post to multiple platforms at once, saving you time and effort."
          isDarkMode={isDarkMode}
          className="lg:col-span-2"
        >
          <SocialPlatforms />
        </FeatureCardTitleUp>

        {/* Analytics Card */}
        <FeatureCard
          title="Analytics for everything"
          description="Check analytics, track your posts, and get insights into your audience."
          isDarkMode={isDarkMode}
        >
          <AnalyticsGraph />
        </FeatureCard>

        {/* AI Integration Card */}
        <FeatureCard
          title="Integrated AI"
          description="Proactiv uses AI to help you create engaging content."
          isDarkMode={isDarkMode}
        >
          <AIIntegration />
        </FeatureCard>

        {/* Collaboration Card */}
        <FeatureCard
          title="Easy Collaboration"
          description="Proactive can integrate with Zapier, Slack and every other popular integration tool."
          isDarkMode={isDarkMode}
        >
          <CollaborationTimeline />
        </FeatureCard>

        {/* User Insights Card */}
        <FeatureCard
          title="Know your audience"
          description="Based on your audience, create funnels and drive more traffic."
          isDarkMode={isDarkMode}
        >
          <UserInsights />
        </FeatureCard>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  children?: ReactNode;
  isDarkMode: boolean;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  children,
  isDarkMode,
  className = ""
}: FeatureCardProps) {
  return (
    <motion.div
      className={`p-8 rounded-xl border ${
        isDarkMode
          ? "border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.30)]"
          : "border-gray-200 bg-white"
      } shadow-[2px_4px_16px_0px_rgba(0,0,0,0.06)] group ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      {children}
      <h3
        className={`text-lg font-semibold py-2 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm font-normal max-w-sm ${
          isDarkMode ? "text-neutral-400" : "text-gray-600"
        }`}
      >
        {description}
      </p>
    </motion.div>
  );
}
export function FeatureCardTitleUp({
  title,
  description,
  children,
  isDarkMode,
  className = ""
}: FeatureCardProps) {
  return (
    <motion.div
      className={`p-8 rounded-xl border ${
        isDarkMode
          ? "border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.30)]"
          : "border-gray-200 bg-white"
      } shadow-[2px_4px_16px_0px_rgba(0,0,0,0.06)] group ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <h3
        className={`text-lg font-semibold py-2 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm font-normal max-w-sm ${
          isDarkMode ? "text-neutral-400" : "text-gray-600"
        }`}
      >
        {description}
      </p>
      {children}
    </motion.div>
  );
}
export function SocialPlatforms() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div
      className={`h-[20rem] rounded-xl z-40 ${
        isDarkMode ? "bg-[rgba(40,40,40,0.30)]" : "bg-gray-100"
      } [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]`}
    >
      <div className="p-8 overflow-hidden h-full">
        <div className="flex flex-col gap-4 items-center justify-center h-full relative">
          <div className="flex gap-4 items-center justify-center flex-shrink-0">
            <ConnectingLines />
            <SocialIconsGrid />
          </div>

          <div className="flex gap-4 items-center justify-center flex-shrink-0 ml-8">
            <SocialIconsGrid />
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialIconsGrid() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const socialIcons = [
    { icon: "instagram", bg: "bg-gradient-to-br from-purple-600 to-pink-500" },
    { icon: "twitter", bg: "bg-blue-400" },
    { icon: "facebook", bg: "bg-blue-600" },
    { icon: "linkedin", bg: "bg-blue-700" },
    { icon: "github", bg: "bg-gray-800" },
    { icon: "slack", bg: "bg-yellow-500" },
    { icon: "slack", bg: "bg-yellow-500" }
  ];

  return (
    <>
      {socialIcons.map((social, index) => (
        <motion.div
          key={index}
          className={`h-16 w-16 rounded-lg border-2 relative
              ${isDarkMode ? "bg-[rgba(40,40,40)]" : "bg-white"}
              ${
                isDarkMode
                  ? "border-[rgba(255,_255,_255,_0.20)]"
                  : "border-gray-300"
              }
              shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.1)]
              flex-shrink-0`}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <div className={`h-8 w-8 rounded-md overflow-hidden m-auto mt-4`}>
            <SocialIcon icon={social.icon} />
          </div>
        </motion.div>
      ))}
    </>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  const icons: Record<string, JSX.Element> = {
    instagram: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <rect
            x="2"
            y="2"
            width="28"
            height="28"
            rx="6"
            fill="url(#paint0_radial_87_7153)"
          ></rect>{" "}
          <rect
            x="2"
            y="2"
            width="28"
            height="28"
            rx="6"
            fill="url(#paint1_radial_87_7153)"
          ></rect>{" "}
          <rect
            x="2"
            y="2"
            width="28"
            height="28"
            rx="6"
            fill="url(#paint2_radial_87_7153)"
          ></rect>{" "}
          <path
            d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
            fill="white"
          ></path>{" "}
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
            fill="white"
          ></path>{" "}
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
            fill="white"
          ></path>{" "}
          <defs>
            {" "}
            <radialGradient
              id="paint0_radial_87_7153"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
            >
              {" "}
              <stop stop-color="#B13589"></stop>{" "}
              <stop offset="0.79309" stop-color="#C62F94"></stop>{" "}
              <stop offset="1" stop-color="#8A3AC8"></stop>{" "}
            </radialGradient>{" "}
            <radialGradient
              id="paint1_radial_87_7153"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
            >
              {" "}
              <stop stop-color="#E0E8B7"></stop>{" "}
              <stop offset="0.444662" stop-color="#FB8A2E"></stop>{" "}
              <stop offset="0.71474" stop-color="#E2425C"></stop>{" "}
              <stop offset="1" stop-color="#E2425C" stop-opacity="0"></stop>{" "}
            </radialGradient>{" "}
            <radialGradient
              id="paint2_radial_87_7153"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
            >
              {" "}
              <stop offset="0.156701" stop-color="#406ADC"></stop>{" "}
              <stop offset="0.467799" stop-color="#6A45BE"></stop>{" "}
              <stop offset="1" stop-color="#6A45BE" stop-opacity="0"></stop>{" "}
            </radialGradient>{" "}
          </defs>{" "}
        </g>
      </svg>
    ),
    twitter: (
      <svg
        viewBox="0 -4 48 48"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <title>Twitter-color</title> <desc>Created with Sketch.</desc>{" "}
          <defs> </defs>{" "}
          <g
            id="Icons"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            {" "}
            <g
              id="Color-"
              transform="translate(-300.000000, -164.000000)"
              fill="#00AAEC"
            >
              {" "}
              <path
                d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283"
                id="Twitter"
              >
                {" "}
              </path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <circle cx="24" cy="24" r="20" fill="#3B5998"></circle>{" "}
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z"
            fill="white"
          ></path>{" "}
        </g>
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fill="#0A66C2"
            d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
          ></path>
        </g>
      </svg>
    ),
    github: (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="var(--foreground)"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <title>github</title> <rect width="24" height="24" fill="none"></rect>{" "}
          <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path>{" "}
        </g>
      </svg>
    ),
    slack: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M26.5002 14.9996C27.8808 14.9996 29 13.8804 29 12.4998C29 11.1192 27.8807 10 26.5001 10C25.1194 10 24 11.1193 24 12.5V14.9996H26.5002ZM19.5 14.9996C20.8807 14.9996 22 13.8803 22 12.4996V5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5V12.4996C17 13.8803 18.1193 14.9996 19.5 14.9996Z"
            fill="#2EB67D"
          ></path>{" "}
          <path
            d="M5.49979 17.0004C4.11919 17.0004 3 18.1196 3 19.5002C3 20.8808 4.1193 22 5.49989 22C6.8806 22 8 20.8807 8 19.5V17.0004H5.49979ZM12.5 17.0004C11.1193 17.0004 10 18.1197 10 19.5004V26.5C10 27.8807 11.1193 29 12.5 29C13.8807 29 15 27.8807 15 26.5V19.5004C15 18.1197 13.8807 17.0004 12.5 17.0004Z"
            fill="#E01E5A"
          ></path>{" "}
          <path
            d="M17.0004 26.5002C17.0004 27.8808 18.1196 29 19.5002 29C20.8808 29 22 27.8807 22 26.5001C22 25.1194 20.8807 24 19.5 24L17.0004 24L17.0004 26.5002ZM17.0004 19.5C17.0004 20.8807 18.1197 22 19.5004 22L26.5 22C27.8807 22 29 20.8807 29 19.5C29 18.1193 27.8807 17 26.5 17L19.5004 17C18.1197 17 17.0004 18.1193 17.0004 19.5Z"
            fill="#ECB22E"
          ></path>{" "}
          <path
            d="M14.9996 5.49979C14.9996 4.11919 13.8804 3 12.4998 3C11.1192 3 10 4.1193 10 5.49989C10 6.88061 11.1193 8 12.5 8L14.9996 8L14.9996 5.49979ZM14.9996 12.5C14.9996 11.1193 13.8803 10 12.4996 10L5.5 10C4.11929 10 3 11.1193 3 12.5C3 13.8807 4.11929 15 5.5 15L12.4996 15C13.8803 15 14.9996 13.8807 14.9996 12.5Z"
            fill="#36C5F0"
          ></path>{" "}
        </g>
      </svg>
    )
  };

  return icons[icon] || <></>;
}
function ConnectingLines() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <>
      {/* First Animated Line */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="62"
        height="105"
        viewBox="0 0 62 105"
        fill="none"
        className={`absolute left-1/2 -translate-x-[60px] -top-10 ${
          isDarkMode ? "text-neutral-600" : "text-gray-300"
        }`}
      >
        <defs>
          <motion.linearGradient
            id="gradient-2"
            animate={{
              x1: ["0%", "100%"], // Move in one direction only
              y1: ["0%", "100%"],
              x2: ["10%", "110%"],
              y2: ["10%", "110%"]
            }}
            transition={{
              duration: 2, // Smooth transition
              ease: "linear",
              repeat: Infinity, // Continuous motion
              repeatType: "loop" // No reverse motion
            }}
          >
            <stop offset="0%" stopColor="#001AFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#6DD4F5" />
            <stop offset="100%" stopColor="#6DD4F5" stopOpacity="0" />
          </motion.linearGradient>
        </defs>

        {/* Static Path */}
        <path
          d="M1.00001 -69L1 57.5C1 64.1274 6.37258 69.5 13 69.5H49C55.6274 69.5 61 74.8726 61 81.5L61 105"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <path
          d="M1.00001 -69L1 57.5C1 64.1274 6.37258 69.5 13 69.5H49C55.6274 69.5 61 74.8726 61 81.5L61 105"
          stroke="url(#gradient-2)"
          stroke-width="1.5"
        ></path>
      </motion.svg>

      <motion.svg
        width="128"
        height="69"
        viewBox="0 0 128 69"
        fill="none"
        className={`absolute left-1/2 translate-x-4 -bottom-2 ${
          isDarkMode ? "text-neutral-600" : "text-gray-300"
        }`}
      >
        <defs>
          <motion.linearGradient
            id="gradient-2"
            animate={{
              x1: ["0%", "100%"], // Move in one direction only
              y1: ["0%", "100%"],
              x2: ["10%", "110%"],
              y2: ["10%", "110%"]
            }}
            transition={{
              duration: 1, // Smooth transition
              ease: "linear",
              delay: 3,
              repeat: Infinity, // Continuous motion
              repeatType: "loop" // No reverse motion
            }}
          >
            <stop stopColor="#001AFF" stopOpacity="0" />
            <stop offset="0.5" stopColor="#6DD4F5" />
            <stop offset="1" stopColor="#6DD4F5" stopOpacity="0" />
          </motion.linearGradient>
        </defs>

        {/* Static Path */}
        <path
          d="M1.00002 0.5L1.00001 29.5862C1 36.2136 6.37259 41.5862 13 41.5862H115C121.627 41.5862 127 46.9588 127 53.5862L127 75"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        {/* Animated Gradient Stroke */}
        <path
          d="M1.00002 0.5L1.00001 29.5862C1 36.2136 6.37259 41.5862 13 41.5862H115C121.627 41.5862 127 46.9588 127 53.5862L127 75"
          stroke="url(#gradient-2)"
          strokeWidth="1.5"
        />
      </motion.svg>
    </>
  );
}

export function UserInsights() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [hovering, setHovering] = useState(false);

  return (
    <div
      className={`h-[20rem] rounded-xl z-40 ${
        isDarkMode ? "bg-[rgba(40,40,40,0.30)]" : "bg-gray-100"
      } [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="p-8 overflow-hidden h-full relative flex items-start justify-center">
        <div className="flex absolute inset-0 flex-col group-hover:-translate-y-80 transition duration-200 items-center justify-center">
          <div className="h-20 w-20 rounded-lg flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]">
            <img
              alt="avatar"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              className="h-16 w-16 rounded-md object-cover"
              style={{ color: "transparent" }}
              src="/_next/image?url=%2Favatar.png&amp;w=256&amp;q=75"
            />
          </div>
          <p className="mt-4 text-sm text-neutral-400 font-bold">Manu Arora</p>
          <div className="flex items-center gap-2 text-xs mt-4">
            <p>Most engagements</p>
            <div className="h-1 w-1 rounded-full bg-neutral-400"></div>
            <p>69,420</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="336"
            height="126"
            viewBox="0 0 336 126"
            fill="none"
          >
            <path
              d="M0 1C9.88235 1 9.88235 64.1698 19.7647 64.1698C29.6471 64.1698 29.6471 108.623 39.5294 108.623C49.4118 108.623 49.4118 125 59.2941 125C69.1765 125 69.1765 50.1321 79.0588 50.1321C88.9412 50.1321 88.9412 94.5849 98.8235 94.5849C108.706 94.5849 108.706 73.5283 118.588 73.5283C128.471 73.5283 128.471 85.2264 138.353 85.2264C148.235 85.2264 148.235 61.8302 158.118 61.8302C168 61.8302 168 57.1509 177.882 57.1509C187.765 57.1509 187.765 52.4717 197.647 52.4717C207.529 52.4717 207.529 92.2453 217.412 92.2453C227.294 92.2453 227.294 96.9245 237.176 96.9245C247.059 96.9245 247.059 113.302 256.941 113.302C266.824 113.302 266.824 101.604 276.706 101.604C286.588 101.604 286.588 38.434 296.471 38.434C306.353 38.434 306.353 103.943 316.235 103.943C326.118 103.943 326.118 103.943 336 103.943"
              stroke="#F8F8F8"
              stroke-width="1.5"
            ></path>
          </svg>
        </div>
        <div className="flex absolute inset-0 flex-col translate-y-80 group-hover:translate-y-0 transition duration-200 items-center justify-center">
          <div className="h-20 w-20 rounded-lg flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]">
            <img
              alt="avatar"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              className="h-16 w-16 rounded-md object-cover"
              style={{ color: "transparent" }}
              src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1599566150163-29194dcaad36%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D3387%26q%3D80&amp;w=256&amp;q=75"
            />
          </div>
          <p className="mt-4 text-sm text-neutral-400 font-bold">
            Tyler Durden
          </p>
          <div className="flex items-center gap-2 text-xs mt-4">
            <p>Most engagements</p>
            <div className="h-1 w-1 rounded-full bg-neutral-400"></div>
            <p>8008</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="336"
            height="126"
            viewBox="0 0 336 126"
            fill="none"
          >
            <path
              d="M0 1C9.88235 1 9.88235 64.1698 19.7647 64.1698C29.6471 64.1698 29.6471 108.623 39.5294 108.623C49.4118 108.623 49.4118 125 59.2941 125C69.1765 125 69.1765 50.1321 79.0588 50.1321C88.9412 50.1321 88.9412 94.5849 98.8235 94.5849C108.706 94.5849 108.706 73.5283 118.588 73.5283C128.471 73.5283 128.471 85.2264 138.353 85.2264C148.235 85.2264 148.235 61.8302 158.118 61.8302C168 61.8302 168 57.1509 177.882 57.1509C187.765 57.1509 187.765 52.4717 197.647 52.4717C207.529 52.4717 207.529 92.2453 217.412 92.2453C227.294 92.2453 227.294 96.9245 237.176 96.9245C247.059 96.9245 247.059 113.302 256.941 113.302C266.824 113.302 266.824 101.604 276.706 101.604C286.588 101.604 286.588 38.434 296.471 38.434C306.353 38.434 306.353 103.943 316.235 103.943C326.118 103.943 326.118 103.943 336 103.943"
              stroke="#F8F8F8"
              stroke-width="1.5"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
export function CollaborationTimeline() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="h-[20rem] rounded-xl z-40 max-w-[16rem] mx-auto">
      <div className="p-8 overflow-hidden h-full relative flex flex-col group">
        <div className="absolute inset-0 h-full w-full flex flex-row gap-4 justify-center">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="flex flex-col items-center justify-center">
              <div
                className={`rounded-full h-3 w-3 border ${
                  isDarkMode
                    ? "border-[rgba(255,255,255,0.2)] bg-[rgba(248,248,248,0.02)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]"
                    : "border-gray-300 bg-white shadow-sm"
                }`}
              />
              <div
                className={`h-full w-px ${
                  isDarkMode
                    ? "bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.1)] to-transparent"
                    : "bg-gradient-to-b from-transparent via-gray-300 to-transparent"
                }`}
              />
            </div>
          ))}
        </div>
        <TimelineCards isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

function TimelineCards({ isDarkMode }: { isDarkMode: Boolean }) {
  return (
    <>
      <div className="p-0.5 rounded-lg border border-neutral-600 w-fit mt-10 ml-4">
        <div className="h-10 text-xs px-2 text-neutral-400 rounded-[5px] flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]">
          Twitter post
        </div>
      </div>
      <div className="p-0.5 rounded-lg border border-neutral-600 w-fit mt-4 ml-10 group-hover:border-secondary transition duration-200 group-hover:scale-[1.02]">
        <div className="h-10 text-xs px-2 text-neutral-400 rounded-[5px] flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]">
          Email Campaign
        </div>
      </div>
      <div className="p-0.5 rounded-lg border border-neutral-600 w-fit mt-4 ml-4">
        <div className="h-10 text-xs px-2 text-neutral-400 rounded-[5px] flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]">
          Newsletter Campaign
        </div>
      </div>
      <div className="absolute h-4 w-4 transition-all duration-200 top-20 left-40 group-hover:left-32">
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 transition duration-200 top-20 left-40 group-hover:left-32"
        >
          <path
            d="M3.08365 1.18326C2.89589 1.11581 2.70538 1.04739 2.54453 1.00558C2.39192 0.965918 2.09732 0.900171 1.78145 1.00956C1.41932 1.13497 1.13472 1.41956 1.00932 1.78169C0.899927 2.09756 0.965674 2.39216 1.00533 2.54477C1.04714 2.70562 1.11557 2.89613 1.18301 3.0839L5.9571 16.3833C6.04091 16.6168 6.12128 16.8408 6.2006 17.0133C6.26761 17.1591 6.42 17.4781 6.75133 17.6584C7.11364 17.8555 7.54987 17.8612 7.91722 17.6737C8.25317 17.5021 8.41388 17.1873 8.48469 17.0433C8.56852 16.8729 8.65474 16.6511 8.74464 16.4198L10.8936 10.8939L16.4196 8.74489C16.6509 8.655 16.8726 8.56879 17.043 8.48498C17.187 8.41416 17.5018 8.25346 17.6734 7.91751C17.8609 7.55016 17.8552 7.11392 17.6581 6.75162C17.4778 6.42029 17.1589 6.2679 17.0131 6.20089C16.8405 6.12157 16.6165 6.0412 16.383 5.9574L3.08365 1.18326Z"
            fill="var(--blue-900)"
            stroke="var(--blue-500)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <div className="absolute top-3 left-3 p-1 rounded-md text-[10px] whitespace-pre text-neutral-500 transition duration-200 group-hover:text-secondary">
          Manu Arora
        </div>
      </div>
      <div className="absolute h-4 w-4 transition-all duration-200 top-60 left-12 group-hover:left-32 group-hover:top-44">
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 transition duration-200 top-60 left-12 group-hover:left-32 group-hover:top-44"
        >
          <path
            d="M3.08365 1.18326C2.89589 1.11581 2.70538 1.04739 2.54453 1.00558C2.39192 0.965918 2.09732 0.900171 1.78145 1.00956C1.41932 1.13497 1.13472 1.41956 1.00932 1.78169C0.899927 2.09756 0.965674 2.39216 1.00533 2.54477C1.04714 2.70562 1.11557 2.89613 1.18301 3.0839L5.9571 16.3833C6.04091 16.6168 6.12128 16.8408 6.2006 17.0133C6.26761 17.1591 6.42 17.4781 6.75133 17.6584C7.11364 17.8555 7.54987 17.8612 7.91722 17.6737C8.25317 17.5021 8.41388 17.1873 8.48469 17.0433C8.56852 16.8729 8.65474 16.6511 8.74464 16.4198L10.8936 10.8939L16.4196 8.74489C16.6509 8.655 16.8726 8.56879 17.043 8.48498C17.187 8.41416 17.5018 8.25346 17.6734 7.91751C17.8609 7.55016 17.8552 7.11392 17.6581 6.75162C17.4778 6.42029 17.1589 6.2679 17.0131 6.20089C16.8405 6.12157 16.6165 6.0412 16.383 5.9574L3.08365 1.18326Z"
            fill="var(--blue-900)"
            stroke="var(--blue-500)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <div className="absolute top-3 left-3 p-1 rounded-md text-[10px] whitespace-pre text-neutral-500 transition duration-200 group-hover:text-white">
          Tyler Durden
        </div>
      </div>
    </>
  );
}

export function AnalyticsGraph() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div
      className={`h-[20rem] rounded-xl z-40 max-w-[16rem] mx-auto ${
        isDarkMode ? "bg-[rgba(40,40,40,0.30)]" : "bg-gray-100"
      } [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]`}
    >
      <div className="p-8 overflow-hidden h-full">
        <div className="flex flex-col gap-4 items-center justify-center h-full relative">
          <AnimatePresence>
            <motion.div
              className="message absolute left-10 top-10 rounded-full px-4 py-2 shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)_inset] bg-gray-900 text-white"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <p className="text-xs">+200 connections</p>
            </motion.div>
          </AnimatePresence>
          <motion.svg
            width="335"
            height="163"
            viewBox="0 0 335 163"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-neutral-600"
          >
            <g opacity="0.75" filter="url(#graph-line)">
              <path
                d="M335 151L317.491 36.2214C317.166 34.0879 316.477 32.0245 315.57 30.0659C307.713 13.0898 308.853 1 284 1C257.738 1 244.262 37.1622 218 37.1622C191.738 37.1622 195.262 67.5 169 67.5C142.738 67.5 141.262 37.1622 115 37.1622C88.7381 37.1622 88.7141 76.5675 62.4522 76.5675C36.1902 76.5675 36.1902 54.6756 9.9283 54.6756H0"
                stroke="currentColor"
                stroke-width="1.5"
              ></path>
            </g>
            <path
              d="M335 151L317.491 36.2214C317.166 34.0879 316.477 32.0245 315.57 30.0659C307.713 13.0898 308.853 1 284 1C257.738 1 244.262 37.1622 218 37.1622C191.738 37.1622 195.262 67.5 169 67.5C142.738 67.5 141.262 37.1622 115 37.1622C88.7381 37.1622 88.7141 76.5675 62.4522 76.5675C36.1902 76.5675 36.1902 54.6756 9.9283 54.6756H0"
              stroke="url(#gradient-3)"
              stroke-width="1.5"
            ></path>
            <defs>
              <filter
                id="graph-line"
                x="-8"
                y="0.25"
                width="351.741"
                height="190.863"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feMorphology
                  radius="16"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_1_60235"
                ></feMorphology>
                <feOffset dy="32"></feOffset>
                <feGaussianBlur stdDeviation="12"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                ></feColorMatrix>
                <feBlend
                  mode="multiply"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_60235"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_60235"
                  result="shape"
                ></feBlend>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                ></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0.25 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_1_60235"
                ></feBlend>
              </filter>
              <motion.linearGradient
                id="gradient-3"
                y1="0%"
                y2="0%"
                animate={{
                  x1: ["0%", "100%"], // Move in one direction only
                  x2: ["10%", "110%"]
                }}
                transition={{
                  duration: 2, // Smooth transition
                  ease: "linear",
                  repeat: Infinity, // Continuous motion
                  repeatType: "loop" // No reverse motion
                }}
              >
                <stop stop-color="#001AFF" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#6DD4F5"></stop>
                <stop offset="1" stop-color="#6DD4F5" stop-opacity="0"></stop>
              </motion.linearGradient>
            </defs>
          </motion.svg>
          <svg
            width="335"
            height="162"
            viewBox="0 0 335 162"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -left-[4.4rem] top-12"
          >
            <path
              opacity="0.1"
              d="M62.4522 74.8549C36.1902 74.8549 36.1902 53.1412 9.9283 53.1412H0V162H335V148.682L317.457 36.1367C316.834 32.1397 314.854 28.4689 313.175 24.7886C308.579 14.7151 307.984 0 286 0C259.738 0 247.762 35.7703 221.5 35.7703C195.238 35.7703 196.762 66.5 170.5 66.5C144.238 66.5 141.262 35.7704 115 35.7704C88.7381 35.7704 88.7141 74.8549 62.4522 74.8549Z"
              fill="url(#paint0_linear_1_60234)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_1_60234"
                x1="167.5"
                y1="148.4"
                x2="183.302"
                y2="-107.424"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0"></stop>
                <stop
                  offset="0.571573"
                  stop-color="white"
                  stop-opacity="0.9"
                ></stop>
                <stop offset="1" stop-color="white"></stop>
              </linearGradient>
            </defs>
          </svg>
          <svg
            width="36"
            height="320"
            viewBox="0 0 36 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-x-0 -top-2 h-full w-full vertical-dots"
          >
            <path
              opacity="0.1"
              d="M18.75 4.5C18.75 4.08579 18.4142 3.75 18 3.75C17.5858 3.75 17.25 4.08579 17.25 4.5L18.75 4.5ZM17.25 4.5L17.25 8.56522L18.75 8.56522L18.75 4.5L17.25 4.5ZM17.25 16.6957L17.25 24.8261L18.75 24.8261L18.75 16.6957L17.25 16.6957ZM17.25 32.9565L17.25 41.087L18.75 41.087L18.75 32.9565L17.25 32.9565ZM17.25 49.2174L17.25 57.3478L18.75 57.3478L18.75 49.2174L17.25 49.2174ZM17.25 65.4783L17.25 73.6087L18.75 73.6087L18.75 65.4783L17.25 65.4783ZM17.25 81.7391L17.25 89.8696L18.75 89.8696L18.75 81.7391L17.25 81.7391ZM17.25 98L17.25 106.13L18.75 106.13L18.75 98L17.25 98ZM17.25 114.261L17.25 122.391L18.75 122.391L18.75 114.261L17.25 114.261ZM17.25 130.522L17.25 138.652L18.75 138.652L18.75 130.522L17.25 130.522ZM17.25 146.783L17.25 154.913L18.75 154.913L18.75 146.783L17.25 146.783ZM17.25 163.043L17.25 171.174L18.75 171.174L18.75 163.043L17.25 163.043ZM17.25 179.304L17.25 187.435L18.75 187.435L18.75 179.304L17.25 179.304ZM17.25 195.565L17.25 203.696L18.75 203.696L18.75 195.565L17.25 195.565ZM17.25 211.826L17.25 219.956L18.75 219.956L18.75 211.826L17.25 211.826ZM17.25 228.087L17.25 236.217L18.75 236.217L18.75 228.087L17.25 228.087ZM17.25 244.348L17.25 252.478L18.75 252.478L18.75 244.348L17.25 244.348ZM17.25 260.609L17.25 268.739L18.75 268.739L18.75 260.609L17.25 260.609ZM17.25 276.87L17.25 285L18.75 285L18.75 276.87L17.25 276.87ZM17.25 293.13L17.25 301.261L18.75 301.261L18.75 293.13L17.25 293.13ZM17.25 309.391L17.25 317.522L18.75 317.522L18.75 309.391L17.25 309.391ZM17.25 325.652L17.25 333.783L18.75 333.783L18.75 325.652L17.25 325.652ZM17.25 341.913L17.25 350.043L18.75 350.043L18.75 341.913L17.25 341.913ZM17.25 358.174L17.25 366.304L18.75 366.304L18.75 358.174L17.25 358.174ZM17.25 374.435L17.25 378.5L18.75 378.5L18.75 374.435L17.25 374.435Z"
              fill="#F8F8F8"
            ></path>
            <g filter="url(#filter0_bdi_1_60257)">
              <circle
                cx="18"
                cy="154"
                r="10"
                fill="#F8F8F8"
                fill-opacity="0.01"
                shape-rendering="crispEdges"
              ></circle>
              <circle
                cx="18"
                cy="154"
                r="10"
                fill="#121212"
                fill-opacity="0.3"
                shape-rendering="crispEdges"
              ></circle>
              <circle
                cx="18"
                cy="154"
                r="9.5"
                stroke="url(#paint0_linear_1_60257)"
                stroke-opacity="0.25"
                shape-rendering="crispEdges"
              ></circle>
            </g>
            <circle cx="18" cy="154" r="5" fill="#F8F8F8"></circle>
            <defs>
              <filter
                id="filter0_bdi_1_60257"
                x="-4"
                y="132"
                width="44"
                height="72"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="6"
                ></feGaussianBlur>
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_1_60257"
                ></feComposite>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feMorphology
                  radius="16"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect2_dropShadow_1_60257"
                ></feMorphology>
                <feOffset dy="32"></feOffset>
                <feGaussianBlur stdDeviation="12"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                ></feColorMatrix>
                <feBlend
                  mode="multiply"
                  in2="effect1_backgroundBlur_1_60257"
                  result="effect2_dropShadow_1_60257"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_1_60257"
                  result="shape"
                ></feBlend>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                ></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0.25 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect3_innerShadow_1_60257"
                ></feBlend>
              </filter>
              <linearGradient
                id="paint0_linear_1_60257"
                x1="18"
                y1="144"
                x2="26.7004"
                y2="165.962"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.4"></stop>
                <stop
                  offset="0.4"
                  stop-color="white"
                  stop-opacity="0.01"
                ></stop>
                <stop
                  offset="0.6"
                  stop-color="white"
                  stop-opacity="0.01"
                ></stop>
                <stop offset="1" stop-color="white" stop-opacity="0.1"></stop>
              </linearGradient>
            </defs>
          </svg>
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 translate-x-4 m-auto h-4 w-4 cursor"
          >
            <path
              d="M3.08365 1.18326C2.89589 1.11581 2.70538 1.04739 2.54453 1.00558C2.39192 0.965918 2.09732 0.900171 1.78145 1.00956C1.41932 1.13497 1.13472 1.41956 1.00932 1.78169C0.899927 2.09756 0.965674 2.39216 1.00533 2.54477C1.04714 2.70562 1.11557 2.89613 1.18301 3.0839L5.9571 16.3833C6.04091 16.6168 6.12128 16.8408 6.2006 17.0133C6.26761 17.1591 6.42 17.4781 6.75133 17.6584C7.11364 17.8555 7.54987 17.8612 7.91722 17.6737C8.25317 17.5021 8.41388 17.1873 8.48469 17.0433C8.56852 16.8729 8.65474 16.6511 8.74464 16.4198L10.8936 10.8939L16.4196 8.74489C16.6509 8.655 16.8726 8.56879 17.043 8.48498C17.187 8.41416 17.5018 8.25346 17.6734 7.91751C17.8609 7.55016 17.8552 7.11392 17.6581 6.75162C17.4778 6.42029 17.1589 6.2679 17.0131 6.20089C16.8405 6.12157 16.6165 6.0412 16.383 5.9574L3.08365 1.18326Z"
              fill="var(--blue-900)"
              stroke="var(--blue-500)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function AIIntegration() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div
      className={`h-[20rem] rounded-xl z-40 ${
        isDarkMode ? "bg-[rgba(40,40,40,0.30)]" : "bg-gray-100"
      } [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]`}
    >
      <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
        <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <motion.div
              key={i}
              className={`rounded-full flex items-center justify-center ${
                isDarkMode
                  ? "bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]"
                  : "bg-white shadow-lg"
              } h-${i === 2 ? "16" : "8"} w-${i === 2 ? "16" : "8"}`}
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2
                }
              }}
            >
              <svg
                fill="currentcolor"
                viewBox="0 0 24 24"
                role="img"
                className={` h-${i === 2 ? "8" : "6"} w-${
                  i === 2 ? "8" : "6"
                } [var(--foreground)]`}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>OpenAI icon</title>
                  <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"></path>
                </g>
              </svg>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-foreground to-transparent"
          animate={{ x: [-200, 200] }} // Moves right and left
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }} // Smooth infinite movement
        >
          <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
            <div className="opacity-0 w-full h-full" style={{ opacity: 1 }}>
              <div id="tsparticles" className="h-full w-full">
                <SparklesCore
                  background="transparent"
                  minSize={0.7}
                  maxSize={1.4}
                  particleDensity={2000}
                  className="w-full h-full"
                  particleColor="#06b6d4"
                />{" "}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
