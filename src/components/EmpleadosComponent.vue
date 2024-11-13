<template>
  <div>
    <h1>Empleados</h1>  
    <div class="container" v-if="empleados.length > 0">
         <table class="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                    <th>Director</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="empleado in empleados" :key="empleado.idEmpleado">
                    <td>{{ empleado.idEmpleado }}</td>
                    <td>{{ empleado.apellido }}</td>
                    <td>{{ empleado.oficio }}</td>
                    <td>{{ empleado.salario }}</td>
                    <td>{{ empleado.director }}</td>
                </tr>
            </tbody>
        </table>
    </div>  
  </div>
</template>

<script>
import ServiceEmpleados from "@/services/ServiceEmpleados";
const service = new ServiceEmpleados();

export default {

    data() {
        return {
            empleados: []
        }
    },

    mounted() {
        service.getEmpleados().then(response => {
            this.empleados = response;
            console.log("EmpleadosComponent😮", response);
        });
    },

}
</script>

<style>

</style>