<script setup lang="ts">
import { getCharacters } from 'rickmortyapi'
import { ref } from 'vue'
import type { Character, Info } from 'rickmortyapi/dist/interfaces'
import { character } from '@/components/state'

const pageNum = ref( 1);
const data = ref<Info<Character[]>>();

function increment() {
  pageNum.value++;
  update(pageNum.value);
}

function decrement() {
  pageNum.value--;
  update(pageNum.value);
}

function update(page: number) {
  console.log(`update page? ${page}`);
  getCharacters({ page })
    .then((response) => {
      console.log(response);
      data.value = response.data;
    })
}

function details(char: Character) {
  console.log(`details ${char}`);
  character.value.setData(char);
}


update(pageNum.value);

</script>

<template>
  <div class="rick-and-morty-list">
    <h1>
      Rick and Morty Characters
      <span v-if="data">page {{pageNum || 1}} of {{data?.info?.pages}}</span>
    </h1>
    <ul v-if="data">
      <li v-for="character in data?.results" :key="character.id">
        {{ character.id }} : {{ character.name }}
        <button @click="() => details(character)">See Details</button>
      </li>
    </ul>
    <div v-else>
      Loading...
    </div>
    <div v-if="data">
      <button v-if="data?.info?.prev" @click="decrement">Prev</button>
      <button v-if="data?.info?.next" @click="increment">Next</button>
    </div>
  </div>

</template>

<style scoped>

</style>
