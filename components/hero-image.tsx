import Image from "next/image";
import { BorderBeam } from "./ui/border-beam";

export default function HeroImage() {
  return (
    <div className="relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]">
      <div className="rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:animate-image-glow">
        <Image
          src="/hero-dark.png"
          alt="Hero Image"
          width={800}
          height={600}
          className="hidden relative w-full h-full rounded-[inherit] border object-contain dark:block"
        />
        <Image
          src="/hero-light.png"
          alt="Hero Image"
          width={800}
          height={600}
          className="block relative w-full h-full rounded-[inherit] border object-contain dark:hidden"
        />
        <BorderBeam duration={16} size={150} className="from-cyan-500 via-cyan-200 to-cyan-100" />
      </div>
    </div>
  );
}
