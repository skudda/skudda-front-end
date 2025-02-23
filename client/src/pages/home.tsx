import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Artwork, Track } from "@shared/schema";

export default function Home() {
  const { data: artworks } = useQuery<Artwork[]>({
    queryKey: ["/api/artworks"],
  });

  const { data: tracks } = useQuery<Track[]>({
    queryKey: ["/api/tracks"],
  });

  return (
    <div className="max-w-5xl mx-auto space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 to-purple-200/30 blur-3xl -z-10" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Creative Portfolio
        </h1>
        <p className="text-xl text-muted-foreground">
          Visual Artist & Music Producer
        </p>
      </motion.div>

      {/* Featured Artworks */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold">Featured Artworks</h2>
          <Link href="/gallery">
            <Button variant="ghost" className="group">
              View Gallery
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {artworks?.slice(0, 3).map((artwork, i) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-400/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-medium text-lg">{artwork.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Music */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold">Latest Tracks</h2>
          <Link href="/music">
            <Button variant="ghost" className="group">
              View All Music
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        <div className="space-y-4">
          {tracks?.slice(0, 2).map((track) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-purple-50 rounded-lg p-4 hover:bg-purple-100/50 transition-colors"
            >
              <h3 className="font-medium mb-2">{track.title}</h3>
              <audio
                controls
                className="w-full"
                src={track.audioUrl}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="prose prose-lg dark:prose-invert mx-auto"
      >
        <h2>About Me</h2>
        <p>
          With a passion for both visual arts and music production, I create
          immersive experiences that challenge perceptions and evoke emotions. My
          work has been featured in galleries across the country and my music has
          been used in various independent films and installations.
        </p>

        <h2>Get in Touch</h2>
        <p>
          I'm always open to collaborations and new projects. Feel free to reach
          out at <a href="mailto:artist@example.com">artist@example.com</a>
        </p>
      </motion.section>
    </div>
  );
}