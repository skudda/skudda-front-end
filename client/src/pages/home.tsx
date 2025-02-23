import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Creative Portfolio
        </h1>
        <p className="text-xl text-muted-foreground">
          Visual Artist & Music Producer
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="prose prose-lg dark:prose-invert mx-auto"
      >
        <p>
          Welcome to my creative space where art meets sound. I explore the
          intersection of visual and auditory experiences through various mediums
          including painting, digital art, and electronic music production.
        </p>
        
        <blockquote>
          Art is not what you see, but what you make others see.
        </blockquote>

        <h2>About Me</h2>
        <p>
          With over a decade of experience in both visual arts and music
          production, I strive to create immersive experiences that challenge
          perceptions and evoke emotions. My work has been featured in galleries
          across the country and my music has been used in various independent
          films and installations.
        </p>

        <h2>Get in Touch</h2>
        <p>
          I'm always open to collaborations and new projects. Feel free to reach
          out at <a href="mailto:artist@example.com">artist@example.com</a>
        </p>
      </motion.div>
    </div>
  );
}
