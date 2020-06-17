<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info" class="mb-5">
      <b-navbar-brand href="/">
        Vuex + Firebase Functions + Firestore
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Inicio</b-nav-item>
          <b-nav-item to="/registro">Registro</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container-fluid">
      <transition>
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: mapActions(["obtenerPacientes"]),

  mounted: function() {
    this.obtenerPacientes();
  }
};
</script>

<style lang="scss">
.v-enter {
  opacity: 0;
  transition-duration: 1s;
}
.v-enter-to {
  opacity: 1;
  transition-duration: 1s;
}
.v-leave {
  opacity: 0;
  transition-duration: 1s;
}
</style>
