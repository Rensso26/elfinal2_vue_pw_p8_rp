<template>
  <label for="cd">Cedula:</label>
  <input id="cd" type="text" v-model="doctor.cd" />
  <label for="nombre">Nombre:</label>
  <input id="nombre" type="text" v-model="doctor.nombre" />
  <label for="apellido">Apellido:</label>
  <input id="apellido" type="text" v-model="doctor.apellido" />
  <label for="genero">Genero:</label>
  <input id="genero" type="select" v-model="doctor.genero" />
  <button @click="guardarDoctor">Guardar Docotor</button>
  <h1 v-if="mensaje">{{ mensaje }}</h1>
</template>

<script>
import { guardarFachada } from "@/Controller/DoctorController";
export default {
  data() {
    return {
      doctor: {
        cd: null,
        nombre: null,
        apellido: null,
        genero: null,
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

    // borrarFormulario(){
    //     this.cd = null
    //     this.nombre= null,
    //     this.apellido= null,
    //     this.genero= null,
    // },
  },
};
</script>

<style>
</style>