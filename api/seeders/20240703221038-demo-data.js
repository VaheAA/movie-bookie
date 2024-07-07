'use strict'

const { faker } = require('@faker-js/faker')

module.exports = {
	async up(queryInterface, Sequelize) {
		const colors = ['Red', 'Green', 'Blue']
		const colorElements = colors.flatMap(color => Array(3).fill(color))

		const rooms = [...Array(3)].map(() => ({
			name: faker.helpers.unique(faker.helpers.arrayElement, [['Red', 'Green', 'Blue']]),
			created_at: new Date(),
			updated_at: new Date()
		}))
		await queryInterface.bulkInsert('rooms', rooms)

		// Create fake movies
		const movies = [...Array(10)].map(() => ({
			title: faker.lorem.sentence(),
			poster_url: faker.image.imageUrl(),
			created_at: new Date(),
			updated_at: new Date()
		}))
		await queryInterface.bulkInsert('movies', movies)

		const allSeats = []
		rooms.forEach((room, index) => {
			for (let row = 1; row <= 10; row++) {
				for (let seat = 1; seat <= 8; seat++) {
					allSeats.push({
						room_id: Number(index) + 1,
						row_number: row,
						seat_number: seat,
						created_at: new Date(),
						updated_at: new Date()
					})
				}
			}
		})

		await queryInterface.bulkInsert('seats', allSeats)

		const showtimes = []

		movies.forEach((movie, movieIndex) => {
			rooms.forEach((room, roomIndex) => {
				const today = new Date()
				const startHour = Math.floor(Math.random() * 24)
				const startTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), startHour, 0, 0)
				const endTime = new Date(startTime.getTime() + 2 * 60 * 60 * 1000)

				showtimes.push({
					movie_id: movieIndex + 1,
					room_id: roomIndex + 1,
					start_time: startTime,
					end_time: endTime,
					created_at: new Date(),
					updated_at: new Date()
				})
			})
		})

		await queryInterface.bulkInsert('showtimes', showtimes)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('showtimes', null, {})
		await queryInterface.bulkDelete('seats', null, {})
		await queryInterface.bulkDelete('movies', null, {})
		await queryInterface.bulkDelete('rooms', null, {})
	}
}
