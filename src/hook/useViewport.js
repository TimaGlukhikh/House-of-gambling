import { useLayoutEffect, useState } from 'react'

export const useViewport = () => {
  const [viewport, setViewport] = useState({
    isWindow: false,
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  })

  useLayoutEffect(() => {
    const handleResize = () => {
      setViewport({
        isWindow: !!window,
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 568,
        isTablet: window.innerWidth >= 568 && window.innerWidth < 992,
        isDesktop: window.innerWidth >= 992,
      })
    }
    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return viewport
}