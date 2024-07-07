import axios from 'axios'
import { BASE_API_URL } from '@/shared/constants'

const api = axios.create({
	baseURL: BASE_API_URL
})

export default api
