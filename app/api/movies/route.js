import { NextResponse } from 'next/server'

const BASE_URL = 'https://freetestapi.com/api/v1/movies'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search')
    
    const url = search ? `${BASE_URL}?search=${encodeURIComponent(search)}` : BASE_URL
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error('Failed to fetch movies')
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}