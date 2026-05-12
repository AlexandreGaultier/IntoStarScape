<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ParallaxHero from '../components/ParallaxHero.vue'

const heroImage = ''
</script>

<template>
  <div class="page-home">
    <ParallaxHero :image-url="heroImage || undefined">
      <p class="page-home__tag tag">JDR science-fiction</p>
      <h1 class="page-home__title">StarScape</h1>
      <p class="page-home__lead">
        Un univers de <strong>Frontière</strong>, des contrats dangereux, et un système de dés clair :
        <strong>pool de d8</strong>, succès sur 6+, tension tactique.
      </p>
      <div class="page-home__cta">
        <RouterLink to="/systeme" class="btn btn--primary">Découvrir le système</RouterLink>
        <RouterLink to="/univers" class="btn btn--ghost">Lire l’univers</RouterLink>
      </div>
    </ParallaxHero>

    <section class="page-home__section container">
      <h2>Trois piliers de table</h2>
      <div class="page-home__grid">
        <article class="card page-home__card">
          <h3>Règles limpides</h3>
          <p>
            Attribut + compétence en dés, difficultés lisibles, résultats qui poussent la narration :
            réussite, bonus, ou échec chargé.
          </p>
          <RouterLink to="/systeme" class="card__link">Voir les tests</RouterLink>
        </article>
        <article class="card page-home__card">
          <h3>Combat nerveux</h3>
          <p>
            Tours courts, battlemap lisible, armes à portées simples, PV / boucliers / armures pour
            des affrontements haletants sans lourdeur.
          </p>
          <RouterLink to="/combat" class="card__link">Feuille de combat</RouterLink>
        </article>
        <article class="card page-home__card">
          <h3>Science-fiction qui respire</h3>
          <p>
            Stations-cités cyberpunk, corporations voraces, scientifiques inquiétants, Outriders
            libres comme l’espace…
          </p>
          <RouterLink to="/univers" class="card__link">Plonger dans le lore</RouterLink>
        </article>
      </div>
    </section>

    <section class="page-home__band" aria-labelledby="outriders-title">
      <div class="page-home__band-inner container">
        <div>
          <h2 id="outriders-title">Vous êtes des Outriders</h2>
          <p class="prose">
            Mercenaires de l’espace, équipage soudé, contrats négociés dans les bars des
            stations-cités. Ce site centralise les règles et le lore : ajoutez-y images, scénarios et
            errata au fil de vos parties.
          </p>
        </div>
        <ul class="page-home__ticks">
          <li>Coopération &amp; stratégie</li>
          <li>Maquettes papier &amp; hauteurs (objectif table)</li>
          <li>Équilibre vivant — valeurs sujettes aux playtests</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style src="./HomeView.css"></style>
