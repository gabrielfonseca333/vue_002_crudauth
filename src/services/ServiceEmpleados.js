import Global from "@/Global";
import axios from "axios";

export default class ServiceEmpleados {

    login(usuario, contrasena) {
        let request = "auth/login";
        let url = Global.urlApiEmpleados + request;
        return axios.post(url, {
            userName: usuario,
            password: contrasena
        }).then(response => {
            let token = response.data.response;
            localStorage.setItem("token", token);
        });
    }

    getEmpleadoProfile() {
        let request = "api/empleados/perfilempleado";
        let url = Global.urlApiEmpleados + request;
        return axios.get(url).then(response => {
            return response.data;
        });
    }
    

}