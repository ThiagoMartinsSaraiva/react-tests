export const useFetch = () => {
  const request = async (endpoint: string, method: 'get' | 'post' | 'put' | 'delete' = 'get') => {
    const response = await fetch(`api/${endpoint}`, {
      method,
    })
    const { data } = await response.json()
    return data
  }

  return { request }
}