"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const quotes = [
  {
    text: "As much as I loathed pain, progress did not seem to come without it. The only way to see the light at the end of the tunnel was to crawl through the mud in darkness.",
    author: "Rachel Reiland",
    source: "Author of Get Me Out of Here"
  },
  {
    text: "It is hard to be happy without a life worth living... You can't think yourself into new ways of acting; you can only act yourself into new ways of thinking.",
    author: "Dr. Marsha Linehan",
    source: "Creator of Dialectical Behavior Therapy"
  },
  {
    text: "I got diagnosed with BPD a few years ago... when somebody finally tells you, the weight of the world feels lifted off your shoulders. You feel so much better.",
    author: "Pete Davidson",
    source: "Actor & Comedian"
  },
  {
    text: "Even if everyone were to accept me and validate my pain, unless I can be compassionate toward my own distress, I will probably always feel alone.",
    author: "Kiera Van Gelder",
    source: "Author of The Buddha and the Borderline"
  }
]

export const HealingStories = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext()
        }, 8000)
        return () => clearInterval(timer)
    }, [currentIndex])

    const handleNext = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % quotes.length)
    }

    const handlePrev = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length)
    }

    const variants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 300 : -300,
                opacity: 0
            }
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 300 : -300,
                opacity: 0
            }
        }
    }

    return (
        <section className="w-full py-24 px-8 relative overflow-hidden bg-transparent">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                
                <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-12 text-center" style={{ fontFamily: "Playfair Display, serif" }}>
                    Stories of Healing
                </h3>

                <div className="relative w-full min-h-[300px] flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 }
                            }}
                            className="absolute w-full px-4 md:px-16"
                        >
                            <div className="bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(20,51,28,0.06)] rounded-3xl p-8 md:p-12 relative">
                                <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/20 rotate-180" />
                                <blockquote className="relative z-10 text-center">
                                    <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-medium mb-8">
                                        "{quotes[currentIndex].text}"
                                    </p>
                                    <footer className="flex flex-col items-center gap-1">
                                        <cite className="not-italic font-semibold text-primary">
                                            — {quotes[currentIndex].author}
                                        </cite>
                                        <span className="text-sm text-foreground/60">
                                            {quotes[currentIndex].source}
                                        </span>
                                    </footer>
                                </blockquote>
                                <Quote className="absolute bottom-6 right-6 w-10 h-10 text-primary/20" />
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button 
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-white text-foreground shadow-sm transition-all duration-200 z-20 hover:scale-110"
                        aria-label="Previous quote"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button 
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-white text-foreground shadow-sm transition-all duration-200 z-20 hover:scale-110"
                        aria-label="Next quote"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                    
                    {/* Indicators */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                        {quotes.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setDirection(idx > currentIndex ? 1 : -1)
                                    setCurrentIndex(idx)
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-primary w-4' : 'bg-primary/30'}`}
                                aria-label={`Go to quote ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
