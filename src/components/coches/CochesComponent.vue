<template>
  <div>
    <h1>Coches</h1>
    <!-- los coches tienen idCoche, marca, modelo, conductor, imagen(en string) -->
     <div class="container">
        <table class="table table-striped">
        <thead>
            <tr>
                <th>Modelo</th>
                <th>Imagen</th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="coche in coches" :key="coche.idCoche">
                <td>{{ coche.modelo }}</td>
                <td><img :src="coche.imagen" width="250px"></td>
                <td><router-link :to="'/detalles/' + coche.idCoche">Detalles</router-link></td>
                <td><router-link :to="'/modificar/' + coche.idCoche">Modificar</router-link></td>
                <td><button class="btn btn-danger" @click="eliminarCoche(coche.idCoche)">Eliminar</button></td>
            </tr>
        </tbody>
    </table>
     </div>
     
  </div>
</template>

<script>
import ServiceCoches from "@/services/ServiceCoches";
const service = new ServiceCoches();

export default {

    data() {
        return {
            coches: []
        }
    },

    mounted() {
       this.loadCoches();
    },

    methods: {
        eliminarCoche(idCoche) {
            service.eliminarCoche(idCoche).then(response => {
                console.log("Eliminar Coche", response);
                this.loadCoches();
            });
        },

        loadCoches() {
            service.getCoches().then(response => {
                this.coches = response;
                console.log("CochesComponent😮", response);
            });
        },
    }

}
</script>

<style>

</style>