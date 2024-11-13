<template>
  <div>
    <h1>Crear Coche</h1>
    <div class="container col-md-6 col-sm-12">
        <form @submit.prevent="crearCoche">
            <div class="form-group">
                <label for="marca">Marca</label>
                <input type="text" class="form-control" id="marca" v-model="coche.marca">
            </div>
            <div class="form-group">
                <label for="modelo">Modelo</label>
                <input type="text" class="form-control" id="modelo" v-model="coche.modelo">
            </div>
            <div class="form-group">
                <label for="conductor">Conductor</label>
                <input type="text" class="form-control" id="conductor" v-model="coche.conductor">
            </div>
            <div class="form-group">
                <label for="imagen">Imagen</label>
                <input type="text" class="form-control" id="imagen" v-model="coche.imagen">
            </div>
            <button type="submit" class="btn btn-primary">Crear</button>
        </form>
    </div>
  </div>
</template>

<script>
import ServiceCoches from "@/services/ServiceCoches";
const service = new ServiceCoches();

export default {

    data() {
        return {
            coche: {
                marca: "",
                modelo: "",
                conductor: "",
                imagen: ""
            }
        }
    },

    methods: {
        crearCoche() {
            service.crearCoche(this.coche).then(response => {
                console.log("Crear Coche", response);
                this.goToCoches();
            });
        },

        goToCoches() {
            this.$router.push("/coches");
        }
    }


}
</script>

<style>

</style>