import Link from "next/link"

export default function LandingPage() {
  return (
       <section
        id="hero"
        className="relative mx-auto w-full pt-40 px-6 text-center md:px-8 min-h-[calc(100vh-40px)] overflow-hidden bg-[linear-gradient(to_bottom,#fff,#ffffff_50%,#e8e8e8_88%)] dark:bg-[linear-gradient(to_bottom,#000,#0000_30%,#898e8e_78%,#ffffff_99%_50%)] rounded-b-xl"
      >
        {/* Background elements */}
        <div className="absolute -z-1 inset-0 opacity-10 h-[600px] w-full bg-transparent bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_5rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)] h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[140%] -translate-x-1/2 rounded-[100%] border-[#B48CDE] bg-black bg-[radial-gradient(closest-side,#000_82%,#ffffff)]"></div>

        {/* Content */}
        <Link href="/">
          <h1 className="text-sm text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent border-[2px] border-white/5 rounded-3xl w-fit">
            <pre className="tracking-tight uppercase">
              Build products for everyone
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
                className="lucide lucide-chevron-right inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </pre>
          </h1>
        </Link>
        <h1 className="animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl dark:from-white dark:to-white/40">
          Arc is a new way of
          <br className="hidden md:block" /> creating software
        </h1>
        <p className="animate-fade-in mb-12 -translate-y-4 text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
          Beautifully designed, privacy-focused, and packed with features.
          <br className="hidden md:block" /> We care about your experience, not your data.
        </p>
        <Link href="/docs" className="flex justify-center">
          <button className="mt-[-20px] w-fit md:w-52 z-20 font-geist tracking-tighter text-center rounded-md text-md bg-gradient-to-br from-zinc-100 to-zinc-200 px-4 py-2 text-lg text-black ring-4 ring-zinc-700/90 ring-offset-4 ring-offset-zinc-100 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-zinc-500/70 flex items-center justify-center gap-2">
            Get Started
          </button>
        </Link>
      </section>


  )
}

