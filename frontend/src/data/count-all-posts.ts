import {GET_ALL_POSTS} from '../config/env'
import {fetchJson} from '../services/fetch-json'

export const postsCounter  = async (): Promise<number> => {
  const url = `${GET_ALL_POSTS}/?limit=100`
  const posts = await fetchJson<any[]>(url)
  return posts.length
}