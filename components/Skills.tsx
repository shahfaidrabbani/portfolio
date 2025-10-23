"use client"

import { motion } from "framer-motion"
import { Code2, Wrench, Lightbulb, Database } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { skills } from "@/lib/data"
import { TiltCard } from "./TiltCard"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      items: skills.languages,
      color: "text-blue-500",
    },
    {
      title: "Frameworks & Libraries",
      icon: Database,
      items: skills.frameworks,
      color: "text-green-500",
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      items: skills.tools,
      color: "text-orange-500",
    },
    {
      title: "Concepts & Methodologies",
      icon: Lightbulb,
      items: skills.concepts,
      color: "text-purple-500",
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -100, rotateY: -45 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Tech Stack
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: 100, rotateY: 45 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-muted-foreground"
          >
            Technologies and tools I work with
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -100 : 100,
                scale: 0.8
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                scale: 1
              }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: 0.15 * index,
                ease: "easeOut"
              }}
            >
              <TiltCard>
                <Card className="h-full border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded-lg bg-accent ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: 0.05 * i }}
                        whileHover={{ 
                          scale: 1.15,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-sm px-3 py-1 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Additional Tech Stack Visualization with Wave Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Always learning and exploring new technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[...skills.languages, ...skills.frameworks.slice(0, 6)].map(
              (tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  whileHover={{ 
                    y: -10,
                    rotate: [0, -5, 5, 0],
                    scale: 1.1,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                    transition: { duration: 0.3 }
                  }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm text-sm font-medium cursor-pointer hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 transition-all"
                >
                  {tech}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

