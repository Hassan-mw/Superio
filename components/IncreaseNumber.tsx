"use client"

import { incNumDataType } from "@/Types/type"
import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export default function Test({start,end}:incNumDataType){
    console.log(start,end)
    const count = useMotionValue(start || 0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, end, { duration: 2})
        return () => controls.stop()
    }, [])

    return <motion.pre style={text}>{rounded}</motion.pre>
}

/**
 * ==============   Styles   ================
 */

const text = {
    fontSize: 42,
    color: "#202124",
}

