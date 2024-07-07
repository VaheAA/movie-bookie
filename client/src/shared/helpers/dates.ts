import dayjs from 'dayjs'

export function formatDate(isoDateStr: string) {
	const date = new Date(isoDateStr)

	return dayjs(date).format('YYYY-MM-DD HH:mm')
}

export function isExpired(isoDateStr: string) {
	return dayjs().isAfter(dayjs(isoDateStr))
}
