import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useTheme } from "@/hooks/use-theme";
import { materialColors } from "@/lib/three-models";
import { Link } from "wouter";

function AIBrain() {
  const theme = useTheme();
  const colors = theme === "light" ? materialColors.light : materialColors.dark;

  return (
    <Float
      speed={1.5} 
      rotationIntensity={0.5} 
      floatIntensity={0.5}
    >
      <group>
        {/* Main neural network structure */}
        <mesh>
          <sphereGeometry args={[3, 64, 64]} />
          <MeshDistortMaterial
            color={`#${colors.primary.getHexString()}`}
            distort={0.4}
            speed={2}
            emissive={`#${colors.secondary.getHexString()}`}
            emissiveIntensity={0.5}
            wireframe
          />
        </mesh>

        {/* No connecting lines */}
      </group>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="h-screen relative overflow-hidden">
      <div className="flex h-full">
        <div className="w-1/2 relative z-20 flex items-center px-8">
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl font-bold mb-6 text-foreground">
              Next-Gen AI Solutions
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Pioneering the future of artificial intelligence with cutting-edge solutions
              and revolutionary technologies. Specializing in private, secure AI deployments
              for enterprise needs.
            </p>
            <div className="flex gap-4">
              <Link href="/work">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  View My Work
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline" className="hover:bg-primary/10">
                  Contact Me
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="w-1/2 relative">
          <Canvas
            camera={{ position: [0, 0, 12], fov: 60 }}
            className="bg-transparent"
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <AIBrain />
          </Canvas>
        </div>
      </div>
    </div>
  );
}