export const fetchJson = async <T>(url: string): Promise<T> => {
  return fetch(url).then(res => res.json())
}