<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="app">
    <a class="skip-link" href="#contenu">Aller au contenu</a>
    <AppHeader />
    <div id="contenu" class="app__main">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
    <AppFooter />
  </div>
</template>

<style src="./App.css"></style>
