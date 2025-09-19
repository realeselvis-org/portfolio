// src/app/page.tsx
"use client";

import { Github, Star } from "lucide-react";
import ExperienceCard from "./components/ExperienceCard";

export default function Home() {
  const cardsData = [
    {
      id: 1,
      title: "Título de un proyecto",
      imageDesktop:
        "https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_6lwbhg.png",
      imageMobile:
        "https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_vd8ili.png",
      subtitle: "subtitle 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      actions: [
        {
          icon: <Github className="w-6 h-6" />,
          href: "https://github.com", // abre link externo
        },
                {
          icon: <Github className="w-6 h-6" />,
          href: "https://github.com", // abre link externo
        },
        {
          icon: <Star className="w-6 h-6" />,
          onClick: () => alert("⭐ Favorito!"), // acción onClick
        },
      ],
      labels: ["React", "Tailwind", "Node.js"],
    },
    {
      id: 2,
      title: "Card 2",
      imageDesktop:
        "https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_6lwbhg.png",
      imageMobile:
        "https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_vd8ili.png",
      subtitle: "subtitle 2",
      description: "text2",
      actions: [
        {
          icon: <Github className="w-6 h-6" />,
          href: "https://github.com",
        },
      ],
      labels: ["React", "Tailwind", "Node.js", "MongoDB"],
    },
    {
      id: 3,
      title: "Card 3",
      imageDesktop:
        "https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_6lwbhg.png",
      imageMobile:
        "https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_vd8ili.png",
      subtitle: "subtitle 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      labels: ["React", "Tailwind"],

    },
    {
      id: 4,
      title: "Card 4",
      imageDesktop:
        "https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_6lwbhg.png",
      imageMobile:
        "https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_vd8ili.png",
      subtitle: "subtitle 4",
      description: "text4",
      labels: ["React"],

    },
  ];

  return (
    <main className="max-w-7xl mx-auto p-8 bg-[#1C2A29]">
      {/* Grid con tus cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {cardsData.map((c) => (
          <ExperienceCard key={c.id} {...c} />
        ))}
      </div>
    </main>
  );
}
