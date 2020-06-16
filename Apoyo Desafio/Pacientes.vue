<template>
  <div>
    <el-button type="primary" @click="add">Agregar</el-button>
    <el-table v-loading="loading" :data="patientList" style="width: 100%">
      <el-table-column prop="nombre" label="Nombre" width="180">
      </el-table-column>
      <el-table-column prop="correo" label="Correo" width="180">
      </el-table-column>
      <el-table-column prop="edad" label="Edad"> </el-table-column>
      <el-table-column fixed="right" label="Operaciones" width="120">
        <span slot-scope="scope">
          <el-button @click="toDelete(scope.row['id'])" type="text" size="small"
            >Eliminar</el-button
          >
          <el-button @click="edit(scope.row)" type="text" size="small"
            >Editar</el-button
          >
        </span>
      </el-table-column>
    </el-table>
  </div>
</template>
