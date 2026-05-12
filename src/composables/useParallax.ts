import { onMounted, onUnmounted, type Ref } from 'vue'

type ParallaxOptions = {
  /** Multiplicateur du décalage (plus bas = plus subtil). */
  intensity?: number
}

/**
 * Met à jour `--parallax-y` sur l’élément racine pour animer les calques en CSS.
 * Respecte `prefers-reduced-motion`.
 */
export function useParallax(root: Ref<HTMLElement | null>, options: ParallaxOptions = {}) {
  const intensity = options.intensity ?? 0.35
  let raf = 0
  let reduceMotion = false

  const tick = () => {
    const el = root.value
    if (!el || reduceMotion) return

    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight
    const centerOffset = rect.top + rect.height / 2 - vh / 2
    const y = -centerOffset * intensity
    el.style.setProperty('--parallax-y', `${y}px`)
  }

  const onFrame = () => {
    cancelAnimationFrame(raf)
    raf = requestAnimationFrame(tick)
  }

  onMounted(() => {
    reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      root.value?.style.setProperty('--parallax-y', '0px')
      return
    }

    tick()
    window.addEventListener('scroll', onFrame, { passive: true })
    window.addEventListener('resize', onFrame, { passive: true })
  })

  onUnmounted(() => {
    cancelAnimationFrame(raf)
    window.removeEventListener('scroll', onFrame)
    window.removeEventListener('resize', onFrame)
  })
}
