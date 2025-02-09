
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const blogPosts = [
  {
    title: "The Future of AI: Beyond the Hype",
    date: "February 9, 2025",
    category: "AI & Machine Learning",
    description: "Exploring the real-world applications and implications of artificial intelligence",
    content: `Artificial Intelligence has moved beyond buzzwords and hype to become a transformative force across industries...`
  },
  {
    title: "Web Development Trends 2025",
    date: "February 8, 2025",
    category: "Web Development",
    description: "Latest trends in web development and what to expect",
    content: `The landscape of web development continues to evolve at a rapid pace...`
  },
  {
    title: "Cybersecurity Best Practices",
    date: "February 7, 2025",
    category: "Security",
    description: "Essential security practices for modern applications",
    content: `In an increasingly connected world, security has become paramount...`
  }
];

const categories = ["All", "AI & Machine Learning", "Web Development", "Security"];

export default function Blog() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const postsPerPage = 2;

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Blog
          </h1>

          <Tabs defaultValue="All" className="mb-8">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger 
                  key={category}
                  value={category}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          
          <div className="grid gap-8">
            {currentPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-baseline mb-2">
                      <CardTitle className="text-2xl">{post.title}</CardTitle>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-stone dark:prose-invert">
                      <p className="mb-4">{post.content}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
