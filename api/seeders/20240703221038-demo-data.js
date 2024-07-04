'use strict'

const { faker } = require('@faker-js/faker')

module.exports = {
	async up(queryInterface, Sequelize) {
		const rooms = [...Array(3)].map(() => ({
			name: faker.helpers.arrayElement(['Red', 'Green', 'Blue']),
			createdAt: new Date(),
			updatedAt: new Date()
		}))
		await queryInterface.bulkInsert('rooms', rooms)

		// Create fake movies
		const movies = [...Array(10)].map(() => ({
			title: faker.lorem.sentence(),
			poster_url: faker.image.imageUrl(),
			createdAt: new Date(),
			updatedAt: new Date()
		}))
		await queryInterface.bulkInsert('movies', movies)

		// Create fake seats for each room
		const allSeats = []
		rooms.forEach((room, index) => {
			for (let row = 1; row <= 10; row++) {
				// 10 rows
				for (let seat = 1; seat <= 8; seat++) {
					// 8 seats per row
					allSeats.push({
						room_id: Number(index) + 1,
						row_number: row,
						seat_number: seat,
						createdAt: new Date(),
						updatedAt: new Date()
					})
				}
			}
		})

		const addedSeats = await queryInterface.bulkInsert('seats', allSeats, {
			returning: true
		})

		// Create fake showtimes and bookings
		const showtimes = []

		const bookings = []
		movies.forEach((movie, movieIndex) => {
			rooms.forEach((room, roomIndex) => {
				const startTime = faker.date.future()
				const endTime = new Date(startTime.getTime() + 2 * 60 * 60 * 1000) // Each movie lasts 2 hours
				showtimes.push({
					movie_id: movieIndex + 1,
					room_id: roomIndex + 1,
					start_time: startTime,
					end_time: endTime,
					createdAt: new Date(),
					updatedAt: new Date()
				})
			})
		})
		await queryInterface.bulkInsert('showtimes', showtimes)

		// Assume every fifth seat is booked for the first showtime
		showtimes.forEach((showtime, index) => {
			addedSeats
				.filter((_, seatIndex) => seatIndex % 5 === 0)
				.forEach(seat => {
					bookings.push({
						showtime_id: index + 1,
						seat_id: seat.id,
						booked_at: new Date(),
						createdAt: new Date(),
						updatedAt: new Date()
					})
				})
		})
		await queryInterface.bulkInsert('bookings', bookings)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('bookings', null, {})
		await queryInterface.bulkDelete('showtimes', null, {})
		await queryInterface.bulkDelete('seats', null, {})
		await queryInterface.bulkDelete('movies', null, {})
		await queryInterface.bulkDelete('rooms', null, {})
	}
}
