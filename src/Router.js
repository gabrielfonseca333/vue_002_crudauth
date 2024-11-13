import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import ProfileComponent from "./components/ProfileComponent.vue";

const myRoutes = [
    {path:"/", component: HomeComponent},
    {path:"/login", component: LoginComponent},
    {path:"/profile", component: ProfileComponent},
]

const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router;