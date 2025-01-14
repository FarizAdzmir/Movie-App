'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearch } from './search-provider'
import { SearchBar } from './search-bar'
import { fetchMovies } from '@/lib/api'

export default function MovieList() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { searchQuery } = useSearch()

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true)
        const data = await fetchMovies(searchQuery)
        setMovies(data)
        setError(null)
      } catch (err) {
        setError('Failed to fetch movies. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    loadMovies()
  }, [searchQuery])

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

  return (
    <div>
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {movies.slice(0, 20).map((movie) => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-lg mb-2">{movie.title}</h2>
                <p className="text-gray-600">Year: {movie.year}</p>
                <p className="text-gray-600">Director: {movie.director}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}