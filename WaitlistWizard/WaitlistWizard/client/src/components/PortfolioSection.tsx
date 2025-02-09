
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";

const projects = [
  {
    title: "AI Image Generation",
    description: "Created a state-of-the-art image generation model using GANs",
    tech: ["PyTorch", "CUDA", "React"],
    fullDescription: "Advanced AI image generation system capable of creating photorealistic images from text descriptions. Built using cutting-edge GANs architecture.",
    features: [
      "Text-to-image generation",
      "Style transfer capabilities",
      "Real-time processing",
      "Custom training pipeline"
    ],
    images: [
      "/attached_assets/arc reactor r.png"
    ]
  },
  {
    title: "NLP Processing Engine",
    description: "Built a natural language processing engine for sentiment analysis",
    tech: ["TensorFlow", "BERT", "Flask"],
    fullDescription: "Enterprise-grade NLP engine designed for high-throughput text analysis and sentiment classification.",
    features: [
      "Multi-language support",
      "Real-time analysis",
      "Customizable models",
      "API integration"
    ]
  },
  {
    title: "Autonomous Systems",
    description: "Developed reinforcement learning algorithms for robotics",
    tech: ["Python", "ROS", "OpenAI Gym"],
    fullDescription: "Advanced robotics control system using state-of-the-art reinforcement learning algorithms.",
    features: [
      "Real-time decision making",
      "Adaptive learning",
      "Simulation integration",
      "Safety protocols"
    ]
  }
];

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => setSelectedProject(project)}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
            {selectedProject && (
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{selectedProject.title}</DialogTitle>
                  <DialogDescription>{selectedProject.fullDescription}</DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc pl-6 mb-4">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  {selectedProject.images && (
                    <div className="mt-4">
                      {selectedProject.images.map((image, index) => (
                        <img key={index} src={image} alt={`Project ${index + 1}`} className="rounded-lg mb-4" />
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedProject.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </DialogContent>
            )}
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
}
