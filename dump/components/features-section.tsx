import { BarChartIcon as ChartIcon, LockIcon, ShieldCheckIcon, PlugZapIcon, RabbitIcon, CircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import RippleCard from "./ripple-card";
import AccelerateCard from "./accelerate-card";
import LanguageCard from "./language-card";
import OrbitingCard from "./orbiting-card";
import { FC } from "react";

type PlusIconProps = {
  className?: string;
};

const PlusIcon: FC<PlusIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("absolute w-8 h-8 text-black/20 dark:text-white/30", className)}
  >
    <path d="M5 12h14"></path>
    <path d="M12 5v14"></path>
  </svg>
);

type FeatureCardProps = {
  icon: FC<{ className?: string }>;
  title: string;
  description: JSX.Element;
  learnMoreLink: string;
  className?: string;
  svgClassName?: string;
};

const FeatureCard: FC<FeatureCardProps> = ({ icon: Icon, title, description, learnMoreLink, className, svgClassName }) => (
  <div
    className={cn("flex relative flex-col justify-start items-start p-10 transform-gpu border-l-[1.2px]", className)}
  >
    <PlusIcon className={svgClassName} />
    <div className="flex gap-2 items-center my-1">
      <Icon className="w-4 h-4" />
      <p className="text-gray-600 dark:text-gray-400">{title}</p>
    </div>
    <div className="mt-2">
      <div className="max-w-full">
        <div className="flex gap-3">
          <p className="max-w-lg text-2xl font-normal tracking-tighter">{description}</p>
        </div>
      </div>
      <p className="mt-2 text-sm text-left text-muted-foreground">
        We are constantly creating an engine and settings to make it faster than ever. Make it faster than ever and ever
        <a className="text-gray-50 ml-1" href={learnMoreLink} target="_blank" rel="noreferrer">
          Learn more
        </a>
      </p>
    </div>
  </div>
);

const FeaturesSection: FC = () => {
  return (
    <div className="relative my-32 mx-auto rounded-none md:w-full xl:w-4/5 2xl:w-3/5 max-w-[1300px] md:border-[1.2px]">
      <PlusIcon className="top-[-17px] left-[-17px]" />
      <div className="grid grid-cols-1 w-full md:grid-cols-3 grid-rows-8 md:grid-rows-7">
        <FeatureCard
          icon={ChartIcon}
          title="Growth"
          description={<><strong>We do make sure you grow</strong></>}
          learnMoreLink="#"
          className="overflow-clip"
          svgClassName="bottom-[-17px] left-[-17px]"
        />
        <FeatureCard
          icon={LockIcon}
          title="Privacy First"
          description={<><strong>Privacy is something we prioritize</strong></>}
          learnMoreLink="#"
          className="border-l-[1.2px]"
          svgClassName="bottom-[-17px] left-[-17px]"
        />
        <FeatureCard
          icon={ShieldCheckIcon}
          title="Secured"
          description={<><strong>Security should be considered.</strong></>}
          learnMoreLink="#"
          className="md:border-l-[0.2px]"
          svgClassName="bottom-[-17px] left-[-17px]"
        />
        <FeatureCard
          icon={PlugZapIcon}
          title="Interoperability"
          description={<><strong>Performance is key.</strong></>}
          learnMoreLink="#"
          className="border-t-[1.2px] overflow-clip"
          svgClassName="bottom-[-17px] left-[-17px]"
        />
        <FeatureCard
          icon={RabbitIcon}
          title="Performance"
          description={<><strong>Performance matters.</strong></>}
          learnMoreLink="#"
          className="border-l-[1.2px] border-t-[1.2px] overflow-clip"
          svgClassName="bottom-[-17px] left-[-17px]"
        />
        <FeatureCard
          icon={CircleIcon}
          title="Speed"
          description={<><strong>Speed & memory really matter.</strong></>}
          learnMoreLink="#"
          className="border-l-[1.2px] border-t-[1.2px]"
          svgClassName="bottom-[-15px] right-[-15px]"
        />
        <RippleCard />
        <LanguageCard />
        <div className="hidden relative flex-col row-span-2 p-16 px-10 pt-10 md:block md:border-t-2 scrollarea"><div className="py-32 mx-auto"> <div className="flex gap-2 items-center my-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plug2 w-4 h-4"><path d="M9 2v6"></path><path d="M15 2v6"></path><path d="M12 17v5"></path><path d="M5 8h14"></path><path d="M6 11V8h12v3a6 6 0 1 1-12 0Z"></path></svg><p className="text-gray-600 dark:text-gray-400">Integrate</p></div><h2 className="text-3xl font-normal tracking-tighter">Integrate with a <strong>seconds. </strong></h2><p className="mt-2 text-base text-muted-foreground">We are always looking for ways to make your experience better. Always looking for feedback and suggestions!</p></div></div>
        <AccelerateCard />
        <OrbitingCard />
      </div>
      <PlusIcon className="bottom-[-15px] right-[-15px]" />
    </div>
  );
};

export default FeaturesSection;
