import axios from "axios";

const URI_BASE="http/localhost:8081/api/examen/v1/citas"

const guardar = async (body) =>{
    axios.post(`${URI_BASE}`,body).then(r => r.data);
}
const obtener = async () =>{
    return axios.get(`${URI_BASE}`).then(r =>r.data);
}

export const guardarFachada = async (body) =>{
    await guardar(body);
}

export const obtenerFachada = async () =>{
    return await obtener();
}