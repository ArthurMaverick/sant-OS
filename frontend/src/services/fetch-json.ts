export const fetchJson = async <T>(url: string): Promise<T> => {
  const data = await fetch(url)
  const dataformated = await data.json()
  return dataformated
}