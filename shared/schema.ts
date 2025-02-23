import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const artworks = pgTable("artworks", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  imageUrl: text("image_url").notNull(),
  description: text("description"),
});

export const tracks = pgTable("tracks", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  audioUrl: text("audio_url").notNull(),
  duration: integer("duration").notNull(),
});

export const insertArtworkSchema = createInsertSchema(artworks).pick({
  title: true,
  imageUrl: true,
  description: true,
});

export const insertTrackSchema = createInsertSchema(tracks).pick({
  title: true,
  audioUrl: true,
  duration: true,
});

export type InsertArtwork = z.infer<typeof insertArtworkSchema>;
export type InsertTrack = z.infer<typeof insertTrackSchema>;
export type Artwork = typeof artworks.$inferSelect;
export type Track = typeof tracks.$inferSelect;
