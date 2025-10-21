"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { education, achievements } from "@/lib/data"

export function About() {
  return (
    <section id="about" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate software engineer dedicated to creating elegant solutions
            to complex problems. I specialize in frontend development with a strong
            focus on user experience and performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-heading font-bold">Education</h3>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="pb-6 border-b last:border-b-0 last:pb-0"
                    >
                      <h4 className="font-semibold text-lg mb-1">
                        {edu.institution}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-1">
                        {edu.degree}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-primary font-medium">{edu.cgpa}</span>
                        <span className="text-muted-foreground">{edu.duration}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Award className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-heading font-bold">Achievements</h3>
                </div>
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="pb-6 border-b last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-lg">{achievement.title}</h4>
                        <span className="text-sm text-primary font-medium">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {achievement.organization}
                      </p>
                      <p className="text-sm">{achievement.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

