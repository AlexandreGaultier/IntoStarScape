import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { title: 'Accueil' },
    },
    {
      path: '/systeme',
      name: 'systeme',
      component: () => import('../views/SystemeView.vue'),
      meta: { title: 'Système de jeu' },
    },
    {
      path: '/combat',
      name: 'combat',
      component: () => import('../views/CombatView.vue'),
      meta: { title: 'Combat & équipement' },
    },
    {
      path: '/univers',
      name: 'univers',
      component: () => import('../views/UniversView.vue'),
      meta: { title: 'Univers' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/',
    },
  ],
})

router.afterEach((to) => {
  const piece = to.meta.title ? ` · ${to.meta.title as string}` : ''
  document.title = `StarScape${piece}`
})

export default router
