<template>
  <div>
    <h1>Login</h1>
    <div class="container">
        <form @submit.prevent>    
            <input v-model="usuario" type="text" placeholder="Usuario" class="form-control">
            <input v-model="contrasena" type="text" placeholder="Contraseña" class="form-control">
            <button @click="login()" class="btn btn-primary">Login</button>
        </form>
    </div>
  </div>
</template>

<script>
import ServiceEmpleados from "@/services/ServiceEmpleados";
const service = new ServiceEmpleados();

export default {

    data() {
        return {
            usuario: "",
            contrasena: ""
        }
    },

    methods: {
        login() {
            service.login(this.usuario, this.contrasena).then(response => {
                console.log("Login exitoso ✅", response);
                this.$router.push("/profile");
            });
        }
    }

}
</script>

<style>

</style>