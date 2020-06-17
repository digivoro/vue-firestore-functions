<template>
  <div>
    <h1 class="mb-5">Pacientes</h1>
    <b-spinner label="Loading..."></b-spinner>
    <b-table hover :items="pacientes" :fields="campos" head-variant="dark">
      <template v-slot:cell(accion)="">
        <div v-if="!editando">
          <b-button variant="success">
            <b-icon
              @click="onEditClick"
              icon="pencil-square"
              variant="white"
            ></b-icon>
            Editar
          </b-button>
          <b-button @click="onDeleteClick" class="ml-3" variant="danger">
            <b-icon icon="trash-fill" variant="white"></b-icon>
            Eliminar
          </b-button>
        </div>
        <div v-else>
          <b-button @click="toggleEdit" variant="primary">
            <b-icon icon="check2-square" variant="white"></b-icon>
            Guardar
          </b-button>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data: function() {
    return {
      editando: false,
      campos: [
        { key: "id", sortable: true },
        { key: "name", sortable: true },
        { key: "age", sortable: true },
        { key: "email", sortable: true },
        { key: "accion", label: "" }
      ]
    };
  },

  computed: mapState(["pacientes", "loading"]),

  methods: {
    ...mapActions(["obtenerPacientes"]),
    onEditClick: function(evt) {
      console.log(evt);
    },
    onDeleteClick: function() {},
    toggleEdit: function() {
      this.editando = !this.editando;
    }
  },

  mounted() {
    this.obtenerPacientes();
  }
};
</script>

<style lang="scss" scoped></style>
