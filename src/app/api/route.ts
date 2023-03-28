// Next
import { NextResponse } from 'next/server'

// Helpers
import { fetcher } from '@/helpers'

export async function GET(request: Request) {
  const data = await fetcher.GET('/')

  return NextResponse.json(data)
}
