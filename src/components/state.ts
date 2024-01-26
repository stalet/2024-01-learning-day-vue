import { ref } from 'vue'
import type { Character } from 'rickmortyapi/dist/interfaces'

export const character = ref<
  {
    data: undefined|Character,
    setData: (data: Character) => void}
>({
  data: undefined,
  setData(data: Character) {
    this.data = data;
  }
});
