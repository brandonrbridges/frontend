import { fetcher } from '@/helpers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  return NextResponse.json({ message: 'Hello World' })
}

export async function PATCH(request: Request) {
  const response = await request.json()

  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  const data = await fetcher.PATCH(`/users/${id}`, response.body)

  return NextResponse.json(data)
}
