"use client";
import React, { useState } from "react";
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, Menu, Bot, Scissors, KeyboardMusic, CreditCard, CupSoda } from 'lucide-react'
import { CgPokemon } from "react-icons/cg";


export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono flex flex-col lg:flex-row">
      <button 
        className="lg:hidden fixed top-4 right-4 z-50 text-gray-300 hover:text-red-400 transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu className="w-6 h-6" />
        <span className="sr-only">Toggle menu</span>
      </button>
      <aside className={`${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:sticky top-0 left-0 w-full lg:w-1/3 h-screen p-8 lg:p-12 overflow-auto transition-transform duration-300 ease-in-out z-40 bg-black lg:bg-transparent`}>
        <div className="lg:sticky lg:top-0">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">Alexis Nemsingh</h1>
          <h2 className="text-lg lg:text-xl text-gray-300 mb-6">Software Developer</h2>
          <p className="text-gray-400 mb-8">
            I build accessible, responsive web applications with modern technologies.
          </p>
          <div className="mb-12">
            <p className="text-gray-300 leading-relaxed mb-4">
            Hello! I am a Computer Science transfer student attending the California State University, Fullerton. 
            I am experienced in Python, C, C++, C#, SQL, JavaScript, and Swift. I have completed an internship at {" "}
            <Link href="https://www.calpinesolutions.com/" target="_blank" className="text-red-400 hover:underline">
              Calpine Energy Solutions
            </Link>
            &nbsp;as a Software Developer Intern, where I worked on WebTools, an internal collection of web applications used by the various teams within the company. 
            Through this experience, I learned C# and how to work within Azure DevOps, along with real world industry practices.
            </p>
            <p className="text-gray-300 leading-relaxed">
            When I&apos;m not studying or coding, you may find me writing about my latest D&D campaign, playing video games, 
            listening to music, or running around Baldur&apos;s Gate. Maybe even running around {" "}
            <Link href="https://na.finalfantasyxiv.com/lodestone/character/52154565/" target="_blank" className="text-red-400 hover:underline">
            Eorzea
            </Link>
            , too!
            </p>
          </div>
          <nav>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="#education" className="text-gray-400 hover:text-red-400 transition-colors">
                  EDUCATION
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-gray-400 hover:text-red-400 transition-colors">
                  EXPERIENCE
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-red-400 transition-colors">
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link href="/Alexis Nemsingh Resume.pdf" target="_blank" className="text-gray-400 hover:text-red-400 transition-colors">
                  RESUME
                </Link>
              </li>
            </ul>
          </nav>
          <footer className="mt-12">
            <div className="flex gap-6">
              <Link href="https://github.com/alexisnemsingh" target="_blank" className="text-gray-400 hover:text-red-400 transition-colors">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/alexis-nemsingh/" target="_blank" className="text-gray-400 hover:text-red-400 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:alexisnemsingh@gmail.com" target="_blank" className="text-gray-400 hover:text-red-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Gmail</span>
              </Link>
            </div>
          </footer>
        </div>
      </aside>
      <main className="w-full lg:w-2/3 p-8 lg:p-12">
        <section id="education" className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">Education</h2>
          <div className="border-l border-gray-700">
            <div className="relative pl-8 pb-12">
              <div className="absolute left-0 top-0 w-16 h-[1px] bg-gray-700" />
              <div className="text-sm text-gray-400 mb-2">August 2023 — May 2025</div>
              <h3 className="text-xl text-white mb-2 flex items-center gap-2">
                BS in Computer Science · California State University, Fullerton{" "}
              <Link href="https://www.fullerton.edu/" target="_blank" className="text-gray-400 hover:text-red-400 transition-colors">
                <ExternalLink className="w-4 h-4 cursor-pointer" />
              </Link>
              </h3>
              <p className="text-gray-300 mb-4">
                GPA: 3.33/4.00
              </p>
              <p className="text-gray-300 mb-4">
                Honors/Awards: John and Mary Bilello Innovation Scholarship (Fall 2024, Spring 2025); Dean&apos;s List; Engineering and Computer Science (ECS) Expo 2025 Finalist
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-red-400 bg-red-400/10 px-3 py-1 rounded-full text-sm">Foundations of Software Engineering</span>
                <span className="text-red-400 bg-red-400/10 px-3 py-1 rounded-full text-sm">File Structures & Database Systems</span>
                <span className="text-red-400 bg-red-400/10 px-3 py-1 rounded-full text-sm">Operating Systems Concepts</span>
                <span className="text-red-400 bg-red-400/10 px-3 py-1 rounded-full text-sm">Python Programming</span>
                <span className="text-red-400 bg-red-400/10 px-3 py-1 rounded-full text-sm">Compilers and Languages</span>
                <span className="text-red-400 bg-red-400/10 px-3 py-1 rounded-full text-sm">Algorithm Engineering</span>
                <span className="text-red-400 bg-red-400/10 px-3 py-1 rounded-full text-sm">Computer System Architecture</span>
                <span className="text-red-400 bg-red-400/10 px-3 py-1 rounded-full text-sm">Mobile Device Application Programming</span>
                <span className="text-red-400 bg-red-400/10 px-3 py-1 rounded-full text-sm">Web Front-End Engineering</span>
              </div>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-16 h-[1px] bg-gray-700" />
              <div className="text-sm text-gray-400 mb-2">August 2021 — May 2023</div>
              <h3 className="text-xl text-white mb-2 flex items-center gap-2">
                University of California, Merced{" "}
              <Link href="https://www.ucmerced.edu/" target="_blank" className="text-gray-400 hover:text-red-400 transition-colors">
                <ExternalLink className="w-4 h-4 cursor-pointer" />
              </Link>
              </h3>
              <div className="flex gap-2 flex-wrap">
                <span className="text-red-400 bg-red-400/10 px-3 py-1 rounded-full text-sm">Data Structures</span>
                <span className="text-red-400 bg-red-400/10 px-3 py-1 rounded-full text-sm">Computer Organization and Assembly Language</span>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">Experience</h2>
          <div className="border-l border-gray-700">
            <div className="relative pl-8 pb-12">
              <div className="absolute left-0 top-0 w-16 h-[1px] bg-gray-700" />
              <div className="text-sm text-gray-400 mb-2">June 2024 - August 2024</div>
              <h3 className="text-xl text-white mb-2 flex items-center gap-2">
                Software Developer Intern · Calpine Energy Solutions{" "}
              <Link href="https://www.calpinesolutions.com/" target="_blank" className="text-gray-400 hover:text-red-400 transition-colors">
                <ExternalLink className="w-4 h-4 text-gray-400 hover:text-red-400 cursor-pointer" />
              </Link>
              </h3>
              <p className="text-gray-300 mb-4">
              ▪ Maintained WebTools, an internal tool suite used by various teams within the company through bug fixes and updates to 
              their functions using C#. 
              </p>
              <p className="text-gray-300 mb-4">
              ▪ Updated various applications to .NET 8, decreasing security vulnerabilities and improving their performance.
              </p>
              <p className="text-gray-300 mb-4">
              ▪ Modified various pipelines within Azure DevOps to include caching, significantly reducing build time for future runs.
              </p>
              <p className="text-gray-300 mb-4">
              ▪ Upgraded applications in WebTools from Angular 8 to 18, updating deprecated code, optimizing performance, and ensuring compatibility with modern frameworks.
              </p>
              <p className="text-gray-300 mb-4">
              ▪ Developed an automated script using VisualCron to manage database entries by periodically deleting outdated records, optimizing database performance, and maintaining data hygiene.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-red-400 bg-red-400/10 px-3 py-1 rounded-full text-sm">C#</span>
                <span className="text-red-400 bg-red-400/10 px-3 py-1 rounded-full text-sm">SQL</span>
                <span className="text-red-400 bg-red-400/10 px-3 py-1 rounded-full text-sm">Azure DevOps</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">Notable Projects</h2>
          <div className="grid gap-6">
            <div className="group">
              <div className="bg-gray-900 p-6 rounded-lg transition-all duration-300 group-hover:bg-gray-800">
                <div className="flex justify-between items-start mb-4">
                  <CupSoda className="w-10 h-10 text-red-400" />
                  <div className="flex gap-4">
                    <Link href="https://github.com/4fatesstudios/boba-stop" target="_blank" className="text-gray-400 hover:text-red-400 transition-colors">
                      <Github className="w-5 h-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Boba Stop</h3>
                <p className="text-gray-400 mb-4">A role-playing life sim made in Unity where you run a boba shop, utilizing AI-generated dialogue for NPC interaction. Was chosen to present at CSUF&apos;s ECS Expo 2025.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-gray-400 text-sm">C#</span>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-gray-900 p-6 rounded-lg transition-all duration-300 group-hover:bg-gray-800">
                <div className="flex justify-between items-start mb-4">
                  <Bot className="w-10 h-10 text-red-400" />
                  <div className="flex gap-4">
                    <Link href="https://github.com/alexisnemsingh/GameBot" target="_blank" className="text-gray-400 hover:text-red-400 transition-colors">
                      <Github className="w-5 h-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">GameBot</h3>
                <p className="text-gray-400 mb-4">A bot made for Discord that pulls up information about any game within the Internet Game DataBase, and can also
                  randomly choose between any inputs given.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-gray-400 text-sm">JavaScript</span>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-gray-900 p-6 rounded-lg transition-all duration-300 group-hover:bg-gray-800">
                <div className="flex justify-between items-start mb-4">
                  <CgPokemon className="w-10 h-10 text-red-400" />
                  <div className="flex gap-4">
                    <Link href="https://github.com/alexisnemsingh/Pokedex" target="_blank" className="text-gray-400 hover:text-red-400 transition-colors">
                      <Github className="w-5 h-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://pokedex-app-rose.vercel.app/" target="_blank" className="text-gray-400 hover:text-red-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                      <span className="sr-only">External Link</span>
                    </Link>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Pokédex</h3>
                <p className="text-gray-400 mb-4">This is a simple web application that recreates the Pokédex from the Pokémon games. It uses the PokéAPI to fetch Pokémon data.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-gray-400 text-sm">TypeScript</span>
                  <span className="text-gray-400 text-sm">Next.js</span>
                  <span className="text-gray-400 text-sm">Tailwind CSS</span>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-gray-900 p-6 rounded-lg transition-all duration-300 group-hover:bg-gray-800">
                <div className="flex justify-between items-start mb-4">
                  <Scissors className="w-10 h-10 text-red-400" />
                  <div className="flex gap-4">
                    <Link href="https://github.com/alexisnemsingh/commercial-booking-website" target="_blank" className="text-gray-400 hover:text-red-400 transition-colors">
                      <Github className="w-5 h-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://commercial-booking-website.vercel.app/" target="_blank" className="text-gray-400 hover:text-red-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                      <span className="sr-only">External Link</span>
                    </Link>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Commercial Booking Website</h3>
                <p className="text-gray-400 mb-4">Barbershop website with Booksy integration.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-gray-400 text-sm">HTML</span>
                  <span className="text-gray-400 text-sm">CSS</span>
                  <span className="text-gray-400 text-sm">Bootstrap</span>
                  <span className="text-gray-400 text-sm">JavaScript</span>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-gray-900 p-6 rounded-lg transition-all duration-300 group-hover:bg-gray-800">
                <div className="flex justify-between items-start mb-4">
                  <KeyboardMusic className="w-10 h-10 text-red-400" />
                  <div className="flex gap-4">
                    <Link href="https://github.com/alexisnemsingh/Piano-Music-Analyzer" target="_blank" className="text-gray-400 hover:text-red-400 transition-colors">
                      <Github className="w-5 h-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Piano Music Analyzer</h3>
                <p className="text-gray-400 mb-4">This application takes in piano .mid files and analyzes the music. 
                  It will display various types of data, including the tempo, pitch, velocity, duration, and control changes.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-gray-400 text-sm">Python</span>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-gray-900 p-6 rounded-lg transition-all duration-300 group-hover:bg-gray-800">
                <div className="flex justify-between items-start mb-4">
                  <CreditCard className="w-10 h-10 text-red-400" />
                  <div className="flex gap-4">
                    <Link href="https://github.com/alexisnemsingh/Memora" target="_blank" className="text-gray-400 hover:text-red-400 transition-colors">
                      <Github className="w-5 h-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Memora</h3>
                <p className="text-gray-400 mb-4">A flashcard app made using Swift and SwiftUI. Users can save and load albums, along with using a quiz mode to test themselves.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-gray-400 text-sm">Swift</span>
                  <span className="text-gray-400 text-sm">SwiftUI</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}