export const useFetch = () => {
  async function request<TResponse> (endpoint: string, method: 'get' | 'post' | 'put' | 'delete' = 'get') {
    const response = await fetch(`api/${endpoint}`, {
      method,
    })
    const { data } = await response.json()
    return data as TResponse
  }

  return { request }
}
