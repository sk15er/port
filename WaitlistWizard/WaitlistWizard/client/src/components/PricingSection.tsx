import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const plans = [
  {
    name: "Basic",
    price: "$99",
    description: "Perfect for small projects",
    features: [
      "Basic AI consultation",
      "1 model deployment",
      "Email support",
      "Basic analytics"
    ]
  },
  {
    name: "Pro",
    price: "$299",
    description: "For growing businesses",
    features: [
      "Advanced AI consultation",
      "3 model deployments",
      "Priority support",
      "Advanced analytics",
      "Custom training"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Full AI solution suite",
      "Unlimited deployments",
      "24/7 support",
      "Custom development",
      "On-premise options"
    ]
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }} //Added hover animation
                className="transform transition-shadow hover:shadow-xl" //Added hover shadow
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="text-3xl font-bold mt-4">{plan.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6">Get Started</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}