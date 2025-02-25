"use client"

import { LineChart, Plus } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CartesianGrid, Line, LineChart as RechartsLineChart, XAxis, ResponsiveContainer } from "recharts"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const NUM_BEAMS = 8

export default function AccelerateCard() {
  return (
    <div className="relative md:grid border-t-2 border-l-[1.2px] dark:[border:0.01px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_rgb(255_255_255_/_0.05)_inset] md:col-span-2 md:grid-cols-2 row-span-2 overflow-hidden bg-background">
      {/* Animated Beams */}
      {[...Array(NUM_BEAMS)].map((_, i) => {
        const angle = (360 / NUM_BEAMS) * i
        return (
          <motion.div
            key={i}
            className="absolute origin-top-right top-0 -left-10 bg-gradient-to-b from-primary to-transparent blur-xl"
            initial={{ rotate: 0, width: "10px", height: "1000px" }}
            animate={{
              rotate: [angle, 360 + angle],
              width: ["10px", "30px", "10px"],
              height: ["1000px", "800px", "1000px"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        )
      })}

      <div className="relative flex top-0 left-0 flex-col p-8 h-full md:absolute md:px-10">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <LineChart className="w-4 h-4" />
            <p className="text-gray-600 dark:text-gray-400">Accelerate</p>
          </div>
          <p className="max-w-md text-2xl font-normal tracking-tighter">
            Grow with us and move forward with 10x. <strong>Accelerate as speed of light</strong>
          </p>
          <Card className="border-0 rounded-none shadow-none bg-transparent w-full">
            <CardContent className="p-0">
              <div className="w-full h-[300px]">
                {" "}
                {/* Set a fixed height for the chart container */}
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart
                      data={chartData}
                      margin={{
                        top: 20,
                        right: 10,
                        left: 10,
                        bottom: 20,
                      }}
                    >
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                      <Line
                        dataKey="desktop"
                        type="monotone"
                        stroke="var(--color-desktop)"
                        strokeWidth={2}
                        dot={false}
                      />
                      <Line dataKey="mobile" type="monotone" stroke="var(--color-mobile)" strokeWidth={2} dot={false} />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
          <p className="text-base text-muted-foreground">
            We are always looking for ways to make your experience better.
            <Link href="https://docs.arc-browser.app/themes-store/themes-marketplace" className="text-gray-50 ml-1">
              Learn more
            </Link>
          </p>
        </div>
        <Link href="/download" className="inline-block mt-4">
          <Button>Download arc now!</Button>
        </Link>
      </div>
      <Plus className="absolute w-8 h-8 bottom-[-15px] left-[-15px] text-black/20 dark:text-white/40" />
    </div>
  )
}

