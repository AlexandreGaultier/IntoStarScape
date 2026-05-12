<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const navOpen = ref(false)

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/systeme', label: 'Système' },
  { to: '/combat', label: 'Combat' },
  { to: '/univers', label: 'Univers' },
] as const

function closeNav() {
  navOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="header__inner container">
      <RouterLink to="/" class="header__brand" @click="closeNav">
        <span class="header__logo" aria-hidden="true" />
        <span class="header__title">StarScape</span>
      </RouterLink>

      <button
        type="button"
        class="header__toggle"
        :aria-expanded="navOpen"
        aria-controls="site-nav"
        @click="navOpen = !navOpen"
      >
        <span class="sr-only">Menu</span>
        <span class="header__burger" :data-open="navOpen" />
      </button>

      <nav id="site-nav" class="header__nav" :data-open="navOpen">
        <RouterLink
          v-for="item in links"
          :key="item.to"
          :to="item.to"
          class="header__link"
          active-class="header__link--active"
          @click="closeNav"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped src="./AppHeader.css"></style>
