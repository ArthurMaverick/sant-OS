import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'

export const markdownToHtml = async (content: string): Promise<string> => {
  const file = await unified()
  .use(remarkParse)
  .use(remarkHtml)
  .process(content)

  return String(file)
}
