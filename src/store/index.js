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
    TOGGLE_LOADING: ({ loading }, componente) => {
      loading[componente] = !loading[componente];
    },
    INICIALIZAR_PACIENTES: (state, pacientes) => {
      state.pacientes = [];
      pacientes.forEach(paciente => {
        let { age, email, name } = paciente.data;
        state.pacientes.push({
          id: paciente.id,
          age,
          email,
          name,
          editando: false,
          inputName: name,
          inputEmail: email,
          inputAge: age
        });
      });
    },
    REGISTRAR_PACIENTE: (state, paciente) => {
      state.pacientes.push(paciente);
    },
    ELIMINAR_PACIENTE: (state, idPaciente) => {
      state.pacientes = state.pacientes.filter(
        paciente => paciente.id != idPaciente
      );
    },
    TOGGLE_EDICION_PACIENTE: (state, idPaciente) => {
      state.pacientes = state.pacientes.map(paciente =>
        paciente.id !== idPaciente
          ? paciente
          : { ...paciente, editando: !paciente.editando }
      );
    },
    GUARDAR_PACIENTE_EDITADO: (state, pacienteEditado) => {
      let { id, inputName, inputAge, inputEmail } = pacienteEditado;
      state.pacientes = state.pacientes.map(paciente =>
        paciente.id !== id
          ? paciente
          : {
              ...pacienteEditado,
              name: inputName,
              age: inputAge,
              email: inputEmail
            }
      );
    }
  },

  actions: {
    obtenerPacientes: async ({ commit }) => {
      try {
        commit("TOGGLE_LOADING", "tablaPacientes");
        console.log("--- obtenerPacientes");
        let res = await axios.get(PATIENTS_FN_URL);
        commit("INICIALIZAR_PACIENTES", res.data);
      } catch (error) {
        console.log(error);
      } finally {
        commit("TOGGLE_LOADING", "tablaPacientes");
      }
    },
    registrarPaciente: async ({ commit }, paciente) => {
      try {
        console.log("--- registrarPaciente", paciente);
        let res = await axios({
          method: "post",
          url: `${PATIENTS_FN_URL}/patient`,
          data: paciente
        });
        console.log(res);
        commit("REGISTRAR_PACIENTE", {
          ...paciente,
          id: res.data
        });
      } catch (error) {
        console.log(error);
      }
    },
    eliminarPaciente: async ({ commit }, idPaciente) => {
      try {
        commit("TOGGLE_LOADING", "tablaPacientes");
        console.log("--- eliminarPaciente", idPaciente);

        let res = await axios({
          method: "delete",
          url: `${PATIENTS_FN_URL}/patient/${idPaciente}`
        });
        console.log(res);
        commit("ELIMINAR_PACIENTE", idPaciente);
      } catch (error) {
        console.log(error);
      } finally {
        commit("TOGGLE_LOADING", "tablaPacientes");
      }
    },
    activarEdicionPaciente: ({ commit }, idPaciente) => {
      commit("TOGGLE_EDICION_PACIENTE", idPaciente);
    },
    guardarPacienteEditado: async ({ commit }, pacienteEditado) => {
      console.log("guardarPacienteEditado:");
      commit("TOGGLE_LOADING", "tablaPacientes");
      let { id, inputAge, inputEmail, inputName } = pacienteEditado;

      try {
        let res = await axios({
          method: "put",
          url: `${PATIENTS_FN_URL}/patient/${id}`,
          data: {
            age: inputAge,
            email: inputEmail,
            name: inputName
          }
        });
        console.log(res);
        commit("GUARDAR_PACIENTE_EDITADO", pacienteEditado);
      } catch (error) {
        console.log(error);
      } finally {
        commit("TOGGLE_EDICION_PACIENTE", id);
        commit("TOGGLE_LOADING", "tablaPacientes");
      }
    }
  },

  getters: {
    getPacientes: state => {
      return state.pacientes;
    }
  }
});
