"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export const ParallaxBackground = () => {
    const { scrollY } = useScroll()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])
    
    // Smooth, slow parallax movement based on scroll
    const y1 = useTransform(scrollY, [0, 2000], [0, 400])
    const y2 = useTransform(scrollY, [0, 2000], [0, -300])
    const y3 = useTransform(scrollY, [0, 2000], [0, 250])

    if (!isMounted) return null

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
            <motion.div 
                style={{ y: y1 }}
                className="absolute top-[-10%] left-[-10%] w-[60vw] max-w-[800px] aspect-square bg-[#D3DEC8] rounded-full mix-blend-multiply filter blur-[120px] opacity-40"
            />
            
            <motion.div 
                style={{ y: y2 }}
                className="absolute top-[40%] right-[-10%] w-[50vw] max-w-[600px] aspect-square bg-[#C9D6BC] rounded-full mix-blend-multiply filter blur-[140px] opacity-30"
            />
            
            <motion.div 
                style={{ y: y3 }}
                className="absolute bottom-[-20%] left-[20%] w-[70vw] max-w-[900px] aspect-square bg-[#F2F7ED] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.85]"
            />
        </div>
    )
}
