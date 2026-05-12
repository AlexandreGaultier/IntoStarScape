<script setup lang="ts">
import { ref } from 'vue'
import { useParallax } from '../composables/useParallax'

const props = withDefaults(
  defineProps<{
    /** URL d’image (ex: `/images/hero-accueil.jpg`) — optionnel, le dégradé reste en secours. */
    imageUrl?: string
    intensity?: number
  }>(),
  {
    imageUrl: '',
    intensity: 0.28,
  },
)

const root = ref<HTMLElement | null>(null)
useParallax(root, { intensity: props.intensity })
</script>

<template>
  <section ref="root" class="p-hero">
    <div class="p-hero__glow" aria-hidden="true" />
    <div
      class="p-hero__bg"
      :style="imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined"
      aria-hidden="true"
    />
    <div class="p-hero__grid" aria-hidden="true" />
    <div class="p-hero__content container">
      <slot />
    </div>
  </section>
</template>

<style scoped src="./ParallaxHero.css"></style>
