import styles from './features-section.module.css';
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
    <div className={styles.prefixname188e89}>
      <Icon className={styles.prefixname1bbd1c} />
      <p className={styles.prefixname616bcc}>{title}</p>
    </div>
    <div className={styles.prefixname2c9310}>
      <div className={styles.prefixnameb39019}>
        <div className={styles.prefixname190456}>
          <p className={styles.prefixname7c92b6}>{description}</p>
        </div>
      </div>
      <p className={styles.prefixname0c587e}>
        We are constantly creating an engine and settings to make it faster than ever. Make it faster than ever and ever
        <a className={styles.prefixname4825ef} href={learnMoreLink} target="_blank" rel="noreferrer">
          Learn more
        </a>
      </p>
    </div>
  </div>
);

const FeaturesSection: FC = () => {
  return (
    <div className={styles.prefixname825f4f}>
      <PlusIcon className={styles.prefixname9da0b9} />
      <div className={styles.prefixname8a94dd}>
        <FeatureCard
          icon={ChartIcon}
          title="Growth"
          description={<><strong>We do make sure you grow</strong></>}
          learnMoreLink="#"
          className={styles.prefixnameef6007}
          svgClassName="bottom-[-17px] left-[-17px]"
        />
        <FeatureCard
          icon={LockIcon}
          title="Privacy First"
          description={<><strong>Privacy is something we prioritize</strong></>}
          learnMoreLink="#"
          className={styles.prefixname70c94a}
          svgClassName="bottom-[-17px] left-[-17px]"
        />
        <FeatureCard
          icon={ShieldCheckIcon}
          title="Secured"
          description={<><strong>Security should be considered.</strong></>}
          learnMoreLink="#"
          className={styles.prefixname710e9a}
          svgClassName="bottom-[-17px] left-[-17px]"
        />
        <FeatureCard
          icon={PlugZapIcon}
          title="Interoperability"
          description={<><strong>Performance is key.</strong></>}
          learnMoreLink="#"
          className={styles.prefixnamea74c59}
          svgClassName="bottom-[-17px] left-[-17px]"
        />
        <FeatureCard
          icon={RabbitIcon}
          title="Performance"
          description={<><strong>Performance matters.</strong></>}
          learnMoreLink="#"
          className={styles.prefixname3581c2}
          svgClassName="bottom-[-17px] left-[-17px]"
        />
        <FeatureCard
          icon={CircleIcon}
          title="Speed"
          description={<><strong>Speed & memory really matter.</strong></>}
          learnMoreLink="#"
          className={styles.prefixname33ebd8}
          svgClassName="bottom-[-15px] right-[-15px]"
        />
        <RippleCard />
        <LanguageCard />
        <div className={`${styles.prefixname0667b1} scrollarea`}><div className={styles.prefixnameed9cc3}> <div className={styles.prefixnameca6a84}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${styles.prefixnamec373dd} lucide lucide-plug2`}><path d="M9 2v6"></path><path d="M15 2v6"></path><path d="M12 17v5"></path><path d="M5 8h14"></path><path d="M6 11V8h12v3a6 6 0 1 1-12 0Z"></path></svg><p className={styles.prefixname616bcc}>Integrate</p></div><h2 className={styles.prefixnamefbb04d}>Integrate with a <strong>seconds. </strong></h2><p className={styles.prefixname29a7b3}>We are always looking for ways to make your experience better. Always looking for feedback and suggestions!</p></div></div>
        <AccelerateCard />
        <OrbitingCard />
      </div>
      <PlusIcon className={styles.prefixname0dc2cd} />
    </div>
  );
};

export default FeaturesSection;
