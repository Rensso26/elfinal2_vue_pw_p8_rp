import axios from "axios";

const URI_BASE="http://localhost:8081/api/examen/v1/doctores"

const guardar = async (body) =>{
    axios.put(`${URI_BASE}`,body).then(r =>r.data);
    console.log("enviado");
}

export const guardarFachada = async (body) =>{
    await guardar(body);
}