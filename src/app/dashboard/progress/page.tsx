'use client'

import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"
const Page = () => {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 100)
    return () => { clearInterval(interval) }
  }, []);

  return (
    <div>
      <Progress value={progress} />
    </div>
  );
}

export default Page