<template>
  <div>
    <h1>Detalle Coche</h1>
    <!-- los coches tienen idCoche, marca, modelo, conductor, imagen(en string) -->
     <div class="card col-6 mx-auto">
        <img :src="coche.imagen" class="card-img-top" alt="coche">
        <div class="card-body">
            <h5 class="card-title">{{ coche.marca }}</h5>
            <p class="card-text">{{ coche.modelo }}</p>
            <p class="card-text">Conductor: {{ coche.conductor }}</p>
        </div>
     </div>
  </div>
</template>

<script>
import ServiceCoches from "@/services/ServiceCoches";
const service = new ServiceCoches();

export default {

    data() {
        return {
            coche: {}
        }
    },

    mounted() {
        let idCoche = this.$route.params.idCoche;
        service.getCoche(idCoche).then(response => {
            this.coche = response;
            console.log("DetalleCocheComponent😮", response);
        });
    },

    methods: {

    }
}
</script>

<style>

</style>