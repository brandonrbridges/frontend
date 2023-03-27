const HOST = process.env.NEXT_PUBLIC_API_URL

const GET = async (url: string, query?: any): Promise<object> => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-cache',
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

const UPLOAD = async (url: string, body: FormData): Promise<object> => {
  const options = {
    method: 'POST',
    body,
  }

  const response = await fetch(HOST + url, options)

  return await handleResponse(response)
}

const handleResponse = async (response: Response) => {
  const data = await response.json()

  if (!response.ok) {
    const error = response.statusText

    throw new Error(error)
  }

  if (!data) {
    return
  }

  return data
}

const fetcher = {
  GET,
  POST,
  PATCH,
  PUT,
  DELETE,
  UPLOAD,
}

export default fetcher
