<template>
  <Carousel
    :value="props.movies"
    :numVisible="3"
    :numScroll="3"
    :responsiveOptions="responsiveOptions"
  >
    <template #item="slotProps">
      <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4 max-auto">
        <div class="mb-4">
          <div class="relative mx-auto">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThkdVs1sMOKFRKkgYknDF96wIxVddswJvOYA&s"
              alt="slotProps.data.name"
              class="w-full rounded"
            />
          </div>
        </div>
        <p class="mb-4 font-medium text-lg">{{ slotProps.data.name }}</p>
        <p class="mb-4 font-medium text-md">Room: {{ slotProps.data.room }}</p>
        <div class="flex justify-between items-center">
          <span>
            <Button
              as="a"
              :href="slotProps.data.trailer"
              target="_blank"
              label="Watch Trailer"
              severity="secondary"
              outlined
            />
            <Button label="Book now" class="ml-2" @click="selectMovie(slotProps.data.id)" />
          </span>
        </div>
      </div>
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import Carousel from 'primevue/carousel'
import Button from 'primevue/button'
import { ref } from 'vue'
import type { IMovie } from '@/core'

const props = defineProps<{ movies: IMovie[] }>()

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
])

const emit = defineEmits(['selectMovie'])

const selectMovie = (movieId: string) => {
  emit('selectMovie', movieId)
}
</script>

<style lang="scss" scoped></style>
