import MovieList from '@/components/movie-list'
import { SearchProvider } from '@/components/search-provider'

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Movie App</h1>
        <SearchProvider>
          <MovieList />
        </SearchProvider>
      </div>
    </main>
  )
}