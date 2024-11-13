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

        let token = localStorage.getItem("token")
        return axios.get(url, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(response => {
            console.log("getEmpleadoProfile", response);
            return response.data;
        });
    }

    getSubordinados(){
        let request = "api/empleados/subordinados";
        let url = Global.urlApiEmpleados + request;

        let token = localStorage.getItem("token")
        return axios.get(url, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(response => {
            console.log("getSubordinados", response);
            return response.data;
        });
    }

    getEmpleados() {
        let request = "api/empleados";
        let url = Global.urlApiEmpleados + request;

        let token = localStorage.getItem("token")
        return axios.get(url, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(response => {
            console.log("getEmpleados", response);
            return response.data;
        });
    }
    

}