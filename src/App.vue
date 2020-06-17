<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info" class="mb-5">
      <b-navbar-brand href="#">Firebase Functions + Firestore</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Inicio</b-nav-item>
          <b-nav-item to="/registro">Registro</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container">
      <transition>
        <router-view />
      </transition>
    </div>
  </div>
</template>
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
