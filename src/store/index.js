import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const PATIENTS_FN_URL =
  "https://us-central1-crud-rest-c9ba3.cloudfunctions.net/patients";

export default new Vuex.Store({
  state: {
    pacientes: [],
    loading: {
      tablaPacientes: false
    }
  },

  mutations: {
    INICIALIZAR_PACIENTES: (state, pacientes) => {
      pacientes.forEach(paciente => {
        let { age, email, name } = paciente.data;
        state.pacientes.push({
          id: paciente.id,
          age,
          email,
          name
        });
      });
    },
    REGISTRAR_PACIENTE: (state, paciente) => {
      state.pacientes.push(paciente);
    },
    ELIMINAR_PACIENTE: (state, idPaciente) => {
      state.pacientes.splice(idPaciente, 1);
    }
  },

  actions: {
    obtenerPacientes: async context => {
      try {
        console.log("--- obtenerPacientes");
        let res = await axios.get(PATIENTS_FN_URL);
        context.commit("INICIALIZAR_PACIENTES", res.data);
      } catch (error) {
        console.log(error);
      }
    },
    registrarPaciente: async (context, paciente) => {
      try {
        console.log("--- registrarPaciente", paciente);
        let res = await axios({
          method: "post",
          url: `${PATIENTS_FN_URL}/patient`,
          data: paciente
        });
        console.log(res);
        context.commit("REGISTRAR_PACIENTE", {
          ...paciente,
          id: res.data
        });
      } catch (error) {
        console.log(error);
      }
    },
    eliminarPaciente: async (context, idPaciente) => {
      try {
        console.log("--- eliminarPaciente", idPaciente);
        let res = await axios({
          method: "delete",
          url: `${PATIENTS_FN_URL}/patient/${idPaciente}`
        });
        console.log(res);
        context.commit("ELIMINAR_PACIENTE", idPaciente);
      } catch (error) {
        console.log(error);
      }
    }
  }
});
