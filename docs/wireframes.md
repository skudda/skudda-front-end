# Website Wireframes and User Flows

## Layout Specifications

### Navigation
```
+------------------+----------------------+------------------+
|    Portfolio     |  Gallery | Music     |      Menu       |
|      Logo        |                     |                  |
+------------------+----------------------+------------------+

```

### Homepage Layout
```
+--------------------------------------------------+
|                  Navigation Bar                    |
+--------------------------------------------------+
|                                                   |
|           Creative Portfolio (Hero)               |
|        Visual Artist & Music Producer             |
|                                                   |
+--------------------------------------------------+
|              Featured Artworks                    |
|  +----------+  +----------+  +----------+        |
|  |          |  |          |  |          |        |
|  |  Art 1   |  |  Art 2   |  |  Art 3   |        |
|  |          |  |          |  |          |        |
|  +----------+  +----------+  +----------+        |
+--------------------------------------------------+
|              Latest Tracks                        |
|  +-----------------------------------------+     |
|  |     Track 1 with Audio Player           |     |
|  +-----------------------------------------+     |
|  |     Track 2 with Audio Player           |     |
|  +-----------------------------------------+     |
+--------------------------------------------------+
|                                                   |
|                  About Section                    |
|                                                   |
+--------------------------------------------------+
|                                                   |
|                Contact Section                    |
|                                                   |
+--------------------------------------------------+
```

### Gallery Page Layout
```
+--------------------------------------------------+
|                  Navigation Bar                    |
+--------------------------------------------------+
|                                                   |
|                Gallery Header                     |
|                                                   |
+--------------------------------------------------+
|                                                   |
|              Masonry Grid Layout                  |
|  +----------+  +----------------+  +----------+   |
|  |          |  |                |  |          |   |
|  |  Art 1   |  |     Art 2      |  |  Art 3   |   |
|  |          |  |                |  |          |   |
|  +----------+  +----------------+  +----------+   |
|  +----------------+  +----------+                 |
|  |                |  |          |                 |
|  |     Art 4      |  |  Art 5   |                 |
|  |                |  |          |                 |
|  +----------------+  +----------+                 |
+--------------------------------------------------+
```

### Music Page Layout
```
+--------------------------------------------------+
|                  Navigation Bar                    |
+--------------------------------------------------+
|                                                   |
|                 Music Header                      |
|                                                   |
+--------------------------------------------------+
|              Track List                           |
|  +-----------------------------------------+     |
|  |     Track Title                          |     |
|  |     [Play/Pause] ====================    |     |
|  |     Volume Control                       |     |
|  +-----------------------------------------+     |
|  +-----------------------------------------+     |
|  |     Track Title                          |     |
|  |     [Play/Pause] ====================    |     |
|  |     Volume Control                       |     |
|  +-----------------------------------------+     |
+--------------------------------------------------+
```

## User Flow Diagrams

### Main Navigation Flow
```mermaid
graph TD
    Home[Homepage] -->|Click Gallery| Gallery[Art Gallery]
    Home -->|Click Music| Music[Music Player]
    Gallery -->|Back to Home| Home
    Music -->|Back to Home| Home
    Gallery -->|View Artwork| ArtworkDetail[Artwork Detail View]
    Music -->|Play Track| AudioPlayer[Audio Player Controls]
```

### Art Gallery Interaction Flow
```mermaid
graph TD
    Gallery[Gallery Page] -->|Hover| Preview[Show Artwork Preview]
    Preview -->|Click| Details[Show Full Details]
    Details -->|Close| Gallery
    Gallery -->|Scroll| LoadMore[Load More Artworks]
```

### Music Player Interaction Flow
```mermaid
graph TD
    MusicPage[Music Page] -->|Click Play| PlayState[Playing State]
    PlayState -->|Click Pause| PauseState[Paused State]
    PlayState -->|Track Ends| NextTrack[Auto Next Track]
    PauseState -->|Click Play| PlayState
    PlayState -->|Adjust| Volume[Volume Control]
    PlayState -->|Drag| Progress[Progress Bar]
```

## Future Features

### Blog Section Layout
```
+--------------------------------------------------+
|                  Navigation Bar                    |
+--------------------------------------------------+
|                                                   |
|                 Blog Header                       |
|                                                   |
+--------------------------------------------------+
|              Blog Posts Grid                      |
|  +-----------------------------------------+     |
|  |     Featured Post                        |     |
|  |     [Image + Title + Excerpt]           |     |
|  +-----------------------------------------+     |
|  +----------+  +----------+  +----------+        |
|  |          |  |          |  |          |        |
|  | Post 1   |  | Post 2   |  | Post 3   |        |
|  |          |  |          |  |          |        |
|  +----------+  +----------+  +----------+        |
+--------------------------------------------------+
```

### Artwork Categories Implementation
```mermaid
graph TD
    Categories[Category Filter] -->|Select| FilteredView[Filtered Gallery]
    Categories -->|Digital Art| Digital[Digital Artworks]
    Categories -->|Paintings| Paint[Paintings]
    Categories -->|Mixed Media| Mixed[Mixed Media]
    FilteredView -->|Clear Filter| Gallery[Full Gallery]
```
