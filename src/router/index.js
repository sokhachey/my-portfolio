import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import ProjectView from "../views/ProjectView.vue"
import SkillView from "../views/SkillView.vue"
import ContactView from "../views/ContactView.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectView,
  },
  {
    path: "/skills",
    name: "Skills",
    component: SkillView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
