<template>
  <el-container direction="vertical">
    <el-col :xs="4">
      <el-button :xs="8" type="danger" @click="logout">Log out</el-button>
    </el-col>

    <el-container>
      <el-main>
        <agregar-paciente></agregar-paciente>
        <pacientes></pacientes>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-button {
  float: right;
  margin-top: 10px;
}

.el-aside {
  color: #333;
}
</style>
