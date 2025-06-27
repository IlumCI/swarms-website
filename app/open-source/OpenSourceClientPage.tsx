"use client"

import { Navigation } from "@/components/navigation"
import { ScrollingTicker } from "@/components/scrolling-ticker"
import { GitHubRepositories } from "@/components/github-repositories"
import { AnimatedBackground } from "@/components/animated-background"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Github, Star, GitBranch, Code, BookOpen, Users, Globe } from "lucide-react"

export default function OpenSourceClientPage() {
  const tickerAnnouncements = [
    "Swarms AI: Committed to Open Source Research",
    "Building the future of AI through collaborative development",
    "Join our community of contributors and researchers",
    "Explore our GitHub repositories and contribute to the ecosystem",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ScrollingTicker
        announcements={tickerAnnouncements}
        className="py-2 bg-black/30 border-y border-red-600/20 backdrop-blur-sm"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <AnimatedBackground particleColor="rgba(239, 68, 68, 0.5)" className="opacity-40" />
        <div className="absolute inset-0 circuit-pattern opacity-20" aria-hidden="true" />
        <div className="absolute inset-0 cyber-gradient" aria-hidden="true" />

        <div className="container relative px-4 sm:px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4 bg-red-500/20 text-red-400 hover:bg-red-500/30">Open Source</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              Advancing AI Through Open Research
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Explore our open source repositories and join the community of researchers and developers building the
              future of multi-agent AI systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/The-Swarm-Corporation"
                target="_blank"
                rel="noopener noreferrer"
                style={{ position: "relative", zIndex: 10 }}
                className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium bg-red-600 hover:bg-red-700 text-white h-12 px-6 py-3"
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
              <a
                href="https://discord.gg/jM3Z6M9uMq"
                target="_blank"
                rel="noopener noreferrer"
                style={{ position: "relative", zIndex: 10 }}
                className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium border border-red-600 text-red-600 hover:bg-red-600/10 h-12 px-6 py-3"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Our Community
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Open Source Mission */}
      <div className="container px-4 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Our Open Source Mission</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            At Swarms AI, we believe that open collaboration accelerates innovation. Our commitment to open source
            research drives the development of cutting-edge multi-agent systems that are accessible to everyone.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {[
            {
              icon: Code,
              title: "Transparent Development",
              description:
                "We develop in the open, sharing our progress, challenges, and breakthroughs with the global AI community.",
            },
            {
              icon: Users,
              title: "Community Collaboration",
              description:
                "Our repositories welcome contributions from researchers and developers worldwide, fostering a collaborative ecosystem.",
            },
            {
              icon: Globe,
              title: "Accessible Research",
              description:
                "We make advanced AI research accessible to everyone, democratizing access to cutting-edge multi-agent technology.",
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg border border-red-900/20 bg-background/30 p-8 backdrop-blur-sm"
              >
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 mb-4">
                    <Icon className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* GitHub Repositories Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Our GitHub Repositories</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Explore our open source repositories, ranked by stars. Find the tools and frameworks that power the next
              generation of AI systems.
            </p>
          </div>

          <GitHubRepositories organization="The-Swarm-Corporation" />
        </motion.div>

        {/* How to Contribute */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">How to Contribute</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Join our community of contributors and help shape the future of multi-agent AI systems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Explore Repositories",
                description: "Browse our GitHub repositories to find projects that interest you.",
                icon: Github,
              },
              {
                step: "2",
                title: "Fork & Clone",
                description: "Fork the repository and clone it to your local machine to start working.",
                icon: GitBranch,
              },
              {
                step: "3",
                title: "Make Changes",
                description: "Implement features, fix bugs, or improve documentation.",
                icon: Code,
              },
              {
                step: "4",
                title: "Submit PR",
                description: "Create a pull request with your changes for review and inclusion.",
                icon: Star,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg border border-red-900/20 bg-background/30 p-6 backdrop-blur-sm"
              >
                <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-red-500/20 text-red-500 font-bold">
                  {item.step}
                </div>
                <div className="relative">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 mb-4">
                    <item.icon className="h-5 w-5 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-lg border border-red-900/20 bg-background/30 px-6 py-12 backdrop-blur-sm">
            {/* Glowing orb effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="w-[400px] h-[400px] rounded-full bg-red-500/10 blur-[100px]" />
            </div>

            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Ready to Join the Open Source Movement?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Contribute to our repositories, join our community, and help us build the future of AI together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://github.com/The-Swarm-Corporation"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ position: "relative", zIndex: 10 }}
                  className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium bg-red-600 hover:bg-red-700 text-white h-12 px-6 py-3"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Explore Repositories
                </a>
                <a
                  href="https://docs.swarms.world/en/latest/swarms/contributing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ position: "relative", zIndex: 10 }}
                  className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium border border-red-600 text-red-600 hover:bg-red-600/10 h-12 px-6 py-3"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Contribution Guidelines
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-red-500/20 py-8">
        <div className="container px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Swarms AI. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/The-Swarm-Corporation"
                target="_blank"
                rel="noopener noreferrer"
                style={{ position: "relative", zIndex: 10 }}
                className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://discord.gg/jM3Z6M9uMq"
                target="_blank"
                rel="noopener noreferrer"
                style={{ position: "relative", zIndex: 10 }}
                className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0"
              >
                <Users className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
