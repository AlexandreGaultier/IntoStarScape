<script setup lang="ts">
import ParallaxHero from '../components/ParallaxHero.vue'

const heroIllustration = 'src/assets/images/univers_map.jpg'
</script>

<template>
  <article class="univers">
    <ParallaxHero :illustration-url="heroIllustration" :intensity="0.26">
      <p class="univers-mark tag">Lore</p>
      <h1 class="univers-title">Univers &amp; factions</h1>
      <p class="univers-lead prose">
        Après l’exode depuis une Terre épuisée, l’humanité vit dans la <strong>Frontière</strong> :
        stations-cités cyberpunk, corporations voraces, science dangereuse, et vous,
        <strong>Outriders</strong>, libres mais jamais vraiment tranquilles.
      </p>
    </ParallaxHero>

    <div class="container univers-main">
      <section class="card univers-panel">
        <h2>Exode &amp; Frontière</h2>
        <p>
          Les humains ont quitté la Terre après en avoir tiré la dernière goutte de ressources. Des
          vaisseaux-mondes ont traversé des siècles, peut-être des millénaires, jusqu’à maîtriser
          assez la science des trous de ver pour accélérer le voyage. Aujourd’hui, la civilisation
          s’est reconstituée dans une galaxie neuve : la Frontière, au bord de l’espace connu au
          moment du départ.
        </p>
        <p>
          La vie s’organise surtout dans d’immenses stations en orbite ; certaines colonies
          planétaires existent, mais le cœur bat dans ces cités suspendues, bâties et gonflées par
          les corporations.
        </p>
      </section>

      <section>
        <h2>Factions</h2>
        <div class="univers-factions">
          <article class="card faction faction--corp">
            <h3>Corporations</h3>
            <p>
              Propriétaires des stations, industries minières brutales, propagande omniprésente,
              armement de pointe, et réputation exécrable pour l’écocide planétaire.
            </p>
          </article>
          <article class="card faction faction--sci">
            <h3>Scientifiques</h3>
            <p>
              Obsédés par les aliens autochtones et leurs artefacts. Souvent alliés aux corpos,
              parfois indépendants, et trop souvent associés à des expériences moralement
              insoutenables.
            </p>
          </article>
          <article class="card faction faction--out">
            <h3>Neutres &amp; Outriders</h3>
            <p>
              La majorité silencieuse des habitants… et vous, mercenaires d’espace en petit équipage,
              vivant dans votre vaisseau-maison, signant des contrats au bar.
            </p>
          </article>
          <article class="card faction faction--alien">
            <h3>Aliens</h3>
            <p>
              Environ 70 % cohabitent pacifiquement avec les humains. Les 30 % restants voient une
              invasion : religion cosmique, artefacts anciens, raids contre les installations
              humaines.
            </p>
          </article>
        </div>
      </section>

      <section>
        <h2>Stations-cités</h2>
        <p class="prose muted">
          Denses, surpeuplées, néon et béton pressé : la réputation y vaut de l’or, les paiements
          passent en crypto humaine ou en Zenith, monnaie alien.
        </p>
        <div class="univers-stations">
          <article class="card station">
            <h3>Opportunity</h3>
            <p>
              Contrôlée par les corporations : propre, surveillée, militarisée. L’ordre règne au prix
              de la liberté.
            </p>
          </article>
          <article class="card station">
            <h3>Station chaotique <span class="wip">(nom provisoire)</span></h3>
            <p>
              Tombée des mains des corpos, tenue par Neutres &amp; Outriders. Pauvreté omniprésente,
              solidarité, réputation qui fait loi, et ombres macabres dans les couloirs.
            </p>
          </article>
          <article class="card station">
            <h3>Station scientifique <span class="wip">(nom provisoire)</span></h3>
            <p>
              Officiellement neutre, majoritairement scientifique. Haute techno, marchands d’élite,
              mystères de direction, anomalies fréquentes, forte population alien.
            </p>
          </article>
          <article class="card station">
            <h3>La station-vaisseau <span class="wip">(nom provisoire)</span></h3>
            <p>
              Spatioport colossal : des centaines de vaisseaux d’Outriders soudés en mégalithe
              mobile. Rude, parfois brutale, mais une réputation d’élite y ouvre des portes
              impossibles ailleurs.
            </p>
          </article>
        </div>
      </section>
    </div>
  </article>
</template>

<style src="./UniversView.css"></style>
