import Global from "@/Global";
import axios from "axios";

export default class ServiceCoches {

    //get, getFind, post , put, delete
    getCoches() {
        let request = "api/coches"
        let url = Global.urlApiCoches + request;
        return axios.get(url).then(response => {
            return response.data;
        });
    }

    getCoche(idCoche) {
        let request = "api/coches/findcoche/" + idCoche;
        let url = Global.urlApiCoches + request;
        return axios.get(url).then(response => {
            return response.data;
        });
    }

    crearCoche(coche) {
        let request = "api/coches/insertcoche";
        let url = Global.urlApiCoches + request;
        return axios.post(url, coche).then(response => {
            return response.data;
        });
    }

    modificarCoche(coche) {
        let request = "api/coches/updatecoche";
        let url = Global.urlApiCoches + request;
        return axios.put(url, coche).then(response => {
            return response.data;
        });
    }

    eliminarCoche(idCoche) {
        let request = "api/coches/deletecoche/" + idCoche;
        let url = Global.urlApiCoches + request;
        return axios.delete(url).then(response => {
            return response.data;
        });
    }

}