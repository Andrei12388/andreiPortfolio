'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'

// Configure the progress bar appearance
nProgress.configure({
  showSpinner: false,
  speed: 400,
  minimum: 0.15,
  easing: 'ease',
})

export default function ProgressBar() {
  const pathname = usePathname()
  const isFirstRender = useRef(true)
  nProgress.start()
  useEffect(() => {
    // Skip progress on initial render (first load)
   
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    // Start the progress bar
    nProgress.start()

    // Smoothly complete after navigation
    const timer = setTimeout(() => {
      nProgress.done(true)
    }, 400)

    return () => {
      clearTimeout(timer)
    }
  }, [pathname])

  return null
}
