<template>
  <div>
    <h1 class="mb-5">Registro de pacientes</h1>
    <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" class="row">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Correo electrónico"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" class="row">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Nombre"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" class="row">
        <b-form-input
          id="input-3"
          v-model="form.age"
          required
          placeholder="Edad"
          class="col-2"
        ></b-form-input>
      </b-form-group>

      <div class="row">
        <b-button type="submit" variant="success">Enviar</b-button>
        <b-button type="reset" variant="warning" class="ml-3">Borrar</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Registro",
  data() {
    return {
      form: {
        email: "",
        name: "",
        age: null
      },
      show: true
    };
  },
  methods: {
    ...mapActions(["registrarPaciente"]),
    onSubmit: function() {
      console.log("Registrando:", this.form);
      this.registrarPaciente(this.form);
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.age = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
