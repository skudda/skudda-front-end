import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

const SAMPLE_ARTWORKS = [
  {
    id: 1,
    title: "Urban Reflections",
    imageUrl: "https://source.unsplash.com/1600x900/?abstract,art",
    description: "Mixed media on canvas exploring urban landscapes"
  },
  {
    id: 2, 
    title: "Nature's Pulse",
    imageUrl: "https://source.unsplash.com/1600x900/?nature,art",
    description: "Oil painting inspired by natural rhythms"
  },
  {
    id: 3,
    title: "Digital Dreams",
    imageUrl: "https://source.unsplash.com/1600x900/?digital,art", 
    description: "Digital art composition"
  }
];

const SAMPLE_TRACKS = [
  {
    id: 1,
    title: "Ambient Flow",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/02/22/audio_c8b8b371b3.mp3",
    duration: 180
  },
  {
    id: 2,
    title: "Electronic Journey",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c3c8a7c445.mp3", 
    duration: 240
  }
];

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/artworks", async (_req, res) => {
    res.json(SAMPLE_ARTWORKS);
  });

  app.get("/api/tracks", async (_req, res) => {
    res.json(SAMPLE_TRACKS);
  });

  const httpServer = createServer(app);
  return httpServer;
}
