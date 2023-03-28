// Next
import { NextResponse } from 'next/server'

// Helpers
import { fetcher } from '@/helpers'

export async function GET(request: Request) {
  const data = await fetcher.GET('/properties')

  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const body = await request.json()

  const property = await fetcher.POST('/properties', {
    ...body,
    user_id: 'system',
  })

  return NextResponse.json(property)
}
