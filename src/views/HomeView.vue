<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ParallaxHero from '../components/ParallaxHero.vue'

/** Visuel hero (paysage conseillé). */
const heroIllustration = 'src/assets/images/index_exploration.jpg'

/** Portrait à droite de la section Outriders. */
const bandPortraitUrl = 'src/assets/images/univers_outriders.jpg'
const bandImgBroken = ref(false)

function onBandImgError() {
  bandImgBroken.value = true
}
</script>

<template>
  <div class="page-home">
    <ParallaxHero :illustration-url="heroIllustration">
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
        <article class="card page-home__card page-home__card--systeme">
          <h3>Règles limpides</h3>
          <p>
            Attribut + compétence en dés, difficultés lisibles, résultats qui poussent la narration :
            réussite, bonus, ou échec chargé.
          </p>
          <RouterLink to="/systeme" class="card__link card__link--systeme">Voir les tests</RouterLink>
        </article>
        <article class="card page-home__card page-home__card--combat">
          <h3>Combat nerveux</h3>
          <p>
            Tours courts, battlemap lisible, armes à portées simples, PV / boucliers / armures pour
            des affrontements haletants sans lourdeur.
          </p>
          <RouterLink to="/combat" class="card__link card__link--combat">Feuille de combat</RouterLink>
        </article>
        <article class="card page-home__card page-home__card--lore">
          <h3>Science-fiction qui respire</h3>
          <p>
            Stations-cités cyberpunk, corporations voraces, scientifiques inquiétants, Outriders
            libres comme l’espace…
          </p>
          <RouterLink to="/univers" class="card__link card__link--lore">Plonger dans le lore</RouterLink>
        </article>
      </div>
    </section>

    <section class="page-home__band" aria-labelledby="outriders-title">
      <div class="page-home__band-inner container">
        <div class="page-home__outriders">
          <h2 id="outriders-title">Vous êtes des Outriders</h2>
          <p>
            Les Outriders sont des mercenaires de l’espace. Ils vivent en petits groupes à bord d’un
            vaisseau spatial qui leur sert à la fois de maison, de moyen de transport et d’outil de
            survie.
          </p>
          <p>Les joueurs incarnent <strong>tous</strong> des Outriders.</p>
          <p>
            Ils récupèrent des missions dans les stations-cités, proposées par les Corporations, les
            Scientifiques, les Neutres… et parfois même par les Aliens. Ces contrats se négocient le
            plus souvent dans les bars, véritables points de ralliement des Outriders.
          </p>
          <p class="page-home__outriders-lead" style="color: var(--text-heading)">Libres.</p>
          <p>
            Ils peuvent choisir de travailler pour n’importe quelle faction, même si leurs actions
            sont moralement discutables, ce qui est souvent le cas des Corporations et de nombreux
            Scientifiques. Ils sont également libres de trahir leurs employeurs s’ils estiment qu’une
            autre cause est plus juste, au risque de voir leur réputation personnelle lourdement
            impactée.
          </p>
        </div>
        <figure class="page-home__band-figure" aria-hidden="true">
          <img
            v-if="!bandImgBroken"
            class="page-home__band-img"
            :src="bandPortraitUrl"
            alt=""
            loading="lazy"
            decoding="async"
            @error="onBandImgError"
          />
        </figure>
      </div>
    </section>
  </div>
</template>

<style src="./HomeView.css"></style>
