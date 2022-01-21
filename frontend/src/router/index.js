import { createRouter, createWebHistory } from "vue-router";

// Routes to the different pages

import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import ForgottenPassword from "../views/ForgottenPassword.vue";
import Profile from "../views/Profile.vue";
import NotFound from "../views/NotFound.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title : "Accueil"
    }
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: {
      title : "S'inscrire"
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title : "Se connecter"
    }
  },
  {
    path: "/forgotten-password",
    name: "ForgottenPassword",
    component: ForgottenPassword,
    meta: {
      title : "Mot de passe oublié"
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      title : "Profil"
    }
  },
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: NotFound,
    meta: {
      title : "404 - Page non trouvée"
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
