import {GET_POST_BY_SLUG} from '../config/env'
import { markdownToHtml } from '../services/convertMDtoHTML'
import {fetchJson} from '../services/fetch-json'

export const getPostBySlug  = async (slug: string): Promise<any[]> => {
  const url = `${GET_POST_BY_SLUG}/?${slug}`
  const posts = await fetchJson<any[]>(url)
  
  if(!posts.length) return posts

  const content = await markdownToHtml(posts[0].body)
  const finalContent = { ...posts, content }
  return [finalContent]
  
}