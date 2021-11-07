<template>
  <div class="options-container">
    <ul>
      <li  :class="prueba[index]" @click="$emit('selectionPokemon',pokemon.id )" v-for="(pokemon, index) in pokemons" :key="pokemon.id">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
  data(){
    return{
      prueba: [
        "fondo1",
        "fondo2",
        "fondo3",
        "fondo4"
      ],
      ArrayColors: [
        {
          textColor: "#334859",
          fondoCOlor: "#A7B7BB"
        },
        {
          textColor: "#401f46",
          fondoCOlor: "#c9becc"
        },
        {
          textColor: "#a76932",
          fondoCOlor: "#faeadd"
        },
        {
          textColor:  "#4f5925",
          fondoCOlor: "#b7b59c"
        }
      ]
    }
  }
};
</script>

<style scope>
ul {
  list-style-type: none;
}
.fondo1{
  background-color: #A7B7BB;
  color: #334859;
  border:1px solid #A7B7BB;
}
.fondo2{
background-color:#c9becc ;
  color: #401f46;
  border: 1px solid #c9becc;
}
.fondo3{
background-color:#faeadd;
  color: #a76932;
  border: 1px solid #faeadd;
}
.fondo4{
background-color: #b7b59c;
  color:#4f5925 ;
  border: 1px solid #b7b59c;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #334859;
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>