<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap">
      <div v-for="(seat, index) in room.seats" :key="index" class="p-1">
        <Button
          :disabled="!seat.available"
          :label="seat.label"
          :class="{
            'p-button-success': seat.selected && seat.available,
            'p-button-secondary': !seat.selected
          }"
          @click="toggleSeat(index)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import type { IRoom } from '@/core'

const props = defineProps<{
  room: IRoom
}>()

const { room } = props

const emit = defineEmits(['toggleSeat'])

const toggleSeat = (index: number) => {
  emit('toggleSeat', index)
}
</script>
