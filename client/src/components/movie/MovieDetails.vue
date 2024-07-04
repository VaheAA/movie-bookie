<template>
  <div class="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="md:flex-shrink-0">
      <img class="w-full object-cover md:w-48" alt="Movie Poster" :src="props.movie.image" />
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        {{ props.movie.name }}
      </div>
      <span class="block mt-1 text-lg leading-tight font-medium text-black">{{
        props.movie.schedule
      }}</span>
      <span class="block mt-1 text-lg leading-tight font-medium text-black"
        >Room: {{ props.movie.room }}</span
      >
      <p class="mt-2 text-gray-500">
        {{ props.movie.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IMovie } from '@/core'

const props = defineProps<{
  movie: IMovie
}>()
</script>
