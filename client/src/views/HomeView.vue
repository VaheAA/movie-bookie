<template>
  <div
    class="bg-cover bg-center h-96 text-white py-24 px-4 object-fill"
    style="
      background-image: url('https://townsquare.media/site/657/files/2022/10/attachment-geoffrey-moffett-TFRezw7pQwI-unsplash.jpg?w=780&q=75');
    "
  >
    <div class="container mx-auto flex flex-col items-center justify-center text-white">
      <h1 class="text-4xl font-bold mb-2">Experience Cinema Like Never Before</h1>
      <p class="mb-4 text-lg">Browse and book tickets for the latest and greatest movies!</p>
    </div>
  </div>

  <div class="max-w-[1300px] mx-auto pt-10">
    <h2 class="text-4xl mb-3">Available rooms</h2>
    <room-list />
  </div>
</template>

<script setup lang="ts">
import RoomList from '@/components/rooms/RoomList.vue'
</script>
