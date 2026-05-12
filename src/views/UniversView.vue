<script setup lang="ts">
import ParallaxHero from '../components/ParallaxHero.vue'

const heroIllustration = 'src/assets/images/univers_map.jpg'
</script>

<template>
  <article class="univers">
    <ParallaxHero :illustration-url="heroIllustration" :intensity="0.26">
      <p class="univers-mark tag">Lore</p>
      <h1 class="univers-title">Univers StarScape</h1>
      <p class="univers-lead prose">
        Exode, <strong>Frontière</strong>, stations-cités et factions qui se disputent l’avenir.
        Vous incarnez des <strong>Outriders</strong> : libres, dangereux, jamais vraiment tranquilles.
      </p>
    </ParallaxHero>

    <div class="container univers-main">
      <section class="card univers-panel" aria-labelledby="exode-title">
        <h2 id="exode-title">Exode</h2>
        <p>
          Les humains ont quitté la planète Terre depuis bien longtemps, après en avoir exploité
          jusqu’à la dernière ressource. La vie y étant devenue impossible, l’Humanité a construit
          d’immenses vaisseaux spatiaux afin de traverser les galaxies à la recherche de nouveaux
          endroits où s’installer.
        </p>
        <p>
          Nul ne se souvient vraiment de la durée de ce voyage. Des centaines, peut-être des
          milliers d’années. Le temps s’est dilué au fil des générations nées à bord de ces
          vaisseaux-mondes. Des rumeurs, transmises de génération en génération, racontent que
          l’Humanité a vu naître durant cet exode de véritables génies : des scientifiques capables de
          maîtriser la science et la compréhension des trous de ver, accélérant ainsi le voyage et
          rendant la vie durable à bord de ces vaisseaux.
        </p>
        <p>
          C’est grâce à ces avancées que l’Humanité, arrivée aux frontières de l’espace connu à
          l’époque de son départ de la Terre, a finalement trouvé sa place dans une nouvelle
          galaxie.
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
          Les stations ont pu être construites et étendues après des centaines d’années grâce aux
          corporations, qui ont exploité les ressources des planètes environnantes afin d’augmenter
          la taille, la densité et la puissance de ces stations-cités.
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
              On retrouve partout leur propagande, dénonçant les autres corpos. Elles incarnent
              l’ordre, la puissance militaire, les armes et armures sophistiquées. Mais elles sont
              aussi vivement critiquées pour leurs méthodes brutales et leur absence totale de
              considération pour la faune, la flore et les paysages des planètes exploitées.
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
              alien (dont le nom reste à définir) présente bien avant l’arrivée de l’Humanité.
            </p>
            <p>
              Ils sont constamment à la recherche d’artefacts aliens, aussi rares que puissants. Les
              Scientifiques travaillent souvent main dans la main avec les Corporations, mais une part
              non négligeable d’entre eux opère de manière indépendante, parfois même en opposition
              ouverte.
            </p>
            <p>
              Ils sont tristement connus pour leurs expériences douteuses, menées sans scrupules sur
              les Aliens, qu’ils considèrent comme de simples cobayes. On raconte que certains
              laboratoires indépendants, dissimulés loin des systèmes habités, réalisent des
              expériences aussi fascinantes qu’horrifiques sur leurs sujets.
            </p>
          </article>

          <article class="card faction faction--out">
            <h3>Neutres &amp; Outriders</h3>
            <p>
              La faction dite Neutre regroupe tous les humains n’appartenant ni aux Corporations ni
              aux Scientifiques. Elle inclut la majorité des habitants des stations-cités, mais
              surtout les Outriders.
            </p>
            <p>
              Les Outriders sont des mercenaires de l’espace. Ils vivent en petits groupes à bord
              d’un vaisseau spatial qui leur sert à la fois de maison, de moyen de transport et d’outil
              de survie. Les joueurs incarnent tous des Outriders.
            </p>
            <p>
              Ils récupèrent des missions dans les stations-cités, proposées par les Corporations, les
              Scientifiques, les Neutres… et parfois même par les Aliens. Ces contrats se négocient le
              plus souvent dans les bars, véritables points de ralliement des Outriders.
            </p>
            <p class="faction-pull">Les Outriders sont libres.</p>
            <p>
              Ils peuvent choisir de travailler pour n’importe quelle faction, même si leurs actions
              sont moralement discutables, ce qui est souvent le cas des Corporations et de nombreux
              Scientifiques. Ils sont également libres de trahir leurs employeurs s’ils estiment qu’une
              autre cause est plus juste, au risque de voir leur réputation personnelle lourdement
              impactée.
            </p>
          </article>

          <article class="card faction faction--alien">
            <h3>Aliens</h3>
            <p>Les Aliens constituent la dernière grande faction.</p>
            <p>
              Environ 70 % d’entre eux vivent aux côtés des humains, partageant certaines de leurs
              technologies et de leur savoir. Ils sont considérés comme des égaux, et ne sont pas
              plus hostiles que ne le seraient des humains entre eux.
            </p>
            <p>
              Cependant, les 30 % restants sont convaincus que les humains sont des envahisseurs. Ces
              Aliens se sont tournés vers une forme de religion cosmique, source de la puissance de
              leurs artefacts anciens.
            </p>
            <p>
              Ils se cachent dans les recoins les plus reculés de la Frontière, protègent jalousement
              leurs artefacts et lancent régulièrement des attaques contre les installations humaines.
            </p>
          </article>
        </div>
      </section>

      <section aria-labelledby="stations-title">
        <h2 id="stations-title">Stations-cités</h2>
        <p class="univers-stations-lead prose muted">
          Les stations-cités sont d’immenses villes spatiales, extrêmement denses, surpeuplées, à
          l’esthétique très cyberpunk. Dans ces lieux, la réputation est une valeur aussi précieuse que
          l’argent. Les échanges se font aussi bien en cryptomonnaies humaines qu’en Zenith, une
          monnaie d’origine alien.
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
          </article>

          <article class="card station">
            <h3>Station chaotique <span class="wip">Nom à définir</span></h3>
            <p>Deuxième plus grande station-cité, tombée des mains des Corporations.</p>
            <p>
              Elle est aujourd’hui contrôlée par les Neutres et les Outriders. C’est ici que la
              majorité des missions se négocient et que la réputation a le plus de valeur.
            </p>
            <p>
              La pauvreté y est omniprésente, mais l’espoir et l’ambition aussi. Les habitants sont
              solidaires, chaleureux entre eux. Les réseaux de connaissances remplacent souvent les lois
              officielles, empêchant les conflits ouverts.
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
              De nombreux mystères entourent les dirigeants de cette station, où des événements
              anormaux se produisent régulièrement. Elle abrite aussi la plus grande population alien
              connue dans la Frontière.
            </p>
          </article>

          <article class="card station">
            <h3>La station-vaisseau <span class="wip">Nom à définir</span></h3>
            <p>La plus récente des quatre.</p>
            <p>
              Il ne s’agit pas d’une véritable station, mais d’un immense spatioport composé de
              centaines de vaisseaux d’Outriders assemblés les uns aux autres, formant un gigantesque
              vaisseau à part entière.
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
