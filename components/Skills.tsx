"use client"

import { motion } from "framer-motion"
import { Code2, Wrench, Lightbulb, Database } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { skills } from "@/lib/data"

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-colors">
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
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-sm px-3 py-1 cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Tech Stack Visualization */}
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
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  whileHover={{ y: -5 }}
                  className="px-4 py-2 rounded-full bg-accent/50 backdrop-blur-sm text-sm font-medium"
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

