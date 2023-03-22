const HOST = process.env.NEXT_PUBLIC_API_URL

const GET = async (url: string, query?: any): Promise<object> => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const params: string = query ? '?' + new URLSearchParams(query).toString() : ''

  const response = await fetch(HOST + url + params, options)

  return await handleResponse(response)
}

const POST = async (url: string, body: object): Promise<object> => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }

  const response = await fetch(HOST + url, options)

  return await handleResponse(response)
}

const PATCH = async (url: string, body: object): Promise<object> => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }

  const response = await fetch(HOST + url, options)

  return await handleResponse(response)
}

const PUT = async (url: string, body: object): Promise<object> => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }

  const response = await fetch(HOST + url, options)

  return await handleResponse(response)
}

const DELETE = async (url: string): Promise<object> => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const response = await fetch(HOST + url, options)

  return await handleResponse(response)
}

const handleResponse = async (response: Response) => {
  const text = await response.text()
  const data = text && JSON.parse(text)

  if (!response.ok) {
    const error = (data && data.message) || response.statusText

    return Promise.reject(error)
  }

  return data
}

const fetcher = {
  GET,
  POST,
  PATCH,
  PUT,
  DELETE,
}

export default fetcher
