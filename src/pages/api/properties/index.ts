import { fetcher } from '@/helpers'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { body, method } = request

  let data

  switch (method) {
    case 'GET':
      data = await fetcher.GET(`/properties`)

      return response.status(200).json(data)
    case 'POST':
      data = await fetcher.POST(`/properties`, body)

      return response.status(201).json(data)
    default:
      return response.status(405).end('Method Not Allowed')
  }
}
