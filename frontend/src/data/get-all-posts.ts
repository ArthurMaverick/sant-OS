import {API_URL} from '../config/env'
import {fetchJson} from '../services/fetch-json'

export const getPosts  = async (query?: string): Promise<any[]> => {
  const url = `${API_URL}/?${query}`
  const posts = await fetchJson<any[]>(url)
  return posts
}