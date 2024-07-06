import api from '..'

export const getAllRooms = async () => {
	const { data } = await api.get('rooms')

	return data
}

export const getSingleRoom = async (roomId: number) => {
	const { data } = await api.get(`/rooms/${roomId}`)

	return data
}
