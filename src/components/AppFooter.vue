<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__inner container">
      <p class="footer__note">
        StarScape — JDR science-fiction tactique &amp; narratif. Site source de vérité en cours
        d’enrichissement.
      </p>
      <p class="footer__copy">© {{ year }} — usage table privée / communautaire.</p>
    </div>
  </footer>
</template>

<style scoped src="./AppFooter.css"></style>
