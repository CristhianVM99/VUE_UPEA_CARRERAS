<script setup>
import { useQuery }  from "vue-query"
import { getInstitucion } from "../api/institucionAPI"
import Navbar from "../components/Navbar/index.vue"


function useInstitucionQuery(){
  return useQuery("todos", getInstitucion)
}
const { isLoading, isError, data: institucion, error } = useInstitucionQuery();

</script>
<template>
  <div>
    <h1>Principal</h1>
    <span v-if="isLoading">Cargando</span>
    <span v-else-if="isError">Error: {{ error.message }}</span>
    <p v-else>{{ institucion.institucion_nombre }}</p>
  </div>
</template>