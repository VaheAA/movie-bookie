import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(isBetween)

export function formatDate(isoDateStr: string) {
	const date = new Date(isoDateStr)

	return dayjs(date).format('YYYY-MM-DD HH:mm')
}

export function isExpired(startDate: string, endDate: string) {
	return dayjs().isBetween(startDate, endDate) || dayjs().isAfter(endDate)
}
