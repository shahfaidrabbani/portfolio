"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Code2, Mail, Heart } from "lucide-react"
import { personalInfo } from "@/lib/data"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: personalInfo.links.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.links.linkedin, label: "LinkedIn" },
    { icon: Code2, href: personalInfo.links.leetcode, label: "LeetCode" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ]

  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <div className="flex flex-col items-center space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center space-x-1">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
              <span>by {personalInfo.name}</span>
            </p>
            <p>© {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

