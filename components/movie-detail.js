'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { fetchMovieDetails } from '@/lib/api'

export function MovieDetail({ id }) {
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadMovieDetails = async () => {
      try {
        setLoading(true)
        const data = await fetchMovieDetails(id)
        setMovie(data)
        setError(null)
      } catch (err) {
        setError('Failed to fetch movie details. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    loadMovieDetails()
  }, [id])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-solid rounded-full animate-spin border-t-transparent"></div>
      </div>
    )
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>
  }

  if (!movie) {
    return null
  }

  return (
    <div>
      <Link href="/" className="inline-block mb-4 text-blue-500 hover:underline">
        ← Back to Movies
      </Link>
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          <div className="space-y-2">
            <p><strong>Year:</strong> {movie.year}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Rating:</strong> {movie.rating}</p>
            <p className="mt-4">{movie.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
