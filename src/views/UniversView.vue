<script setup lang="ts">
import ParallaxHero from '../components/ParallaxHero.vue'
import heroIllustration from '../assets/images/univers_map.jpg'
</script>

<template>
  <article class="univers">
    <ParallaxHero :illustration-url="heroIllustration" :intensity="0.26">
      <p class="univers-mark tag">Lore</p>
      <h1 class="univers-title">Univers StarScape</h1>
      <p class="univers-lead prose">
        Exode, <strong>Frontière</strong>, stations-cités et factions qui se disputent le futur.
        Vous incarnez des <strong>Outriders</strong> : libres, dangereux, jamais vraiment à l’abri.
      </p>
    </ParallaxHero>

    <div class="container univers-main">
      <section class="card univers-panel" aria-labelledby="exode-title">
        <h2 id="exode-title">Exode</h2>
        <p>
          Les humains ont quitté la Terre depuis bien longtemps, après en avoir épuisé la dernière
          ressource encore exploitable. La vie y étant devenue impossible, l’Humanité a bâti de vastes
          vaisseaux et colonies mobiles pour traverser le vide et chercher un nouveau foyer.
        </p>
        <p>
          Nul ne sait vraiment combien de temps les flottes ont erré : des centaines ou des milliers
          d’années, au point que la durée se dissout dans la mémoire collective. Des rumeurs, de
          génération en génération, évoquent des génies nés à bord qui ont maîtrisé les trous de ver,
          accéléré le trajet et rendu la vie durable, voire viable sur le long terme, dans ces cités
          suspendues entre les mondes.
        </p>
        <p>
          À partir de ces percées, la civilisation arrivée au bord de l’espace connu à l’époque du
          départ a fini par s’installer dans une galaxie neuve, aujourd’hui appelée la Frontière.
        </p>
      </section>

      <section class="card univers-panel" aria-labelledby="frontiere-title">
        <h2 id="frontiere-title">La Frontière</h2>
        <p>
          L’Humanité vit désormais dans la Frontière, une galaxie située à la limite de l’espace connu
          tel qu’il était lorsque l’Humanité habitait encore la Terre.
        </p>
        <p>
          Les humains y vivent principalement dans d’énormes stations spatiales en orbite autour de
          différentes planètes, bien que certains se soient également installés directement à la
          surface de ces mondes.
        </p>
        <p>
          Les stations ont pu naître puis grossir sur des siècles grâce aux corporations, qui ont
          exploité les planètes voisines pour augmenter la surface habitable, la densité urbaine et la
          puissance des stations-cités.
        </p>
        <p>
          Après des siècles d’expansion, quatre grandes stations ont été bâties. Aujourd’hui, elles
          abritent près de 80 % de l’Humanité.
        </p>
      </section>

      <section aria-labelledby="factions-title">
        <h2 id="factions-title">Factions</h2>
        <div class="univers-factions">
          <article class="card faction faction--corp">
            <h3>Corporations</h3>
            <p>
              Les Corporations sont les propriétaires des stations-cités. Elles possèdent de
              nombreuses industries d’exploitation, le plus souvent minières, sur les planètes
              environnantes. Elles sont en concurrence permanente les unes avec les autres.
            </p>
            <p>
              Leurs campagnes de propagande inondent les couloirs et dénoncent sans relâche les
              autres corpos, tandis qu’elles affichent ordre, armement de pointe et armures de
              parade. Dans le même temps, beaucoup d’habitants dénoncent leurs agissements souvent
              brutaux et l’absence totale de considération pour la faune, la flore et les paysages
              ravagés.
            </p>
            <p>
              Sur ces mondes, d’immenses structures industrielles creusent toujours plus profondément,
              laissant derrière elles des ravages irréversibles.
            </p>
          </article>

          <article class="card faction faction--sci">
            <h3>Scientifiques</h3>
            <p>
              Les Scientifiques cherchent à comprendre les habitants de cette galaxie : une race
              extraterrestre (dont le nom reste à définir) présente bien avant l’arrivée de
              l’Humanité.
            </p>
            <p>
              Ils traquent des artefacts aliens aussi puissants qu’ultra-rares. Souvent de pair avec
              les Corporations, une fraction importante travaille aussi en marge, parfois ouvertement
              contre elles.
            </p>
            <p>
              Leurs expériences douteuses sur les Aliens, traités comme de simples cobayes, sont
              notoires. Certains laboratoires indépendants se cachent hors des cartographies
              officielles pour mener des protocoles aussi fascinants qu’horrifiques, loin de tout
              contrôle.
            </p>
          </article>

          <article class="card faction faction--out">
            <h3>Neutres &amp; Outriders</h3>
            <p>
              La faction dite « Neutre » couvre tout humain qui n’est ni corporatiste ni scientifique
              de carrière, y compris la masse des habitants des stations-cités. Le vocable reste un
              code de table : un nom définitif viendra quand tu trancheras.
            </p>
            <p>
              Les Outriders sont des mercenaires de l’espace, en petits équipages sur un vaisseau qui
              fait office de maison indépendante, de transport et d’outil de survie. Les joueuses et
              joueurs incarnent tous des Outriders.
            </p>
            <p>
              Ils récupèrent missions et quêtes dans les stations-cités, émises par les Corporations,
              les Scientifiques, les milieux dits Neutres ou même les Aliens. Les contrats se
              négocient le plus souvent dans les bars, repaires naturels des Outriders.
            </p>
            <p class="faction-pull">Les Outriders sont libres.</p>
            <p>
              Ils peuvent choisir d’agir pour les Corporations, les Scientifiques, les Neutres ou les
              Aliens, même quand la mission semble immorale, ce qui arrive souvent avec les corpos et
              une grande partie des labos. Ils restent libres de trahir un employeur pour une cause
              qui leur paraît plus juste sur le moment, au prix d’une réputation personnelle qui peut
              voler en éclats.
            </p>
          </article>

          <article class="card faction faction--alien">
            <h3>Aliens</h3>
            <p>Les Aliens constituent la dernière grande faction.</p>
            <p>
              Environ 70 % d’entre eux cohabitent avec les humains et leur ont apporté des technologies
              nouvelles et des savoirs inédits. Ils sont traités comme des égaux et ne sont pas plus
              agressifs qu’un humain pris au hasard.
            </p>
            <p>
              Le tiers restant voit les humains comme des envahisseurs. Ils puisent dans une religion
              cosmique la puissance de leurs artefacts anciens.
            </p>
            <p>
              Cantonnés dans les recoins les plus sombres de la Frontière, ils protègent jalousement
              leurs reliques et mènent des attaques fréquentes contre les installations humaines.
            </p>
          </article>
        </div>
      </section>

      <section aria-labelledby="stations-title">
        <h2 id="stations-title">Stations-cités</h2>
        <p class="univers-stations-lead prose muted">
          Les stations-cités sont des mégalopoles suspendues, hyper denses, saturées de néons et de
          béton, où la réputation vaut autant que l’argent. Les paiements circulent en cryptomonnaies
          humaines comme en Zenith, monnaie aliène devenue standard sur les quais.
        </p>
        <h3 class="univers-stations-sub">Les quatre grandes stations</h3>
        <div class="univers-stations">
          <article class="card station">
            <h3>Opportunity</h3>
            <p>Station-cité entièrement contrôlée par les Corporations.</p>
            <p>
              Propre, ordonnée, surveillée en permanence, elle dispose d’une présence militaire
              écrasante. L’ordre y règne au prix de la liberté.
            </p>
            <p class="univers-aside">
              Nom volontairement proche d’une station-corpo emblématique de fiction populaire : le
              clin d’œil est assumé en table.
            </p>
          </article>

          <article class="card station">
            <h3>Station chaotique <span class="wip">Nom à définir</span></h3>
            <p>Deuxième plus grande station-cité, tombée des mains des Corporations.</p>
            <p>
              Elle est aujourd’hui contrôlée par les Neutres et les Outriders. C’est ici que la
              majorité des missions se négocient et que la réputation a le plus de valeur.
            </p>
            <p>
              La pauvreté y est omniprésente, mais l’espoir et l’ambition aussi. Les habitants se
              tirent vers le haut, chaleureux entre eux : ce sont souvent les chaînes du « qui connaît
              qui » qui désamorcent les crises avant qu’elles n’éclatent au grand jour, là où les lois
              officielles peinent à suivre.
            </p>
            <p>
              Cependant, des affaires macabres se déroulent dans les recoins les plus sombres de la
              station.
            </p>
          </article>

          <article class="card station">
            <h3>Station scientifique <span class="wip">Nom à définir</span></h3>
            <p>Station officiellement neutre, mais majoritairement habitée par des Scientifiques.</p>
            <p>
              C’est ici que naissent les plus grandes avancées technologiques de la Frontière. On y
              trouve également les meilleurs marchands.
            </p>
            <p>
              Les mystères entourent ses dirigeants comme ses couloirs : événements anormaux, rumeurs
              de labos fantômes, marchés gris qui s’ouvrent et se referment. Elle concentre aussi la
              plus grande population alien recensée sur la Frontière.
            </p>
          </article>

          <article class="card station">
            <h3>La station-vaisseau <span class="wip">Nom à définir</span></h3>
            <p>La plus récente des quatre : une « fausse » station, en réalité un spatioport agrégé.</p>
            <p>
              Des centaines de vaisseaux d’Outriders s’y sont amarrés les uns aux autres jusqu’à former
              une coque commune, un seul objet flottant à l’échelle d’un monde artificiel.
            </p>
            <p>La vie y est rude. La loi du plus fort y règne souvent.</p>
            <p>
              Cependant, une bonne réputation dans ce lieu offre des privilèges exceptionnels,
              convoités par toute l’Humanité.
            </p>
            <p>C’est ici que naissent les légendes… ou qu’elles s’effondrent.</p>
          </article>
        </div>
      </section>
    </div>
  </article>
</template>

<style src="./UniversView.css"></style>
