"use client";
import React, { ReactPropTypes } from "react";
import { Roboto } from 'next/font/google'
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle
} from "../components/ui/text-reveal-card";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "../../node_modules/@tabler/icons-react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../components/ui/resizable"


function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
      onClick: () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    { 
      name: "About",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
      onClick: (event: React.MouseEvent) => {
        event.preventDefault();
        const element = document.getElementById("stickyScroll");
        if (element !== null) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    {
      name: "Projects",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center h-[40rem] rounded-2xl w-full mb-[-200px]">
      <TextRevealCard
        text="Hello there!"
        revealText="I'm Alexis Nemsingh!"
      >
        <TextRevealCardTitle>
          Welcome to my website!
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}

function StickyScrollRevealDemo() {
  return (
    <div id="stickyScroll" className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}

const content = [
  {
    title: "About Me",
    description:
      "Hello! I am a Computer Science transfer student attending the California State University, Fullerton. I am experienced in Python, C, C++, C#, SQL, and JavaScript. I have completed an internship at Calpine Energy Solutions as a Software Developer Intern, where I worked on WebTools, an internal collection of web applications used by the various teams within the company. Through this experience, I learned C# and how to work within Azure DevOps, along with real world industry practices.",
  },
  {
    description:
    "When I'm not studying or coding, you may find me writing about my latest D&D campaign, playing video games, listening to music, or running around Baldur's Gate.",
  },
  {
    title: "Education",
    description:
      "For my first two years in college, I attended the University of California, Merced, where I studied Computer Science & Engineering. Afterwards, I transferred to California State University, Fullerton, aiming to graduate with a BS in Computer Science in Spring 2025.",
  },
  {
    title: "Future Goals",
    description:
      "Right now, I have a great interest in front-end web development. In fact, that's what inspired me to sit down and properly create my website! Currently, I am searching for a full time role to not only make meaningful contributions to a team, but to also continue learning and growing as a developer.",
  },
];

/*function ResizablePanelDemo() {
  return (
    <div className="relative">
      <ResizablePanelGroup>
        <ResizablePanel>
          <div className="bg-white dark:bg-black w-full h-[40rem] rounded-md border border-neutral-200 dark:border-white/[0.2]">
            <p className="text-center text-4xl mt-40 font-bold">
              Resize me!
            </p>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <div className="bg-white dark:bg-black w-full h-[40rem] rounded-md border border-neutral-200 dark:border-white/[0.2]">
            <p className="text-center text-4xl mt-40 font-bold">
              Resize me too!
            </p>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}*/

/*function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}*/

export default function WebPage() {
  return (
    <div className="relative">
      <TextRevealCardPreview />
      <StickyScrollRevealDemo />
      <FloatingNavDemo />
    </div>
  )
}