<template>
  <div class="grid grid-cols-1 gap-4">
    <div class="p-4 shadow-sm rounded-lg shadow-emerald-50" v-for="room in rooms" :key="room.id">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-lg font-semibold">{{ room.name }}</h3>
          <p>{{ room.totalSeats }} seats</p>
        </div>
        <Button
          as="routerLink"
          :to="{ name: 'Booking', params: { roomId: room.id } }"
          class="p-button-raised p-button-success"
          label="Check movies"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { IRoom } from '@/core'
import Button from 'primevue/button'

const rooms = ref<IRoom[]>([
  { id: '1', name: 'Red Room', seats: [], totalSeats: 150 },
  { id: '2', name: 'Green Room', seats: [], totalSeats: 200 },
  { id: '3', name: 'Blue Room', seats: [], totalSeats: 120 }
])
</script>
