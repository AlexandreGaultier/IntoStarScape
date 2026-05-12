<script setup lang="ts">
import ParallaxHero from '../components/ParallaxHero.vue'
import heroIllustration from '../assets/images/index_hero_background2.jpg'
</script>

<template>
  <article class="systeme">
    <ParallaxHero :illustration-url="heroIllustration" :intensity="0.22">
      <p class="systeme-mark tag">Mécaniques</p>
      <h1 class="systeme-title">Système de jeu</h1>
      <p class="systeme-lead prose">
        StarScape repose sur un <strong>pool de dés + succès</strong> : rapide à expliquer, riche en
        narration.
      </p>
    </ParallaxHero>

    <div class="container systeme-main">
      <section aria-labelledby="tests-title">
        <h2 id="tests-title">Tests &amp; actions</h2>
        <p>
          Lorsqu’un personnage tente une action : <strong>Attribut + Compétence</strong> = nombre de
          <kbd>d8</kbd> lancés.
        </p>
        <p>
          Chaque dé affichant <strong>6</strong>, <strong>7</strong> ou <strong>8</strong> compte
          pour <strong>1 succès</strong>.
        </p>

        <h2 id="attr-title">Attributs</h2>
        <p>Chaque attribut représente un domaine d’action général (d’autres pourront arriver).</p>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Attribut</th>
                <th>Utilisation</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Corps</td><td>Combat, endurance, survie</td></tr>
              <tr><td>Réflexes</td><td>Tir, pilotage, esquive</td></tr>
              <tr><td>Esprit</td><td>Science, analyse, biologie</td></tr>
              <tr><td>Présence</td><td>Social, leadership, sang-froid</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Difficulté</h3>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Situation</th>
                <th>Succès requis</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Simple</td><td>1</td></tr>
              <tr><td>Risquée</td><td>2</td></tr>
              <tr><td>Difficile</td><td>3</td></tr>
              <tr><td>Extrême</td><td>4</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Lecture des résultats</h3>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Résultat</th>
                <th>Effet</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Succès requis atteint</td>
                <td>Réussite</td>
              </tr>
              <tr>
                <td>Succès supplémentaires</td>
                <td>Bonus narratif / efficacité</td>
              </tr>
              <tr>
                <td>0 succès</td>
                <td>Échec + conséquence narrative</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="skill-title">
        <h2 id="skill-title">Compétences</h2>
        <p>
          Les compétences ajoutent des dés aux tests. Elles auront des rangs natifs au personnage ou
          octroyés par des objets (ex. malette de soins : +1 Médecine).
        </p>
        <p>
          La création de personnage, les PV de départ, le bouclier et les archétypes tout faits sont
          sur la page <RouterLink to="/personnage">Personnage</RouterLink>.
        </p>
        <ul class="systeme-list">
          <li>Tir</li>
          <li>Pilotage</li>
          <li>Survie</li>
          <li>Biologie</li>
          <li>Piratage</li>
          <li>Médecine</li>
          <li>Analyse</li>
          <li>Discrétion</li>
          <li>Négociation</li>
          <li>Mécanique</li>
        </ul>
      </section>
    </div>
  </article>
</template>

<style src="./SystemeView.css"></style>
