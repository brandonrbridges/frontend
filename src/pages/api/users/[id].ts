import { fetcher } from '@/helpers'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { body, method, query } = request
  const { id } = query

  let data

  switch (method) {
    case 'GET':
      data = await fetcher.GET(`/users/${id}`)

      return response.status(200).json(data)
    case 'PATCH':
      data = await fetcher.POST(`/users/${id}`, body)

      return response.status(201).json(data)
    default:
      return response.status(405).end('Method Not Allowed')
  }
}
