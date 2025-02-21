import Link from "next/link"

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full mt-20 pt-40 px-6 text-center md:px-8 min-h-[calc(90vh-40px)] overflow-hidden rounded-b-xl border-t-0 border-white/20"
    >
      {/* Left SVG */}
      <svg
      className="absolute top-0 left-0 hidden pointer-events-none md:flex"
      width="579"
      height="511"
      viewBox="0 0 579 511"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style={{ mixBlendMode: 'lighten' }} filter="url(#filter0_f)">
        <ellipse cx="-5.14484" cy="-64.8282" rx="32.7783" ry="293.346" transform="rotate(20.0538 -5.14484 -64.8282)" fill="url(#paint0_linear)" fillOpacity="0.5" />
      </g>
      <g style={{ mixBlendMode: 'lighten' }} filter="url(#filter2_f)">
        <ellipse cx="198.822" cy="3.50066" rx="22.3794" ry="381.284" transform="rotate(-10 198.822 3.50066)" fill="url(#paint2_linear)" fillOpacity="0.5" />
      </g>
      <g style={{ mixBlendMode: 'lighten' }} filter="url(#filter3_f)">
        <ellipse cx="163.986" cy="-194.068" rx="22.3794" ry="180.667" transform="rotate(-10 163.986 -194.068)" fill="url(#paint3_linear)" fillOpacity="0.5" />
      </g>
      <g style={{ mixBlendMode: 'lighten' }} filter="url(#filter4_f)">
        <ellipse cx="88.5057" cy="41.4464" rx="22.25" ry="381.5" transform="rotate(5 88.5057 41.4464)" fill="url(#paint4_linear)" fillOpacity="0.5" />
      </g>
      <g style={{ mixBlendMode: 'lighten' }} filter="url(#filter5_f)">
        <ellipse cx="107.823" cy="-182.221" rx="321.5" ry="187.5" transform="rotate(5 107.823 -182.221)" fill="url(#paint5_linear)" fillOpacity="0.5" />
      </g>
      <defs>
        <filter id="filter0_f" x="-199.369" y="-429.622" width="388.449" height="729.588" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="44.5" result="effect1_foregroundBlur" />
        </filter>
        <filter id="filter2_f" x="40.0224" y="-461.011" width="317.6" height="929.023" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="44.5" result="effect1_foregroundBlur" />
        </filter>
        <filter id="filter3_f" x="36.6421" y="-461.034" width="254.687" height="533.932" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="44.5" result="effect1_foregroundBlur" />
        </filter>
        <filter id="filter4_f" x="-40.4595" y="-427.607" width="257.93" height="938.107" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="44.5" result="effect1_foregroundBlur" />
        </filter>
        <filter id="filter5_f" x="-362.878" y="-521.123" width="941.402" height="677.805" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur" />
        </filter>
        <linearGradient id="paint0_linear" x1="-5.14484" y1="-358.174" x2="-5.14484" y2="228.517" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>

      {/* Right SVG */}
      <svg
    className="absolute top-0 right-0 hidden pointer-events-none md:flex"
    width="900"
    height="699"
    viewBox="0 0 445 699"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      style={{
        mixBlendMode: "lighten",
      }}
      filter="url(#filter0_f_574_3050)"
    >
      <ellipse
        cx={336.291}
        cy={119.962}
        rx={32.7783}
        ry={293.346}
        transform="rotate(30.0538 336.291 119.962)"
        fill="url(#paint0_linear_574_3050)"
        fillOpacity={0.5}
      />
    </g>
    <g
      style={{
        mixBlendMode: "lighten",
      }}
      filter="url(#filter2_f_574_3050)"
    >
      <ellipse
        cx={525.295}
        cy={222.671}
        rx={22.3794}
        ry={381.284}
        fill="url(#paint2_linear_574_3050)"
        fillOpacity={0.5}
      />
    </g>
    <g
      style={{
        mixBlendMode: "lighten",
      }}
      filter="url(#filter3_f_574_3050)"
    >
      <ellipse
        cx={525.295}
        cy={22.0542}
        rx={22.3794}
        ry={180.667}
        fill="url(#paint3_linear_574_3050)"
        fillOpacity={0.5}
      />
    </g>
    <g
      style={{
        mixBlendMode: "lighten",
      }}
      filter="url(#filter4_f_574_3050)"
    >
      <ellipse
        cx={410.065}
        cy={240.884}
        rx={22.25}
        ry={381.5}
        transform="rotate(15 410.065 240.884)"
        fill="url(#paint4_linear_574_3050)"
        fillOpacity={0.5}
      />
    </g>
    <g
      style={{
        mixBlendMode: "lighten",
      }}
      filter="url(#filter5_f_574_3050)"
    >
      <ellipse
        cx={467.928}
        cy={23.9689}
        rx={321.5}
        ry={187.5}
        transform="rotate(15 467.928 23.9689)"
        fill="url(#paint5_linear_574_3050)"
        fillOpacity={0.5}
      />
    </g>
    <g
      style={{
        mixBlendMode: "lighten",
      }}
      filter="url(#filter6_f_574_3050)"
    >
      <ellipse
        cx={491.74}
        cy={-64.8963}
        rx={160.5}
        ry={95.5}
        transform="rotate(15 491.74 -64.8963)"
        fill="url(#paint6_linear_574_3050)"
        fillOpacity={0.5}
      />
    </g>
    <g
      style={{
        mixBlendMode: "lighten",
      }}
      filter="url(#filter7_f_574_3050)"
    >
      <ellipse
        cx={489.863}
        cy={-57.8934}
        rx={135}
        ry={80.25}
        transform="rotate(15 489.863 -57.8934)"
        fill="url(#paint7_linear_574_3050)"
        fillOpacity={0.5}
      />
    </g>
    <defs>
      <filter
        id="filter0_f_574_3050"
        x={97.6377}
        y={-223.485}
        width={477.308}
        height={686.892}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={44.5}
          result="effect1_foregroundBlur_574_3050"
        />
      </filter>
      <filter
        id="filter1_f_574_3050"
        x={274.818}
        y={-245.321}
        width={338.241}
        height={744.685}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={44.5}
          result="effect1_foregroundBlur_574_3050"
        />
      </filter>
      <filter
        id="filter2_f_574_3050"
        x={413.916}
        y={-247.613}
        width={222.759}
        height={940.567}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={44.5}
          result="effect1_foregroundBlur_574_3050"
        />
      </filter>
      <filter
        id="filter3_f_574_3050"
        x={413.916}
        y={-247.613}
        width={222.759}
        height={539.335}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={44.5}
          result="effect1_foregroundBlur_574_3050"
        />
      </filter>
      <filter
        id="filter4_f_574_3050"
        x={219.992}
        y={-216.663}
        width={380.146}
        height={915.093}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={44.5}
          result="effect1_foregroundBlur_574_3050"
        />
      </filter>
      <filter
        id="filter5_f_574_3050"
        x={3.56885}
        y={-325.391}
        width={928.719}
        height={698.72}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={75}
          result="effect1_foregroundBlur_574_3050"
        />
      </filter>
      <filter
        id="filter6_f_574_3050"
        x={184.728}
        y={-316.089}
        width={614.024}
        height={502.385}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={75}
          result="effect1_foregroundBlur_574_3050"
        />
      </filter>
      <filter
        id="filter7_f_574_3050"
        x={207.8}
        y={-292.941}
        width={564.126}
        height={470.095}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={75}
          result="effect1_foregroundBlur_574_3050"
        />
      </filter>
      <linearGradient
        id="paint0_linear_574_3050"
        x1={336.291}
        y1={-173.384}
        x2={336.291}
        y2={413.307}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint1_linear_574_3050"
        x1={443.939}
        y1={-166.229}
        x2={443.939}
        y2={420.271}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint2_linear_574_3050"
        x1={525.295}
        y1={-158.613}
        x2={525.295}
        y2={603.955}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint3_linear_574_3050"
        x1={525.295}
        y1={-158.613}
        x2={525.295}
        y2={202.721}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint4_linear_574_3050"
        x1={410.065}
        y1={-140.616}
        x2={410.065}
        y2={622.384}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint5_linear_574_3050"
        x1={467.928}
        y1={-163.531}
        x2={467.928}
        y2={211.469}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint6_linear_574_3050"
        x1={491.74}
        y1={-160.396}
        x2={491.74}
        y2={30.6037}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint7_linear_574_3050"
        x1={489.863}
        y1={-138.143}
        x2={489.863}
        y2={22.3566}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>

      {/* Grid background */}
      <div className="absolute -z-1 inset-0 opacity-15 h-[600px] w-full bg-transparent bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_5rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="mt-[-75px]">
        <h1 className="animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl dark:from-white dark:to-white/40">
          Arc is a new way of
          <br className="hidden md:block" /> creating software
        </h1>
        <p className="animate-fade-in mb-12 -translate-y-4 text-balance text-lg tracking-tight text-black/60 dark:text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
          Beautifully designed, privacy-focused, and packed with features.
          <br className="hidden md:block" /> We care about your experience, not your data.
        </p>
        <Link href="/download" className="flex justify-center">
          <button className="mt-[-20px] w-full md:w-52 z-20 font-geist tracking-tighter text-center rounded-md text-md bg-gradient-to-br from-zinc-100 to-zinc-200 px-4 py-2 text-lg text-black ring-4 ring-zinc-700/90 ring-offset-4 ring-offset-zinc-100 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-zinc-500/70 flex items-center justify-center gap-2">
            Get Started
          </button>
        </Link>
        <div className="animate-fade-up relative mt-32 opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_10%,transparent)]"></div>
      </div>
    </section>
  )
}

export default HeroSection

