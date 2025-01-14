'use client'

import { useSearch } from './search-provider'

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useSearch()

  return (
    <input
      type="text"
      className="w-full p-2 mb-4 border rounded-xl"
      placeholder="Search movies..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  )
}
