<template>
  <div>
    <h1 class="mb-5">Pacientes</h1>
    <b-spinner label="Loading..." v-if="loading.tablaPacientes"></b-spinner>
    <table class="table" v-else>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Email</th>
          <th></th>
        </tr>
        <tr v-for="paciente in getPacientes" :key="paciente.id">
          <td>
            <span v-if="paciente.editando">
              <input type="text" v-model="paciente.inputName" />
            </span>
            <span v-else>{{ paciente.name }}</span>
          </td>
          <td>
            <span v-if="paciente.editando">
              <input type="text" v-model="paciente.inputAge" />
            </span>
            <span v-else>{{ paciente.age }}</span>
          </td>
          <td>
            <span v-if="paciente.editando">
              <input type="text" v-model="paciente.inputEmail" />
            </span>
            <span v-else>{{ paciente.email }}</span>
          </td>
          <td>
            <div v-if="!paciente.editando">
              <b-button @click="onEditClick(paciente.id)" variant="success">
                <b-icon icon="pencil" variant="white"></b-icon>
                Editar
              </b-button>
              <b-button
                class="ml-3"
                @click="onDeleteClick(paciente.id)"
                variant="danger"
              >
                <b-icon icon="trash-fill" variant="white"></b-icon>
                Eliminar
              </b-button>
            </div>
            <div v-else>
              <b-button @click="onFinishEditClick(paciente)" variant="primary">
                <b-icon icon="check2-square" variant="white"></b-icon>
                Guardar
              </b-button>
            </div>
          </td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
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

  computed: { ...mapGetters(["getPacientes"]), ...mapState(["loading"]) },

  methods: {
    ...mapActions([
      "eliminarPaciente",
      "activarEdicionPaciente",
      "guardarPacienteEditado"
    ]),
    onEditClick: function(idPaciente) {
      this.activarEdicionPaciente(idPaciente);
    },
    onFinishEditClick: function(pacienteEditado) {
      this.guardarPacienteEditado(pacienteEditado);
    },
    onDeleteClick: async function(idPaciente) {
      await this.eliminarPaciente(idPaciente);
    }
  }
};
</script>

<style lang="scss" scoped></style>
