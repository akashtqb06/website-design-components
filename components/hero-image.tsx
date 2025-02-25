import styles from './hero-image.module.css';
import Image from "next/image";
import { BorderBeam } from "./ui/border-beam";

export default function HeroImage() {
  return (
    <div className={`${styles.prefixnamef4c36b} [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]`}>
      <div className={`${styles.prefixnamebeb5d6} border before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:animate-image-glow`}>
        <Image
          src="./hero-dark.png"
          alt="Hero Image"
          width={800}
          height={600}
          className={`${styles.prefixname2251ec} border object-contain`}
        />
        <Image
          src="./hero-light.png"
          alt="Hero Image"
          width={800}
          height={600}
          className={`${styles.prefixname173ac3} border object-contain`}
        />
        <BorderBeam duration={16} size={150} className={styles.prefixname661847} />
      </div>
    </div>
  );
}
