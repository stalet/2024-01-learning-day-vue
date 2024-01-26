<script setup lang="ts">
import RickAndMortyList from '@/components/RickAndMortyList.vue'
import RickAndMortyDetails from '@/components/RickAndMortyDetails.vue'
</script>

<template>
  <header>
    <div class="list">
      <RickAndMortyList />
    </div>
    <div class="details">
      <RickAndMortyDetails />
    </div>

  </header>

</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }
  .list {
    margin: 10px;
    flex-grow: 1;
  }
}
</style>
