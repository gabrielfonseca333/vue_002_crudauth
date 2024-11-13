import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import ProfileComponent from "./components/ProfileComponent.vue";
import EmpleadosComponent from "./components/EmpleadosComponent.vue";
import CochesComponent from "./components/coches/CochesComponent.vue";
import DetalleCocheComponent from "./components/coches/DetalleCocheComponent.vue";
import CrearCocheComponent from "./components/coches/CrearCocheComponent.vue";
import ModificarCocheComponent from "./components/coches/ModificarCocheComponent.vue";

const myRoutes = [
    {path:"/", component: HomeComponent},
    {path:"/login", component: LoginComponent},
    {path:"/profile", component: ProfileComponent},
    {path:"/empleados", component: EmpleadosComponent},
    {path:"/coches", component: CochesComponent},
    {path:"/detalles/:idCoche", component: DetalleCocheComponent},
    {path:"/crear", component: CrearCocheComponent},
    {path:"/modificar/:idCoche", component: ModificarCocheComponent},
]

const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router;