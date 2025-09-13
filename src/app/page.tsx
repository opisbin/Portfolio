"use client";

import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      {/* <section className="h-screen flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-extrabold mb-4">
            Hi, I’m <span className="text-indigo-600">Meherab Hossain</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            A UI/UX Designer crafting modern, user-friendly, and impactful
            digital experiences 🚀
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-indigo-600 rounded-xl shadow hover:bg-indigo-50 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </section> */}
      <HeroSection />
      
      {/* Divider */}
      {/* <div className="my-16 border-t-2 border-gray-500 w-full"></div> */}

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <Image
                  src="/placeholder.png"
                  alt="Project screenshot"
                  width={600}
                  height={400}
                  className="object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-gray-600 text-sm">
                    Short description of the project goes here.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((t) => (
              <motion.div
                key={t}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gray-100 rounded-xl shadow"
              >
                <p className="text-gray-700 mb-4">
                  “Working with Meherab was amazing. He transformed our digital
                  experience into something truly world-class.”
                </p>
                <h4 className="font-semibold">Client {t}</h4>
                <span className="text-sm text-gray-500">CEO, Company</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            I’m a UI/UX designer with 8 years of experience creating intuitive,
            modern, and impactful designs for SaaS, mobile apps, and enterprise
            platforms. I specialize in design systems, user flows, and
            pixel-perfect interfaces.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
          <p className="text-gray-600 mb-8">
            Let’s collaborate on your next big idea! 💡
          </p>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded-xl"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded-xl"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="p-3 border rounded-xl"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
