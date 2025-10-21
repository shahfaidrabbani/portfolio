"use client"

import { motion } from "framer-motion"
import { Briefcase, MapPin, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { experience } from "@/lib/data"

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            My professional journey and contributions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10 ring-4 ring-background" />

                  <Card
                    className={`border-2 hover:border-primary/50 transition-colors ${
                      index % 2 === 0 ? "md:mr-auto md:w-[calc(50%-2rem)]" : "md:ml-auto md:w-[calc(50%-2rem)]"
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Briefcase className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{exp.position}</h3>
                            <p className="text-primary font-medium">{exp.company}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <span className="font-medium text-foreground">
                          {exp.duration}
                        </span>
                      </div>

                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

