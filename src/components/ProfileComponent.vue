<template>
  <div>     
    <h1>Profile</h1>
    <div>
      <!-- tiene idEmpleado, apellido, oficio, salario y director -->
       <h2>Información del empleado</h2>
       <p>IdEmpleado: {{empleado.idEmpleado}}</p>
       <p>Apellido: {{empleado.apellido}}</p>
       <p>Oficio: {{empleado.oficio}}</p>
       <p>Salario: {{empleado.salario}}</p>
       <p>Director: {{empleado.director}}</p>

       <button @click="getSubordinados()" class="btn btn-primary">Obtener Subordinados</button>

       <br>

       <div class="container" v-if="subordinados.length > 0">
         <h2>Subordinados</h2>
         <!-- los subordinados tienen idEmpleado, apellido, oficio, salario y director -->
          <table class="table">
            <thead>
              <tr>
                <th>IdEmpleado</th>
                <th>Apellido</th>
                <th>Oficio</th>
                <th>Salario</th>
                <th>Director</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="subordinado in subordinados" :key="subordinado">
                <td>{{subordinado.idEmpleado}}</td>
                <td>{{subordinado.apellido}}</td>
                <td>{{subordinado.oficio}}</td>
                <td>{{subordinado.salario}}</td>
                <td>{{subordinado.director}}</td>
              </tr>
            </tbody>
          </table>
       </div>
        
    </div>
  </div>
</template>

<script>
import ServiceEmpleados from "@/services/ServiceEmpleados";
const service = new ServiceEmpleados();
export default {

  data() {
    return {
      empleado: {},
      subordinados: []
    }
  },

  mounted() {
    service.getEmpleadoProfile().then(response => {
      console.log("ProfileComponent😮", response);
      this.empleado = response;
    });
  },

  methods: {
    getSubordinados() {
      service.getSubordinados().then(response => {
        this.subordinados = response;
        console.log("😘",this.subordinados);
      });
    }
  }


}
</script>

<style>

</style>