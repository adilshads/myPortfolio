import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import ContactPage from '../views/ContactPage.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/about', name: 'AboutPage', component: AboutPage },
  { path: '/projects', name: 'ProjectsPage', component: ProjectsPage },
  { path: '/contact', name: 'ContactPage', component: ContactPage}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router