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
  if (!response.ok) {
    let error: string
    let status: number

    if (response.headers.get('Content-Type')?.includes('application/json')) {
      const data = await response.json()
      error = (data && data.message) || response.statusText
      status = response.status
    } else {
      error = response.statusText
      status = response.status
    }

    return {
      error,
      status,
    }
  }

  if (
    response.headers.get('Content-Type')?.includes('application/json') &&
    response.status !== 204
  ) {
    return await response.json()
  }

  return null
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
