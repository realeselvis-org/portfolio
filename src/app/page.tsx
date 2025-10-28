"use client";

import { Github, Star, Rocket, CheckCircle2, Mail, GraduationCap, ArrowUpNarrowWide, SquareCode } from "lucide-react";

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
      time: "Sep 2025 - Actualidad",
      tag: "Proyecto formativo",
      title: "Tecnología en Desarrollo de Software",
      description: "Desarrollo de proyecto propio como parte del proceso formativo.",
      largeDescription: "Elaboración de la documentación técnica y adopción de buenas prácticas de desarrollo, con el propósito de comprender de forma integral el ciclo de vida del software.",
      icon: <GraduationCap className="w-5 h-5" />,
      link: "/proyecto",
      // labels: ["Estudio "],
    },
    {
      time: "Jul 2024 - Actualidad",
      tag: "Ascenso",
      title: "Soporte Técnico · Privilege Team",
      description: "Constructor Web / Plataforma de Ecommerce.",
      largeDescription: "Soporte técnico y asesoría en la creación y personalización de sitios, funnels y tiendas online. Acompañamiento en integraciones externas, APIs, automatizaciones con IA y consultas SQL.",
      icon: <ArrowUpNarrowWide className="w-5 h-5" />,
      link: "/proyecto",
      labels: ["SEO", "DNS", "HTML", "JavaScript"],

    },
    {
      time: "Abr 2025 - Jun 2025",
      tag: "Colaborador recurrente",
      title: "Desarrollador Junior · SculApp",
      description: "Desarrollo de la plataforma administrativa.",
      largeDescription: "Freelance para apoyar el desarrollo de la plataforma administrativa de la Clínica Panamericana, un nuevo cliente de la empresa.",
      icon: <SquareCode className="w-5 h-5" />,
      link: "#",
      labels: ["Freelance", "React", "Docker", "Tailwind"],
    },
    {
      time: "Sep 2023 - Feb 2024",
      tag: "Colaborador recurrente",
      title: "Analista TI · Prácticas",
      description: "Soporte de segundo nivel, desarrollo e integración web.",
      largeDescription: "Apoyé al equipo de desarrollo en la implementación y mejora de sitios web, asegurando su correcta integración con sistemas internos. Brindé soporte técnico de segundo nivel, resolviendo incidencias y optimizando procesos. También colaboré en el despliegue de aplicaciones móviles conectadas con plataformas web y en la coordinación del trabajo bajo metodología ágil.",
      icon: <SquareCode className="w-5 h-5" />,
      link: "#",
      labels: ["Wordpress", "HTML", "Tailwind", "PHP", "SQL"],
    },
    {
      time: "Mar 2022 - Sep 2023",
      tag: "Proyecto formativo",
      title: "Carrera Técnica en Desarrollo de Software",
      description: "Desarrollo de proyecto colaborativo institucional.",
      largeDescription: "AFormación técnica en desarrollo de software orientada a proyectos reales. Como trabajo final, participé en la creación de un sistema de gestión documental para el SENA, fortaleciendo mis bases en trabajo en equipo y desarrollo estructurado.",
      icon: <GraduationCap className="w-5 h-5" />,
      link: "#",
      labels: ["Boostrap", "Python", "HTML", "JavaScript", "CSS", "PHP", "SQL"],
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
