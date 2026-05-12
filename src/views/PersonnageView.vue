<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ParallaxHero from '../components/ParallaxHero.vue'

const heroIllustration = './src/assets/images/index_hero_background.jpg'
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
          <li>
            <strong>2 armes</strong> au choix (voir la page
            <RouterLink to="/combat#armes">Combat, section Armes</RouterLink>).
          </li>
          <li>
            <strong>1 tenue</strong> au choix (voir la page
            <RouterLink to="/combat#tenues">Combat, section Tenues</RouterLink>).
          </li>
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
        </p>
        <p>
          Ce sont des <strong>points de départ narratifs et mécaniques</strong> : change tout ce qui
          t’arrange (nom, chiffres, équipement, histoire) ou ne garde qu’une idée de silhouette pour
          bricoler ton propre PJ.
        </p>
        <p class="perso-arch-banner">
          Chaque archétype est <strong>totalement modifiable</strong> : rien n’est figé, les tableaux
          rappellent juste ce que la fiche embarque à l’instant T.
        </p>

        <div class="perso-archetypes">
          <article class="card perso-arch">
            <h3 class="perso-arch-title">Jun Hale <span class="perso-arch-role">Éclaireur</span></h3>
            <p class="perso-arch-flavor">
              Éclaireur de crête : capte les tics d’ambiance avant tout le monde. Calme, ou pas,
              jamais sans un plan B.
            </p>
            <p class="perso-arch-hook">
              Il trace les itinéraires « officieux » avant que l’équipage ne les emprunte, et sait où
              se planquer quand les esprits s'échauffent.
            </p>

            <p class="perso-stat-label">Attributs</p>
            <div class="perso-attr-row" role="list">
              <span class="perso-attr perso-attr--corps" role="listitem"><span class="perso-attr-k">Corps</span> 2</span>
              <span class="perso-attr perso-attr--ref" role="listitem"><span class="perso-attr-k">Réflexes</span> 4</span>
              <span class="perso-attr perso-attr--esp" role="listitem"><span class="perso-attr-k">Esprit</span> 1</span>
              <span class="perso-attr perso-attr--pre" role="listitem"><span class="perso-attr-k">Présence</span> 1</span>
            </div>

            <p class="perso-stat-label">Compétences</p>
            <ul class="perso-skill-chips">
              <li>Tir 3</li>
              <li>Survie 2</li>
              <li>Discrétion 1</li>
            </ul>

            <div class="perso-meters"><span>PV 14</span><span>Bouclier 9</span></div>

            <h4 class="perso-micro">Armes équipées</h4>
            <div class="table-wrap perso-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Arme</th>
                    <th>Dégâts</th>
                    <th>Type</th>
                    <th>Portée</th>
                    <th>Bonus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pistolet cinétique</td>
                    <td>1d6</td>
                    <td>Cinétique</td>
                    <td>Courte</td>
                    <td>Repousse d’1 case</td>
                  </tr>
                  <tr>
                    <td>Fusil laser</td>
                    <td>1d8</td>
                    <td>Thermique</td>
                    <td>Moyenne</td>
                    <td>Polyvalent</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 class="perso-micro">Tenue</h4>
            <div class="table-wrap perso-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Tenue</th>
                    <th>Réduction</th>
                    <th>Bonus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Combinaison explorateur</td><td>−1</td><td>+1 Réflexes</td></tr>
                </tbody>
              </table>
            </div>
          </article>

          <article class="card perso-arch">
            <h3 class="perso-arch-title">
              Maren Koss <span class="perso-arch-role">Scientifique de terrain</span>
            </h3>
            <p class="perso-arch-flavor">
              Biologiste de contrat, sacs stériles pleins d’échantillons douteux et d’excuses
              officielles.
            </p>
            <p class="perso-arch-hook">
              Elle documente ce que personne ne veut voir, et transforme les anomalies en rapports que
              les corpos préfèrent classer « confidentiels ».
            </p>

            <p class="perso-stat-label">Attributs</p>
            <div class="perso-attr-row" role="list">
              <span class="perso-attr perso-attr--corps" role="listitem"><span class="perso-attr-k">Corps</span> 1</span>
              <span class="perso-attr perso-attr--ref" role="listitem"><span class="perso-attr-k">Réflexes</span> 2</span>
              <span class="perso-attr perso-attr--esp" role="listitem"><span class="perso-attr-k">Esprit</span> 4</span>
              <span class="perso-attr perso-attr--pre" role="listitem"><span class="perso-attr-k">Présence</span> 1</span>
            </div>

            <p class="perso-stat-label">Compétences</p>
            <ul class="perso-skill-chips">
              <li>Biologie 2</li>
              <li>Analyse 2</li>
              <li>Médecine 2</li>
            </ul>

            <div class="perso-meters"><span>PV 12</span><span>Bouclier 8</span></div>

            <h4 class="perso-micro">Armes équipées</h4>
            <div class="table-wrap perso-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Arme</th>
                    <th>Dégâts</th>
                    <th>Type</th>
                    <th>Portée</th>
                    <th>Bonus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pistolet laser</td>
                    <td>1d4 + 1d4</td>
                    <td>Thermique</td>
                    <td>Courte</td>
                    <td>Deux tirs rapides</td>
                  </tr>
                  <tr>
                    <td>Fusil à impulsions</td>
                    <td>1d6</td>
                    <td>Électrique</td>
                    <td>Moyenne</td>
                    <td>+1 contre boucliers</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 class="perso-micro">Tenue</h4>
            <div class="table-wrap perso-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Tenue</th>
                    <th>Réduction</th>
                    <th>Bonus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Armure standard</td><td>−2</td><td>Aucun</td></tr>
                </tbody>
              </table>
            </div>
          </article>

          <article class="card perso-arch">
            <h3 class="perso-arch-title">Rico Vance <span class="perso-arch-role">Ingénieur spatial</span></h3>
            <p class="perso-arch-flavor">
              Colle des rustines sur des trous de balle et sur des budgets. Parle aux machines plus
              qu’aux gens.
            </p>
            <p class="perso-arch-hook">
              Il sait quelle vis serrer pour que le sas tienne quand tout le reste hurle en alarme,
              et négocie avec les systèmes embarqués comme avec des personnages à part entière.
            </p>

            <p class="perso-stat-label">Attributs</p>
            <div class="perso-attr-row" role="list">
              <span class="perso-attr perso-attr--corps" role="listitem"><span class="perso-attr-k">Corps</span> 2</span>
              <span class="perso-attr perso-attr--ref" role="listitem"><span class="perso-attr-k">Réflexes</span> 2</span>
              <span class="perso-attr perso-attr--esp" role="listitem"><span class="perso-attr-k">Esprit</span> 3</span>
              <span class="perso-attr perso-attr--pre" role="listitem"><span class="perso-attr-k">Présence</span> 1</span>
            </div>

            <p class="perso-stat-label">Compétences</p>
            <ul class="perso-skill-chips">
              <li>Mécanique 3</li>
              <li>Pilotage 2</li>
              <li>Piratage 1</li>
            </ul>

            <div class="perso-meters"><span>PV 14</span><span>Bouclier 9</span></div>

            <h4 class="perso-micro">Armes équipées</h4>
            <div class="table-wrap perso-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Arme</th>
                    <th>Dégâts</th>
                    <th>Type</th>
                    <th>Portée</th>
                    <th>Bonus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pistolet plasma</td>
                    <td>1d6</td>
                    <td>Électrique</td>
                    <td>Courte</td>
                    <td>+1 dégât contre boucliers</td>
                  </tr>
                  <tr>
                    <td>Fusil laser</td>
                    <td>1d8</td>
                    <td>Thermique</td>
                    <td>Moyenne</td>
                    <td>Polyvalent</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 class="perso-micro">Tenue</h4>
            <div class="table-wrap perso-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Tenue</th>
                    <th>Réduction</th>
                    <th>Bonus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Armure énergétique</td><td>0</td><td>Bouclier +5</td></tr>
                </tbody>
              </table>
            </div>
          </article>

          <article class="card perso-arch">
            <h3 class="perso-arch-title">Iris Veldt <span class="perso-arch-role">Capitaine libre</span></h3>
            <p class="perso-arch-flavor">
              Charisme de bar, poigne sur la dette morale. Fait signer avant de sauver.
            </p>
            <p class="perso-arch-hook">
              Elle transforme les dettes en alliances de fortune, et sait quelle menace douce faire
              planer pour qu’une salle de briefing se range sans coups feu.
            </p>

            <p class="perso-stat-label">Attributs</p>
            <div class="perso-attr-row" role="list">
              <span class="perso-attr perso-attr--corps" role="listitem"><span class="perso-attr-k">Corps</span> 2</span>
              <span class="perso-attr perso-attr--ref" role="listitem"><span class="perso-attr-k">Réflexes</span> 3</span>
              <span class="perso-attr perso-attr--esp" role="listitem"><span class="perso-attr-k">Esprit</span> 1</span>
              <span class="perso-attr perso-attr--pre" role="listitem"><span class="perso-attr-k">Présence</span> 2</span>
            </div>

            <p class="perso-stat-label">Compétences</p>
            <ul class="perso-skill-chips">
              <li>Négociation 3</li>
              <li>Pilotage 2</li>
              <li>Tir 1</li>
            </ul>

            <div class="perso-meters"><span>PV 14</span><span>Bouclier 9</span></div>

            <h4 class="perso-micro">Armes équipées</h4>
            <div class="table-wrap perso-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Arme</th>
                    <th>Dégâts</th>
                    <th>Type</th>
                    <th>Portée</th>
                    <th>Bonus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pistolet laser</td>
                    <td>1d4 + 1d4</td>
                    <td>Thermique</td>
                    <td>Courte</td>
                    <td>Deux tirs rapides</td>
                  </tr>
                  <tr>
                    <td>Fusil laser</td>
                    <td>1d8</td>
                    <td>Thermique</td>
                    <td>Moyenne</td>
                    <td>Polyvalent</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 class="perso-micro">Tenue</h4>
            <div class="table-wrap perso-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Tenue</th>
                    <th>Réduction</th>
                    <th>Bonus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Armure furtive</td><td>−1</td><td>+1 Discrétion</td></tr>
                </tbody>
              </table>
            </div>
          </article>

          <article class="card perso-arch">
            <h3 class="perso-arch-title">Jax Therm <span class="perso-arch-role">le pilote</span></h3>
            <p class="perso-arch-flavor">
              Colle au siège, lit les courants de gravité comme d’autres lisent les nouvelles. Frime
              un peu, assume beaucoup.
            </p>
            <p class="perso-arch-hook">
              Il parle à l’appareillage comme à un partenaire de danse : un quart de degré de trop, et
              c’est la différence entre un frôlement de dock et une empreinte sur la coque.
            </p>

            <p class="perso-stat-label">Attributs</p>
            <div class="perso-attr-row" role="list">
              <span class="perso-attr perso-attr--corps" role="listitem"><span class="perso-attr-k">Corps</span> 1</span>
              <span class="perso-attr perso-attr--ref" role="listitem"><span class="perso-attr-k">Réflexes</span> 4</span>
              <span class="perso-attr perso-attr--esp" role="listitem"><span class="perso-attr-k">Esprit</span> 2</span>
              <span class="perso-attr perso-attr--pre" role="listitem"><span class="perso-attr-k">Présence</span> 1</span>
            </div>

            <p class="perso-stat-label">Compétences</p>
            <ul class="perso-skill-chips">
              <li>Pilotage 3</li>
              <li>Mécanique 2</li>
              <li>Tir 1</li>
            </ul>

            <div class="perso-meters"><span>PV 12</span><span>Bouclier 8</span></div>

            <h4 class="perso-micro">Armes équipées</h4>
            <div class="table-wrap perso-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Arme</th>
                    <th>Dégâts</th>
                    <th>Type</th>
                    <th>Portée</th>
                    <th>Bonus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pistolet cinétique</td>
                    <td>1d6</td>
                    <td>Cinétique</td>
                    <td>Courte</td>
                    <td>Repousse d’1 case</td>
                  </tr>
                  <tr>
                    <td>Fusil à impulsions</td>
                    <td>1d6</td>
                    <td>Électrique</td>
                    <td>Moyenne</td>
                    <td>+1 contre boucliers</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 class="perso-micro">Tenue</h4>
            <div class="table-wrap perso-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Tenue</th>
                    <th>Réduction</th>
                    <th>Bonus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Combinaison explorateur</td><td>−1</td><td>+1 Réflexes</td></tr>
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </section>
    </div>
  </article>
</template>

<style src="./PersonnageView.css"></style>
