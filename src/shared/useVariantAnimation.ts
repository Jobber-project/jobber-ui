import { useEffect, useRef, useState } from 'react'

import { usePrevious } from './hooks'

function useVariantAnimation(
  variant: 'default' | 'success' | 'warning' | 'error',
) {
  const prevVariant = usePrevious(variant)

  const ref = useRef<HTMLElement | null>(null)

  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false)

  useEffect(() => {
    if (variant !== prevVariant && !shouldAnimate) {
      setShouldAnimate(true)
    }
  }, [variant, prevVariant, shouldAnimate])

  useEffect(() => {
    function handleAnimationEnd() {
      if (shouldAnimate) setShouldAnimate(false)
    }

    const elem = ref.current

    elem?.addEventListener('animationend', handleAnimationEnd)

    return () => {
      elem?.removeEventListener('animationend', handleAnimationEnd)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    ref,
    shouldAnimate,
  }
}

export default useVariantAnimation
