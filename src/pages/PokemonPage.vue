<template>
  <div class="fondo">
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
      <h1>¿Quien es este pokemon?</h1>
      <pokemon-img :pokemonId="pokemon.id" :showPokemon="showPokemon" />
      <pokemon-opcion :pokemons="pokemonArr" @selection="checkAnswer" />

      <template v-if="showAnser">
        <h2>{{ message }}</h2>
        <button @click="newGame">Nuevo Juego</button>
      </template>
    </div>
  </div>
</template>

<script>
import PokemonImg from "@/components/PokemonImg.vue";
import PokemonOpcion from "@/components/PokemonOpcion.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  name: "Pokemon Page",
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      message: "",
      showAnser: false,
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    newGame() {
      this.showAnser = false;
      this.showPokemon = false;
      this.pokemonArr = [];
      this.pokemon = null;
      this.mixPokemonArray();
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true;
      if (pokemonId === this.pokemon.id) {
        this.showAnser = true;
        this.message = `Respuesta correcta ${this.pokemon.name}`;
      } else {
        this.showAnser = true;
        this.message = `Respuesta incorrecta la opcion era ${this.pokemon.name}`;
      }
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
  components: {
    PokemonImg,
    PokemonOpcion,
  },
};
</script>

<style scope>
#app {
  padding: 0px;
  margin: 0px;
}
html,
body {
  text-align: center;
}
h1{
  padding: 10px;
  margin: 0px;
  color: #862938;
  font-family: Arial, Helvetica, sans-serif;
}
.fondo {
  margin: 0px;
  padding: 0px;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
button{
  background-color: #f6e7e2;
  color: #832634;
  border: none;
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  cursor: pointer;
}
</style>