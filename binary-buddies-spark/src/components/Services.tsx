import { motion } from "framer-motion";
import { Brain, Zap, Code, Database, Rocket, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "AI Tools & Solutions",
    description: "Custom AI models, machine learning, NLP, and computer vision to transform your business intelligence.",
    color: "primary",
  },
  {
    icon: Zap,
    title: "Automation Services",
    description: "Hyperautomation, RPA, and workflow optimization to streamline your business processes.",
    color: "accent",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom web, mobile, and desktop applications built with cutting-edge technologies.",
    color: "primary",
  },
  {
    icon: Database,
    title: "API Development",
    description: "RESTful and GraphQL APIs with microservices architecture for scalable solutions.",
    color: "accent",
  },
  {
    icon: Rocket,
    title: "Product Development",
    description: "From MVP to market-ready products with comprehensive strategy and UX design.",
    color: "primary",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online store development with payment integration and inventory management.",
    color: "accent",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const Services = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="glass hover-glow h-full group cursor-pointer transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className={`inline-flex p-4 rounded-xl bg-${service.color}/10 mb-6 group-hover:shadow-glow transition-all duration-300`}>
                    <service.icon className={`w-8 h-8 text-${service.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl translate-x-1/2" />
    </section>
  );
};