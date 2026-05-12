<script setup lang="ts">
import ParallaxHero from '../components/ParallaxHero.vue'

const heroIllustration = 'src/assets/images/index_survie.jpg'
</script>

<template>
  <article class="page-combat">
    <ParallaxHero :illustration-url="heroIllustration" :intensity="0.24">
      <p class="page-combat__tag tag">Tactique</p>
      <h1 class="page-combat__title">Combat &amp; équipement</h1>
      <p class="page-combat__intro prose">
        Combats sur <strong>battlemap</strong> avec distances lisibles, objectif de parties
        <strong>courtes</strong> : peu de PV, boucliers et armures comme barres tactiques. Le soin
        reste à trancher (compétences, seringues à charges, loot…).
      </p>
    </ParallaxHero>

    <div class="container page-combat__body">
      <section aria-labelledby="tour-title">
        <h2 id="tour-title">Structure d’un tour</h2>
        <ul class="page-combat__list">
          <li>
            <strong>Court déplacement</strong> + <strong>2 tirs</strong> (chacun envoie plusieurs
            salves), <em>ou</em>
          </li>
          <li>
            <strong>Long déplacement</strong> en dépensant le tour pour se repositionner radicalement.
          </li>
        </ul>
      </section>

      <section aria-labelledby="pv-title">
        <h2 id="pv-title">PV, boucliers &amp; armures</h2>
        <div class="page-combat__bars">
          <div class="bar-card bar-card--hp">
            <h3>Points de vie</h3>
            <p>
              Les dégâts retirent des PV. À 0 : hors combat, besoin d’aide. Les dégâts
              <strong>thermiques</strong> sont plus efficaces contre les PV « à nu ».
            </p>
          </div>
          <div class="bar-card bar-card--shield">
            <h3>Boucliers</h3>
            <p>
              Barre bleue absorbant <strong>avant</strong> les PV. Une salve entière contre le
              bouclier restant : si 1 pt de bouclier et 5 dégâts, le bouclier tombe à 0 sans toucher
              les PV. Les dégâts <strong>électriques</strong> sont plus efficaces.
            </p>
          </div>
          <div class="bar-card bar-card--armor">
            <h3>Armures</h3>
            <p>
              Barre jaune supplémentaire. Les dégâts <strong>corrosifs</strong> y sont particulièrement
              efficaces.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="portee-title">
        <h2 id="portee-title">Portées</h2>
        <p class="muted">Valeurs indicatives, ajustement après playtests.</p>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Distance</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Courte</td><td>0 à 5</td></tr>
              <tr><td>Moyenne</td><td>5 à 15</td></tr>
              <tr><td>Longue</td><td>15 à 30</td></tr>
              <tr><td>Très longue</td><td>30 à 50</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="armes-title">
        <h2 id="armes-title">Armes</h2>
        <p>Maximum <strong>2 armes</strong> portées par personnage.</p>

        <h3>Armes légères</h3>
        <div class="table-wrap">
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
                <td>Pistolet plasma</td>
                <td>1d6</td>
                <td>Électrique</td>
                <td>Courte</td>
                <td>+1 dégât contre boucliers</td>
              </tr>
              <tr>
                <td>Pistolet cinétique</td>
                <td>1d6</td>
                <td>Cinétique</td>
                <td>Courte</td>
                <td>Repousse d’1 case</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Armes d’assaut</h3>
        <div class="table-wrap">
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
                <td>Fusil laser</td>
                <td>1d8</td>
                <td>Thermique</td>
                <td>Moyenne</td>
                <td>Polyvalent</td>
              </tr>
              <tr>
                <td>Fusil à impulsions</td>
                <td>1d6</td>
                <td>Électrique</td>
                <td>Moyenne</td>
                <td>+1 contre boucliers</td>
              </tr>
              <tr>
                <td>Fusil corrosif</td>
                <td>1d6</td>
                <td>Corrosif</td>
                <td>Moyenne</td>
                <td>Réduction d’armure cumulable</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Armes lourdes</h3>
        <div class="table-wrap">
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
                <td>Canon cinétique</td>
                <td>2d6</td>
                <td>Cinétique</td>
                <td>Moyenne</td>
                <td>Zone en croix</td>
              </tr>
              <tr>
                <td>Lance-acide</td>
                <td>1d8</td>
                <td>Corrosif</td>
                <td>Courte</td>
                <td>Détruit armure après 3 touches</td>
              </tr>
              <tr>
                <td>Fusil EMP</td>
                <td>1d6</td>
                <td>EMP</td>
                <td>Moyenne</td>
                <td>×2 contre robots</td>
              </tr>
              <tr>
                <td>Sniper</td>
                <td>1d12 (min 6)</td>
                <td>Cinétique</td>
                <td>Très longue</td>
                <td>1 tour de préparation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="tenues-title">
        <h2 id="tenues-title">Tenues</h2>
        <p>1 armure équipable.</p>
        <div class="table-wrap">
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
              <tr><td>Armure furtive</td><td>−1</td><td>+1 Discrétion</td></tr>
              <tr><td>Armure standard</td><td>−2</td><td>Aucun</td></tr>
              <tr><td>Armure énergétique</td><td>0</td><td>Bouclier +5</td></tr>
              <tr><td>Exo-armure</td><td>−3</td><td>−1 Réflexes</td></tr>
              <tr><td>Armure anti-EMP</td><td>−2</td><td>Résistance EMP</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </article>
</template>

<style src="./CombatView.css"></style>
