<script lang="ts">
import { defineComponent } from 'vue'
import { character } from '@/components/state'
import type { Character } from 'rickmortyapi/dist/interfaces'

export default defineComponent({
  computed: {
    character(): Character| undefined {
      return character.value.data
    }
  }
})


console.log("character", character);

</script>

<template>
  <div v-if="character" class="rick-and-morty-details">
    <h1>
      {{character.id}}:{{character.name}}
    </h1>
    <div>
      <img :src="character.image" :alt="character.name" />
    </div>
  </div>
</template>

<style scoped>

</style>
