import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SiPytorch, SiTensorflow, SiOpenai, SiRos } from "react-icons/si";
import { Brain, Cloud, Lock, Zap } from "lucide-react";

const projects = [
  {
    title: "Enterprise AI Integration",
    description: "Developed and deployed custom AI solutions for Fortune 500 companies with a focus on data privacy and security.",
    tech: ["PyTorch", "Docker", "Kubernetes"],
    icon: <Brain className="w-6 h-6" />,
    highlights: [
      "Reduced processing time by 75%",
      "Enhanced data security protocols",
      "Scalable architecture"
    ]
  },
  {
    title: "Private AI Infrastructure",
    description: "Built secure, on-premise AI infrastructure for sensitive data processing in healthcare sector.",
    tech: ["TensorFlow", "OpenAI", "PyTorch"],
    icon: <Lock className="w-6 h-6" />,
    highlights: [
      "HIPAA compliant",
      "Local deployment",
      "Custom training pipelines"
    ]
  },
  {
    title: "Real-time AI Processing",
    description: "Implemented real-time AI processing systems for automated quality control in manufacturing.",
    tech: ["ROS", "Computer Vision", "Edge AI"],
    icon: <Zap className="w-6 h-6" />,
    highlights: [
      "99.9% accuracy rate",
      "5ms response time",
      "Edge deployment"
    ]
  }
];

const expertise = [
  {
    title: "Machine Learning",
    items: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP"]
  },
  {
    title: "Infrastructure",
    items: ["Cloud Computing", "Edge Computing", "Distributed Systems", "DevOps"]
  },
  {
    title: "Security",
    items: ["Data Privacy", "Encryption", "Secure AI", "Compliance"]
  }
];

export default function Work() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            My Work
          </h1>
          
          <Tabs defaultValue="projects" className="space-y-8">
            <TabsList>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="expertise">Expertise</TabsTrigger>
            </TabsList>

            <TabsContent value="projects" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          {project.icon}
                          <CardTitle>{project.title}</CardTitle>
                        </div>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
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
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {project.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-primary" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="expertise">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {expertise.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle>{category.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {category.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
