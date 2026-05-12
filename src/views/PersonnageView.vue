<script setup lang="ts">
import ParallaxHero from '../components/ParallaxHero.vue'

const heroIllustration = 'src/assets/images/index_hero_background.jpg'
</script>

<template>
  <article class="perso">
    <ParallaxHero :illustration-url="heroIllustration" :intensity="0.22">
      <p class="perso-mark tag">Héros</p>
      <h1 class="perso-title">Personnage</h1>
      <p class="perso-lead prose">
        Création pas à pas, PV, bouclier, équipement de départ et <strong>cinq archétypes</strong>
        prêts à poser sur la table.
      </p>
    </ParallaxHero>

    <div class="container perso-main">
      <section class="card perso-panel" aria-labelledby="creation-title">
        <h2 id="creation-title">Création de personnage</h2>

        <h3 class="perso-sub">Identité</h3>
        <p>Choisis un nom (ou un surnom de couloir) qui sonne bien à la table.</p>

        <h3 class="perso-sub">Attributs</h3>
        <ul class="perso-rules">
          <li>
            <strong>Base</strong> : place <strong>1 point</strong> dans chacun des quatre attributs
            (Corps, Réflexes, Esprit, Présence).
          </li>
          <li>
            <strong>Répartition</strong> : tu as encore <strong>4 points</strong> à répartir comme tu
            veux entre ces attributs.
          </li>
          <li>
            <strong>Plafond</strong> : aucun attribut ne peut dépasser <strong>4</strong> au total.
          </li>
        </ul>

        <h3 class="perso-sub">Compétences</h3>
        <ul class="perso-rules">
          <li>
            Tu disposes de <strong>6 points</strong> à répartir dans les compétences de la liste (ou
            celles que la table valide).
          </li>
          <li>
            <strong>Plafond</strong> : <strong>3 points maximum</strong> dans une même compétence.
          </li>
        </ul>

        <h3 class="perso-sub">Points de vie &amp; bouclier</h3>
        <ul class="perso-rules">
          <li>
            <strong>PV maximums</strong> au départ : <strong>10 + 2 × valeur de Corps</strong> (chaque
            point dans Corps ajoute 2 PV).
          </li>
          <li>
            <strong>Bouclier de départ</strong> : prends la moitié des PV maximums (arrondi à
            l’inférieur), puis ajoute <strong>2</strong>. C’est la valeur de la jauge de bouclier de
            départ.
          </li>
        </ul>
        <p class="perso-example">
          Exemple : Corps 3 → PV max 16 → moitié 8 → bouclier 10.
        </p>

        <h3 class="perso-sub">Équipement de départ</h3>
        <ul class="perso-rules">
          <li><strong>2 armes</strong> au choix (voir page Combat).</li>
          <li><strong>1 tenue</strong> au choix.</li>
        </ul>

        <h3 class="perso-sub">Toile de fond</h3>
        <ul class="perso-rules">
          <li>Quelques lignes sur le passé du personnage.</li>
          <li>Ce qu’il aime et ce qu’il déteste.</li>
          <li>Ses <strong>motivations</strong>, son <strong>but</strong> actuel et ses
            <strong>traits de caractère</strong>.</li>
          <li>S’il en existe un à la table : un <strong>lien</strong> avec un autre PJ (rivalité,
            dette, famille d’emprunt, etc.).</li>
        </ul>
      </section>

      <section aria-labelledby="archetypes-title">
        <h2 id="archetypes-title">Cinq archétypes tout faits</h2>
        <p>
          Pour lancer une partie vite, tu peux prendre l’un de ces modèles : ils respectent les
          règles ci-dessus (8 points d’attributs au total, 6 points de compétences, plafonds inclus).
          Change le nom, l’équipement ou les détails narratifs comme tu veux.
        </p>
        <div class="perso-archetypes">
          <article class="card perso-arch">
            <h3 class="perso-arch-title">Jun Hale <span class="perso-arch-role">Éclaireur</span></h3>
            <p class="perso-arch-flavor">
              Éclaireur de crête : capte les tics d’ambiance avant tout le monde. Calme, nerveux,
              jamais sans un plan B.
            </p>
            <p><strong>Attributs</strong> : Corps 2 · Réflexes 4 · Esprit 1 · Présence 1</p>
            <p><strong>Compétences</strong> : Tir 3 · Survie 2 · Discrétion 1</p>
            <p><strong>PV</strong> 14 · <strong>Bouclier</strong> 9</p>
            <p><strong>Équipement</strong> : pistolet cinétique, fusil laser, combinaison explorateur.</p>
          </article>

          <article class="card perso-arch">
            <h3 class="perso-arch-title">
              Maren Koss <span class="perso-arch-role">Scientifique de terrain</span>
            </h3>
            <p class="perso-arch-flavor">
              Biologiste de contrat, sacs stériles pleins d’échantillons douteux et de excuses
              officielles.
            </p>
            <p><strong>Attributs</strong> : Corps 1 · Réflexes 2 · Esprit 4 · Présence 1</p>
            <p><strong>Compétences</strong> : Biologie 2 · Analyse 2 · Médecine 2</p>
            <p><strong>PV</strong> 12 · <strong>Bouclier</strong> 8</p>
            <p><strong>Équipement</strong> : pistolet laser, fusil à impulsions, armure standard.</p>
          </article>

          <article class="card perso-arch">
            <h3 class="perso-arch-title">Rico Vance <span class="perso-arch-role">Ingénieur spatial</span></h3>
            <p class="perso-arch-flavor">
              Colle des rustines sur des trous de balle et sur des budgets. Parle aux machines plus
              qu’aux gens.
            </p>
            <p><strong>Attributs</strong> : Corps 2 · Réflexes 2 · Esprit 3 · Présence 1</p>
            <p><strong>Compétences</strong> : Mécanique 3 · Pilotage 2 · Piratage 1</p>
            <p><strong>PV</strong> 14 · <strong>Bouclier</strong> 9</p>
            <p><strong>Équipement</strong> : pistolet plasma, fusil laser, armure énergétique.</p>
          </article>

          <article class="card perso-arch">
            <h3 class="perso-arch-title">Iris Veldt <span class="perso-arch-role">Capitaine libre</span></h3>
            <p class="perso-arch-flavor">
              Charisme de bar, poigne sur la dette morale. Fait signer avant de sauver.
            </p>
            <p><strong>Attributs</strong> : Corps 2 · Réflexes 3 · Esprit 1 · Présence 2</p>
            <p><strong>Compétences</strong> : Négociation 3 · Pilotage 2 · Tir 1</p>
            <p><strong>PV</strong> 14 · <strong>Bouclier</strong> 9</p>
            <p><strong>Équipement</strong> : pistolet laser, fusil laser, armure furtive.</p>
          </article>

          <article class="card perso-arch">
            <h3 class="perso-arch-title">Jax Therm <span class="perso-arch-role">le pilote</span></h3>
            <p class="perso-arch-flavor">
              Colle au siège, lit les courants de gravité comme d’autres lisent les nouvelles. Frime
              un peu, assume beaucoup.
            </p>
            <p><strong>Attributs</strong> : Corps 1 · Réflexes 4 · Esprit 2 · Présence 1</p>
            <p><strong>Compétences</strong> : Pilotage 3 · Mécanique 2 · Tir 1</p>
            <p><strong>PV</strong> 12 · <strong>Bouclier</strong> 8</p>
            <p><strong>Équipement</strong> : pistolet cinétique, fusil à impulsions, combinaison explorateur.</p>
          </article>
        </div>
      </section>
    </div>
  </article>
</template>

<style src="./PersonnageView.css"></style>
