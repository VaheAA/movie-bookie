<template>
  <div class="container mx-auto p-4">
    <div class="max-w-[1200px] mx-auto">
      <h2 class="text-6xl text-center py-10">Select your next watch!</h2>
      <movie-carousel :movies="movies" @select-movie="selectMovie" />
    </div>
    <div class="flex flex-col gap-4 max-w-[1200px] mx-auto" v-if="selectedMovie">
      <MovieDetails :movie="selectedMovie" />
      <p class="text-4xl text-center py-2">Selects your seats!</p>
      <div class="flex gap-6">
        <div class="w-2/3">
          <span class="inline-block my-2">All seats:</span>
          <BookingGrid :room="currentRoom" @toggle-seat="toggleSeat" />
        </div>
        <div class="flex-1 flex flex-col">
          <div>
            <span class="inline-block my-2">Selected seats:</span>
            <div>
              <Button
                class="m-1 p-button-secondary"
                v-for="seat in selectedSeats"
                :key="seat.label"
                @click="unselectSeat(seat.label)"
                >{{ seat.label }}</Button
              >
            </div>
          </div>
          <div class="text-center mt-auto">
            <Button
              :disabled="!selectedSeats.length"
              label="Book Now"
              class="p-button-raised p-button-danger"
              @click="bookTickets"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MovieDetails from '@/components/movie/MovieDetails.vue'
import BookingGrid from '@/components/booking/BookingGrid.vue'
import Button from 'primevue/button'
import { computed, nextTick, ref } from 'vue'
import type { IMovie, IRoom } from '@/core'
import MovieCarousel from '@/components/movie/MovieCarousel.vue'
import { scrollToBottom } from '@/shared/helpers'

const movies = ref<IMovie[]>([
  {
    id: '1000',
    name: 'Dune',
    schedule: '12:00 AM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.',
    room: 'Red',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThkdVs1sMOKFRKkgYknDF96wIxVddswJvOYA&s',
    trailer: 'https://www.youtube.com/watch?v=n9xhJrPXop4'
  },
  {
    id: '1001',
    name: 'Dune 2',
    schedule: '02:00 AM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.',
    room: 'Red',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThkdVs1sMOKFRKkgYknDF96wIxVddswJvOYA&s',
    trailer: 'https://www.youtube.com/watch?v=n9xhJrPXop4'
  },
  {
    id: '1002',
    name: 'Dune 4',
    schedule: 't 04:30 AM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.',
    room: 'Red',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThkdVs1sMOKFRKkgYknDF96wIxVddswJvOYA&s',
    trailer: 'https://www.youtube.com/watch?v=n9xhJrPXop4'
  },
  {
    id: '1003',
    name: 'Dune 3',
    schedule: '07:00 PM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.',
    room: 'Red',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThkdVs1sMOKFRKkgYknDF96wIxVddswJvOYA&s',
    trailer: 'https://www.youtube.com/watch?v=n9xhJrPXop4'
  }
])

const currentRoom = ref<IRoom>({
  id: '1',
  name: 'Red',
  seats: Array.from({ length: 80 }, (_, i) => ({
    label: `Seat ${i + 1}`,
    selected: false,
    available: true
  })),
  totalSeats: 100
})

const getSeats = () => {
  currentRoom.value.seats = Array.from({ length: 80 }, (_, i) => ({
    label: `Seat ${i + 1}`,
    selected: false,
    available: true
  }))
}

const selectedMovie = ref<IMovie | null>(null)

const bookTickets = () => {
  selectedMovie.value = null
}

const toggleSeat = (index: number) => {
  currentRoom.value.seats[index].selected = !currentRoom.value.seats[index].selected
}

const unselectSeat = (seatLabel: string) => {
  const selectedSeatIndex = currentRoom.value.seats.findIndex((seat) => seat.label === seatLabel)
  currentRoom.value.seats[selectedSeatIndex].selected = false
}

const selectedSeats = computed(() => currentRoom.value.seats.filter(({ selected }) => selected))

const selectMovie = (movieId: string) => {
  selectedMovie.value = movies.value.find(({ id }) => id === movieId) ?? null
  getSeats()
  nextTick(() => scrollToBottom())
}
</script>
