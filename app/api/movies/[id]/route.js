import { NextResponse } from 'next/server'

const BASE_URL = 'https://freetestapi.com/api/v1/movies'

export async function GET(request, { params }) {
  try {
    // Ensure `params` is resolved asynchronously
    const { id } = await Promise.resolve(params);

    const response = await fetch(`${BASE_URL}/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
