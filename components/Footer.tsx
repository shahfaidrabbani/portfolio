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
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  backgroundColor: "hsl(var(--primary))",
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 30, scale: 0 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.4, ease: "backOut" }}
                className="p-3 rounded-full bg-accent hover:text-primary-foreground transition-all relative group"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5 relative z-10" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary opacity-0"
                  whileHover={{ opacity: 0.2, scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center space-y-2 text-sm text-muted-foreground"
          >
            <p className="flex items-center space-x-1">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
              <span>by {personalInfo.name}</span>
            </p>
            <p>© {currentYear} All rights reserved.</p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}

