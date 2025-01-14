import { MovieDetail } from '@/components/movie-detail'

export default async function MovieDetailPage({ params }) {
  const { id } = await Promise.resolve(params); // Ensure params is resolved asynchronously

  return (
    <main className="min-h-screen p-4">
      <div className="container mx-auto">
        <MovieDetail id={id} />
      </div>
    </main>
  );
}
