<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="contenedor" >
      <v-client-table :data="tableData" :columns="columns" :options="options"/>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
   data() {
    return {
        columns: ['id', 'name', 'age'],
        tableData: [
            { id: 1, name: "John", age: "20" },
            { id: 2, name: "Jane", age: "24" },
            { id: 3, name: "Susan", age: "16" },
            { id: 4, name: "Chris", age: "55" },
            { id: 5, name: "Dan", age: "40" }
        ],
        options: {
          headings: {
            id: 'ID',
            name: 'NOMBRE',
            age: 'EDAD',
          },
          texts: {
            count: 'Ver {from} hasta {to} de {count} resultaldos|{count} registros|Un registro',
            first: 'Primero',
            last: 'Último',
            filter: 'Filtro:',
            filterPlaceholder: 'Filtrar por',
            limit: 'Registros:',
            page: 'Page:',
            noResults: 'No hay registros',
            // filterBy: 'Filtrar por {columna}',
            loading: 'Loading...',
            defaultOption: 'Seleccionar {columna}',
            columns: 'Columnas'
          },
          filterable: true,
          filterByColumn: true,
        }
    }
  }
}
  
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.contenedor {
  margin:0 auto;
  max-width: 650px;
}
</style>
