<template>
  <label for="cd">Cedula:</label>
  <input id="cd" type="text" v-model="doctor.cd" />
  <label for="nombre">Nombre:</label>
  <input id="nombre" type="text" v-model="doctor.nombre" />
  <label for="apellido">Apellido:</label>
  <input id="apellido" type="text" v-model="doctor.apellido" />
  <label for="fechaNacimiento">Fecha de Nacimiento:</label>
  <input id="fechaNacimiento" type="datetime" v-model="doctor.genero" />
  <button @click="guardarDoctor">Guardar Paciente</button>
  <h1 v-if="mensaje">{{ mensaje }}</h1>
</template>

<script>
import { guardarFachada } from "@/Controller/PacienteController";
export default {
  data() {
    return {
      doctor: {
        cd: null,
        nombre: null,
        apellido: null,
        fechaNacimiento: null,
      },
      mensaje: null
    };
  },
  methods: {
    guardarDoctor() {
      guardarFachada(this.doctor);
      this.mensaje="Doctor Guardado"
    //   borrarFormulario();
    },
  },
};
</script>

<style>
</style>