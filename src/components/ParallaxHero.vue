<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useParallax } from '../composables/useParallax'

const props = withDefaults(
  defineProps<{
    /** URL finale de l’image (idéalement via `import img from '…'` pour que Vite l’embarque au build). */
    illustrationUrl?: string
    /** Texte alternatif si l’image n’est pas purement décorative. */
    illustrationAlt?: string
    intensity?: number
  }>(),
  {
    illustrationUrl: '',
    illustrationAlt: '',
    intensity: 0.28,
  },
)

const root = ref<HTMLElement | null>(null)
useParallax(root, { intensity: props.intensity })

const imgBroken = ref(false)

watch(
  () => props.illustrationUrl,
  () => {
    imgBroken.value = false
  },
)

function onImgError() {
  imgBroken.value = true
}

const showPhoto = computed(() => Boolean(props.illustrationUrl) && !imgBroken.value)
</script>

<template>
  <section ref="root" class="p-hero">
    <div class="p-hero__glow" aria-hidden="true" />
    <div class="p-hero__bg" aria-hidden="true" />
    <div class="p-hero__grid" aria-hidden="true" />
    <div class="p-hero__inner container">
      <div class="p-hero__text">
        <slot />
      </div>
      <figure
        class="p-hero__figure"
        :class="{ 'p-hero__figure--photo': showPhoto }"
        :aria-hidden="showPhoto ? !illustrationAlt : true"
      >
        <img
          v-if="showPhoto"
          class="p-hero__img"
          :src="illustrationUrl"
          :alt="illustrationAlt || ''"
          loading="eager"
          decoding="async"
          @error="onImgError"
        />
      </figure>
    </div>
  </section>
</template>

<style scoped src="./ParallaxHero.css"></style>
