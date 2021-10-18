export const fetchJson = async(url: string, init?: RequestInit ): Promise<Response> => {
  const data = await fetch(url, init);
  const dataformated = await data.json();
  return dataformated
}

