import { Terminal } from "lucide-react"
import Link from "next/link"

export default function LanguageCard() {
  const techIcons = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" fill="currentColor">
          <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
            <path d="M82.702 21.231L46.734 0.465c-1.073-0.619-2.395-0.619-3.468 0L7.298 21.231c-1.073 0.62-1.734 1.764-1.734 3.003v41.532c0 1.239 0.661 2.384 1.734 3.003l35.968 20.766c1.073 0.62 2.395 0.62 3.468 0l35.968-20.766c1.073-0.62 1.734-1.764 1.734-3.003V24.234C84.436 22.995 83.775 21.85 82.702 21.231zM37.888 67.5c-12.407 0-22.5-10.093-22.5-22.5c0-12.407 10.093-22.5 22.5-22.5c5.354 0 10.544 1.918 14.614 5.399l-5.961 6.97c-2.411-2.061-5.485-3.197-8.654-3.197c-7.35 0-13.329 5.979-13.329 13.329c0 7.349 5.979 13.328 13.329 13.328c3.17 0 6.243-1.135 8.654-3.197l5.961 6.97C48.433 65.583 43.242 67.5 37.888 67.5zM58.892 46.96h-3.43v3.43h-3.92v-3.43h-3.43v-3.92h3.43v-3.43h3.92v3.43h3.43V46.96zM74.612 46.96h-3.43v3.43h-3.92v-3.43h-3.43v-3.92h3.43v-3.43h3.92v3.43h3.43V46.96z" />
          </g>
        </svg>
      ),
    },
    {
      icon: (
        <svg
          fill="currentColor"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 512 512"
        >
          <path d="M194.734,246.879h121.768c33.9,0,60.956-27.908,60.956-61.95V68.846c0-33.035-27.87-57.855-60.956-63.371 c-20.943-3.484-42.673-5.069-63.51-4.971c-20.845,0.097-40.74,1.874-58.258,4.971c-51.586,9.117-60.952,28.191-60.952,63.371 v46.463H255.69v15.486H133.782h-45.75c-35.434,0-66.459,21.295-76.158,61.808c-11.192,46.435-11.694,75.409,0,123.898 c8.666,36.088,29.359,61.807,64.79,61.807h41.917v-55.699C118.581,282.37,153.39,246.879,194.734,246.879z M187.063,84.333 c-12.636,0-22.877-10.355-22.877-23.161c0-12.849,10.241-23.3,22.877-23.3c12.594,0,22.873,10.451,22.873,23.3 C209.936,73.979,199.658,84.333,187.063,84.333z M499.37,192.603c-8.761-35.27-25.484-61.808-60.96-61.808h-45.75v54.134 c0,41.972-35.582,77.292-76.158,77.292H194.734c-33.349,0-60.952,28.547-60.952,61.954v116.079 c0,33.037,28.726,52.476,60.952,61.943c38.589,11.353,75.59,13.409,121.768,0c30.688-8.876,60.956-26.764,60.956-61.943v-46.461 H255.69v-15.486h121.768h60.952c35.431,0,48.638-24.715,60.96-61.807C512.092,278.314,511.549,241.589,499.37,192.603z M324.178,424.766c12.64,0,22.873,10.356,22.873,23.156c0,12.85-10.233,23.305-22.873,23.305 c-12.595,0-22.877-10.455-22.877-23.305C301.301,435.122,311.583,424.766,324.178,424.766z" />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          fill="currentColor"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z" />
        </svg>
      ),
    },
    {
      icon: (
        <svg viewBox="0 0 180 180" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
          <mask
            id="mask0_408_139"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="180"
            height="180"
          >
            <circle cx="90" cy="90" r="90" fill="black" />
          </mask>
          <g mask="url(#mask0_408_139)">
            <circle cx="90" cy="90" r="87" fill="currentColor" stroke="white" strokeWidth="6" />
            <path
              d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
              fill="currentColor"
            />
            <rect x="115" y="54" width="12" height="72" fill="currentColor" />
          </g>
        </svg>
      ),
    },
    // Add other tech icons here...
  ]

  return (
  <div className="relative grid-cols-2 row-span-1 md:grid md:col-span-3 border-t-[1.2px] overflow-clip">
    <div className="flex top-0 left-0 flex-col p-16 pt-6 h-full md:absolute md:px-10">
      <div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <Terminal className="w-4 h-4" />
            <p className="text-gray-600 dark:text-gray-400">Language Agnostic</p>
          </div>

          <p className="max-w-md text-2xl font-normal tracking-tighter">
            Grow with us and move forward with 10x. <strong>Accelerate as speed of light</strong>
          </p>

          <div className="flex flex-col gap-3 md:flex-col">
            <p className="mt-1 text-base text-muted-foreground">
              We are always looking for ways to make your experience better. With stackable themes that can be mixed and
              matched, you can create a browser that is truly yours.{" "}
              <Link href="https://docs.arc-browser.app/themes-store/themes-marketplace" className="text-gray-50">
                Learn more
              </Link>
            </p>

            <div className="flex mt-[-10px]">
              <div className="flex gap-7 flex-wrap mt-3 items-center max-w-4xl">
                {techIcons.map((tech, index) => (
                  <span
                    key={index}
                    className="transform duration-300 hover:rotate-12 transition-transform"
                    data-state="closed"
                  >
                    {tech.icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

