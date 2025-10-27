"use client";

import { Github, Star, Rocket, CheckCircle2, Mail } from "lucide-react";

import Header from "./components/Header";
import ExperienceCard from "./components/ExperienceCard";
import Timeline from "./components/Timeline";
import { UploadImageForm } from "./components/UploadImageForm";

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
          href: "https://github.com",
        },
        {
          icon: <Github className="w-6 h-6" />,
          href: "https://github.com",
        },
        {
          icon: <Star className="w-6 h-6" />,
          onClick: () => alert("⭐ Favorito!"),
        },
      ],
      labels: ["Tailwind", "Node.js"],
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
      labels: ["Node.js", "MongoDB"],
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

  // Eventos para el Timeline
  const timelineEvents = [
    {
      time: "Febrero 2025 - Abril 2025",
      tag: "Prácticas",
      title: "Sculapp",
      description: "Desarrollo de proyecto propio como parte del proceso formativo.",
      largeDescription: "Elaboración de la documentación técnica y adopción de buenas prácticas de desarrollo, con el propósito de comprender de forma integral el ciclo de vida del software.",
      icon: <Rocket className="w-5 h-5" />,
      link: "/proyecto",
      labels: ["Tailwind", "Node.js"],
    },
    {
      title: "MasterTools",
      description: "Implementación de las funcionalidades principales.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <CheckCircle2 className="w-5 h-5" />,
      time: "Julio 2024 -> Actualidad",
      link: "/proyecto",
    },
    {
      title: "Futuros Residentes",
      description: "Publicación en producción 🚀",
      time: "Septiembre 2023 - Febrero 2024",
      link: "/proyecto",
    },
  ];

  return (
    <main className="max-w-4xl 2xl:max-w-2/3 mx-auto p-8 pt-24">
      {/* Upload
      <UploadImageForm />
      */}
      {/* HEADER */}
      <header className="">
        <Header
          subtitle="Elvis Reales"
          title="Desarrollador de Soluciones"
          description="Desarrollador junior orientado a la creación de soluciones digitales. He trabajado en la depuración, integración y mantenimiento de plataformas como MasterTools y Mastershop."
          image="https://res.cloudinary.com/dztv7fh2y/image/upload/v1760725827/perfil2_tvultr.jpg"
          actions={[
            {
              icon: <Mail className="w-5 h-5" />,
              onClick: () => alert("realeselvis@gmail.com")
            },
            {
              icon: <Github className="w-5 h-5" />,
              href: "https://github.com/realeselvis",
              target: "_blank",
            },
          ]}
          labels={[
            "React",
            "Next.js",
            "Tailwind",
            "TypeScript",
            "Node.js",
            "MySQL",
            "APIs",
            "Python",
            "Wordpress",
          ]} />
      </header>


      {/* Timeline */}
      <section id="timeline" className="mt-20">
        <h2 className="text-xl font-bold mb-6">Experiencia</h2>
        <Timeline events={timelineEvents} />
      </section>

      {/* Grid de cards */}
      <h2 className="text-xl font-bold mb-6">Proyects & Collabs</h2>

      <section id="projects" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mt-12">
        {cardsData.map((c) => (
          <ExperienceCard key={c.id} {...c} />
        ))}
      </section>

    </main>
  );
}
