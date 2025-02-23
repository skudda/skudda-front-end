import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import AudioPlayer from "@/components/music/audio-player";
import type { Track } from "@shared/schema";

export default function Music() {
  const { data: tracks, isLoading } = useQuery<Track[]>({
    queryKey: ["/api/tracks"],
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-24 w-full" />
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Music</h1>
        <p className="text-muted-foreground">
          Listen to my latest compositions
        </p>
      </div>

      <div className="space-y-4">
        {tracks?.map((track) => (
          <AudioPlayer key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
}
