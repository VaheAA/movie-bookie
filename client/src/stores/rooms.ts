import { defineStore } from 'pinia'
import type { IRoom } from '@/core'
import { getAllRooms, getSingleRoom } from '@/services/rooms'
import { computed, ref } from 'vue'

export const useRoomsStore = defineStore('rooms', () => {
	const rooms = ref<IRoom[]>([])

	async function getRooms() {
		rooms.value = await getAllRooms()

		console.log(rooms.value)
	}

	async function getRoomById(roomId: number) {
		return await getSingleRoom(roomId)
	}

	return { rooms, getRooms, getRoomById }
})
