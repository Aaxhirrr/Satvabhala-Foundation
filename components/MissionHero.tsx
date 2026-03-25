"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

type StatItem = {
    value: string
    description: string
    delay: number
}
type DataPoint = {
    id: number
    left: number
    top: number
    height: number
    direction: "up" | "down"
    delay: number
}
const stats: StatItem[] = [
    {
        value: "1.6%",
        description: "Popultion estimated\nto have BPD",
        delay: 0,
    },
    {
        value: "75%",
        description: "Women diagnosed\n(approximate)",
        delay: 0.2,
    },
    {
        value: "Resources",
        description: "Statistics, Help,\nand Community",
        delay: 0.4,
    },
    {
        value: "Support",
        description: "For families and\nloved ones",
        delay: 0.6,
    },
]
const generateDataPoints = (): DataPoint[] => {
    const points: DataPoint[] = []
    const baseLeft = 1
    const spacing = 32
    for (let i = 0; i < 50; i++) {
        const direction = i % 2 === 0 ? "down" : "up"
        const height = Math.floor(Math.random() * 120) + 88
        const top = direction === "down" ? Math.random() * 150 + 250 : Math.random() * 100 - 80
        points.push({
            id: i,
            left: baseLeft + i * spacing,
            top,
            height,
            direction,
            delay: i * 0.035,
        })
    }
    return points
}

// @component: MissionHero
export const MissionHero = () => {
    const router = useRouter()
    const [isVisible, setIsVisible] = useState(false)
    const [dataPoints] = useState<DataPoint[]>(generateDataPoints())
    const [typingComplete, setTypingComplete] = useState(false)
    useEffect(() => {
        setIsVisible(true)
        const timer = setTimeout(() => setTypingComplete(true), 1000)
        return () => clearTimeout(timer)
    }, [])

    // @return
    return (
        <div className="w-full overflow-hidden bg-transparent">
            <div className="mx-auto max-w-7xl px-8 py-24 pt-16">
                <div className="grid grid-cols-12 gap-5 gap-y-16">
                    <div className="col-span-12 md:col-span-6 relative z-10">
                        <div
                            className="relative h-6 inline-flex items-center font-mono uppercase text-xs text-primary mb-12 px-2"
                            style={{
                                fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                            }}
                        >
                            <div className="flex items-center gap-0.5 overflow-hidden">
                                <motion.span
                                    initial={{
                                        width: 0,
                                    }}
                                    animate={{
                                        width: "auto",
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        ease: "easeOut",
                                    }}
                                    className="block whitespace-nowrap overflow-hidden text-primary relative z-10"
                                >
                                    Hope & Healing
                                </motion.span>
                                <motion.span
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: typingComplete ? [1, 0, 1, 0] : 0,
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "linear",
                                    }}
                                    className="block w-1.5 h-3 bg-primary ml-0.5 relative z-10 rounded-sm"
                                />
                            </div>
                        </div>

                        <h2
                            className="text-[40px] font-normal leading-tight tracking-tight text-black mb-6 font-headings font-bold"
                        >
                            Supporting those affected by Borderline Personality Disorder{" "}
                            <span
                                className="opacity-40"
                                style={{
                                    fontWeight: "400",
                                    fontSize: "40px",
                                }}
                            >
                                through awareness, statistics, and community resources.
                            </span>
                        </h2>

                        <p
                            className="text-lg leading-6 text-black/60 mt-0 mb-6"
                        >
                            Our mission is to de-stigmatize BPD and provide a comprehensive resource hub for patients, families, and researchers.
                        </p>

                        <button
                            onClick={() => router.push("/about")}
                            className="relative inline-flex justify-center items-center leading-4 text-center cursor-pointer whitespace-nowrap outline-none font-medium h-9 text-black bg-white/50 backdrop-blur-sm shadow-[0_1px_1px_0_rgba(255,255,255,0),0_0_0_1px_rgba(87,90,100,0.12)] transition-all duration-200 ease-in-out rounded-lg px-4 mt-5 text-sm group hover:shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(87,90,100,0.18)]">
                            <span className="relative z-10 flex items-center gap-1">
                                Learn about us
                                <ArrowRight className="w-4 h-4 -mr-1 transition-transform duration-150 group-hover:translate-x-1" />
                            </span>
                        </button>
                    </div>

                    <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end items-center relative min-h-[300px] md:min-h-[500px]">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, scaleX: -1 }}
                            animate={{ opacity: 1, scale: 1, scaleX: -1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="absolute md:-right-[15%] w-[120%] max-w-[700px] aspect-square mix-blend-multiply opacity-90 pointer-events-none"
                            style={{
                                WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 72%)",
                                maskImage: "radial-gradient(ellipse at center, black 40%, transparent 72%)"
                            }}
                        >
                            <Image 
                                src="/leaf_background.png" 
                                alt="Decorative abstract leaf" 
                                fill 
                                className="object-contain scale-[0.95] rotate-12 transform-gpu"
                                priority
                            />
                        </motion.div>
                    </div>

                    <div className="col-span-12">
                        <div className="overflow-visible pb-5">
                            <div className="grid grid-cols-12 gap-3 md:gap-5 relative z-10">
                                {stats.map((stat, index) => (
                                    <div key={index} className="col-span-6 md:col-span-3">
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: 20,
                                                filter: "blur(4px)",
                                            }}
                                            animate={
                                                isVisible
                                                    ? {
                                                        opacity: [0, 1, 1],
                                                        y: [20, 0, 0],
                                                        filter: ["blur(4px)", "blur(0px)", "blur(0px)"],
                                                    }
                                                    : {}
                                            }
                                            transition={{
                                                duration: 1.5,
                                                delay: stat.delay,
                                                ease: [0.1, 0, 0.1, 1],
                                            }}
                                            className="flex flex-col gap-1 md:gap-2 p-4 md:p-6 rounded-2xl bg-white/50 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(20,51,28,0.04)] hover:shadow-[0_8px_32px_0_rgba(20,51,28,0.08)] transition-all duration-300"
                                        >
                                            <span
                                                className="text-xl md:text-2xl font-medium leading-tight tracking-tight text-primary break-words"
                                            >
                                                {stat.value}
                                            </span>
                                            <p className="text-xs leading-[13.2px] text-muted-foreground m-0 whitespace-pre-line">
                                                {stat.description}
                                            </p>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
