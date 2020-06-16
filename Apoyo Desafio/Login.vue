<template>
  <div id="login">
    <img src="../assets/desafio-latam.png" class="img-inicial mb-3" />
    <el-form label-width="100px" class="form-login" :model="formLabelAlign">
      <el-input
        placeholder="Correo electrónico"
        v-model="formLabelAlign.user"
      ></el-input>
      <el-input
        type="password"
        placeholder="Contraseña"
        v-model="formLabelAlign.password"
        autocomplete="off"
      ></el-input>
      <el-button type="primary" class="ingresar-login" @click="login"
        >Ingresar</el-button
      >
    </el-form>
  </div>
</template>

<style scoped>
#login {
  padding: 60px;
}
.ingresar-login {
  width: 100%;
}
.img-inicial,
.form-login {
  display: block;
  margin: auto;
}
.form-login {
  width: 300px;
}
.el-input {
  margin-bottom: 10px;
}
</style>
