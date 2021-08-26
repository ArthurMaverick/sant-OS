export const fetchJson = async(url: string, option?: RequestInit ): Promise<Response> => {
  const data = await fetch(url, option);
  const dataformated = await data.json();
  return dataformated
}

