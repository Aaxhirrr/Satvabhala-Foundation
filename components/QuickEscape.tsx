"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ShieldAlert, X } from "lucide-react"
import { useState, useEffect } from "react"

export const QuickEscape = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 2000)
        
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleEscape()
            }
        }
        window.addEventListener("keydown", handleKeyDown)
        
        return () => {
            clearTimeout(timer)
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    const handleEscape = () => {
        // Redirect to a completely neutral site immediately
        window.location.replace("https://www.google.com")
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    className="fixed bottom-6 right-6 z-[60] group"
                >
                    <button
                        onClick={handleEscape}
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group"
                        title="Quickly hide this site (Esc)"
                    >
                        <ShieldAlert className="w-5 h-5 animate-pulse" />
                        <span className="font-bold text-sm tracking-tight uppercase">Quick Escape</span>
                        <div className="ml-1 px-1.5 py-0.5 rounded bg-white/20 text-[10px] font-mono">ESC</div>
                    </button>
                    
                    {/* Tooltip hint */}
                    <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="bg-foreground text-background text-[11px] py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap">
                            Quickly redirect to Google
                        </div>
                        <div className="w-2 h-2 bg-foreground rotate-45 mx-auto -mt-1 absolute right-6"></div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
