<template>
  <el-form inline :model="patient" class="demo-form-inline">
    <el-form-item label="Nombre">
      <el-input v-model="patient.nombre" placeholder="Nombre"></el-input>
    </el-form-item>
    <el-form-item label="Correo">
      <el-input v-model="patient.correo" placeholder="Correo"></el-input>
    </el-form-item>
    <el-form-item label="Edad">
      <el-input v-model="patient.edad" placeholder="Edad"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        v-if="edit"
        :loading="loading"
        @click="editPatient"
        >Editar</el-button
      >
      <el-button type="primary" v-else :loading="loading" @click="addPatient"
        >Agregar</el-button
      >
    </el-form-item>
  </el-form>
</template>
