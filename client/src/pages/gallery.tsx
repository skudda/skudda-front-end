import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import MasonryGrid from "@/components/art/masonry-grid";
import type { Artwork } from "@shared/schema";

export default function Gallery() {
  const { data: artworks, isLoading } = useQuery<Artwork[]>({
    queryKey: ["/api/artworks"],
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-[300px] w-full" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Art Gallery</h1>
        <p className="text-muted-foreground">
          A collection of my latest works
        </p>
      </div>
      
      {artworks && <MasonryGrid artworks={artworks} />}
    </div>
  );
}
