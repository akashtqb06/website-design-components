"use client"
import styles from './accelerate-card.module.css';
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
    <div className={`${styles.prefixnameb09498} dark:[border:0.01px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_rgb(255_255_255_/_0.05)_inset]`}>
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

      <div className={styles.prefixnameff6ba4}>
        <div className={styles.prefixnamee798b7}>
          <div className={styles.prefixname5275e9}>
            <LineChart className={styles.prefixname1bbd1c} />
            <p className={styles.prefixname616bcc}>Accelerate</p>
          </div>
          <p className={styles.prefixname299e79}>
            Grow with us and move forward with 10x. <strong>Accelerate as speed of light</strong>
          </p>
          <Card className={styles.prefixnamea6a98a}>
            <CardContent className={styles.prefixname19584e}>
              <div className={styles.prefixname1bb843}>
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
          <p className={styles.prefixname2c111c}>
            We are always looking for ways to make your experience better.
            <Link href="https://docs.arc-browser.app/themes-store/themes-marketplace" className={styles.prefixname4825ef}>
              Learn more
            </Link>
          </p>
        </div>
        <Link href="/download" className={styles.prefixname9fcbac}>
          <Button>Download arc now!</Button>
        </Link>
      </div>
      <Plus className={styles.prefixnameeab086} />
    </div>
  )
}

