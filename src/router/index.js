import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import ProjectView from "../views/ProjectView.vue"
import ContactView from "../views/ContactView.vue"
import SkillView from "../views/SkillView.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      title: "Sokha SIM - Web Developer",
    },
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
    meta: {
      title: "About - Sokha SIM",
    },
  },
  {
    path: "/skills",
    name: "Skills",
    component: SkillView,
    meta: {
      title: "Skills - Sokha SIM",
    },
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectView,
    meta: {
      title: "Projects - Sokha SIM",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
    meta: {
      title: "Contact - Sokha SIM",
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: "smooth" }
    }
  },
})

// Update page title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Sokha SIM - Portfolio"
  next()
})

export default router
