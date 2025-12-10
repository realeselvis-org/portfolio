"use client";

import { useRef } from "react";

import { Github, Star, Rocket, CheckCircle2, Mail, GraduationCap, ArrowUpNarrowWide, SquareCode, ChevronLeft, ChevronRight } from "lucide-react";

import Header from "./components/Header";
import ExperienceCard from "./components/ExperienceCard";
import Timeline from "./components/Timeline";
import { UploadImageForm } from "./components/UploadImageForm";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import dynamic from 'next/dynamic';


export default function Home() {
  const cardsData = [
    {
      id: 1,
      title: "Sculapp",
      imageDesktop:
        "https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_6lwbhg.png",
      imageMobile:
        "https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_vd8ili.png",
      // subtitle: "subtitle 1",
      description: "Panel administrativo y gestión interna de usuarios para una plataforma de cursos médicos. Stack: Next.js, React Router, TailwindCSS, Apollo Client, GraphQL; despliegue con Docker y control de código con GitHub.",
      actions: [
        {
          icon: <Github className="w-4 h-4" />,
          href: "https://github.com",
        },
        {
          icon: <Github className="w-4 h-4" />,
          href: "https://github.com",
        },
        {
          icon: <Star className="w-4 h-4" />,
          onClick: () => alert("⭐ Favorito!"),
        },
      ],
      labels: ["Tailwind", "Node.js"],
    },
    {
      id: 2,
      title: "Futuros Residentes",
      imageDesktop:
        "https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_6lwbhg.png",
      imageMobile:
        "https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_vd8ili.png",
      // subtitle: "subtitle 2",
      description: "Migración a una estructura modular de bloques reutilizables con ACF en WordPress. Tecnologías: PHP, JavaScript, HTML, TailwindCSS; gestión de MySQL via phpMyAdmin, metodología SCRUM y control de versiones con Git.",
      actions: [
        {
          icon: <Github className="w-4 h-4" />,
          href: "https://github.com",
        },
      ],
      labels: ["Node.js", "MongoDB"],
    },
    {
      id: 3,
      title: "FR · App Móvil",
      imageDesktop:
        "https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_6lwbhg.png",
      imageMobile:
        "https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_vd8ili.png",
      // subtitle: "subtitle 3",
      description:
        "Desarrollo y despliegue de apps móviles no-code integradas con WordPress mediante Adalo y AppMySite, con sincronización de contenido y publicación en tiendas móviles.",
    },
    {
      id: 4,
      title: "Sculapp",
      imageDesktop:
        "https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_6lwbhg.png",
      imageMobile:
        "https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_vd8ili.png",
      // subtitle: "Plataforma Base",
      description: "Rediseño y reestructuración de la plataforma base para ofrecer servicios a múltiples instituciones médicas; migración a bloques dinámicos con ACF.",
      labels: ["PHP", "JavaScript", "HTML", "TailwindCSS", "MySQL", "phpMyAdmin", "SCRUM", "Git"],
    },
  ];

  // Eventos para el Timeline
  const timelineEvents = [
    /* {
      time: "Sep 2025 - Actualidad",
      tag: "Proyecto formativo",
      title: "Tecnología en Desarrollo de Software",
      largeDescription: "Desarrollo de proyecto propio como parte del proceso formativo. Elaboración de la documentación técnica y adopción de buenas prácticas de desarrollo, con el propósito de comprender de forma integral el ciclo de vida del software.",
      icon: <GraduationCap className="w-5 h-5" />,
      // link: "/proyecto",
      // labels: ["Estudio "],
    },
    */
    {
      time: "Jul 2024 - Actualidad",
      tag: "Ascenso",
      title: "Soporte Técnico · Privilege Team",
      largeDescription: "Constructor Web / Plataforma de Ecommerce. Soporte técnico y asesoría en la creación y personalización de sitios, funnels y tiendas online. Acompañamiento en integraciones externas, APIs, automatizaciones con IA y consultas SQL.",
      icon: <ArrowUpNarrowWide className="w-5 h-5" />,
      //link: "/proyecto",
      labels: ["SEO", "DNS", "HTML", "JavaScript"],

    },
    {
      time: "Abr 2025 - Jun 2025",
      tag: "Colaborador recurrente",
      title: "Desarrollador Junior · SculApp",
      largeDescription: "Desarrollo de la plataforma administrativa. Freelance para apoyar el desarrollo de la plataforma administrativa de la Clínica Panamericana, un nuevo cliente de la empresa.",
      icon: <SquareCode className="w-5 h-5" />,
      // link: "#",
      labels: ["Freelance", "React", "Docker", "Tailwind"],
    },
    {
      time: "Sep 2023 - Feb 2024",
      tag: "Colaborador recurrente",
      title: "Analista TI · Prácticas",
      largeDescription: "Soporte de segundo nivel, desarrollo e integración web. Apoyé al equipo de desarrollo en la implementación y mejora de sitios web, asegurando su correcta integración con sistemas internos. Brindé soporte técnico de segundo nivel, resolviendo incidencias y optimizando procesos. También colaboré en el despliegue de aplicaciones móviles conectadas con plataformas web y en la coordinación del trabajo bajo metodología ágil.",
      icon: <SquareCode className="w-5 h-5" />,
      //link: "#",
      labels: ["Wordpress", "HTML", "Tailwind", "PHP", "SQL"],
    },
    /*
    {
      time: "Mar 2022 - Sep 2023",
      tag: "Proyecto formativo",
      title: "Carrera Técnica en Desarrollo de Software",
      largeDescription: "Desarrollo de proyecto colaborativo institucional. Formación técnica en desarrollo de software orientada a proyectos reales. Como trabajo final, participé en la creación de un sistema de gestión documental para el SENA, fortaleciendo mis bases en trabajo en equipo y desarrollo estructurado.",
      icon: <GraduationCap className="w-5 h-5" />,
      // link: "#",
      labels: ["Boostrap", "Python", "HTML", "JavaScript", "CSS", "PHP", "SQL"],
    },
    */
  ];

  // Importación dinámica del componente Swiper
  /*
  const PortfolioSwiper = dynamic(
    () => import('./components/SwiperDemo'),
    { ssr: false }
  );
  */

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <main className="max-w-4xl 2xl:max-w-2/3 mx-auto p-8 pt-18">
      {/* Upload
      <UploadImageForm />
      */}
      {/* HEADER */}
      <header className="">
        <Header
          subtitle="Elvis Reales"
          title="Desarrollador de Soluciones"
          description="Desarrollador junior orientado a la creación de soluciones digitales. He trabajado en la depuración, integración y mantenimiento de plataformas como MasterTools y Mastershop."
          image="https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_1a2t9wu.png"
          actions={[
            {
              icon: <Mail className="w-4 h-4" />,
              onClick: () => alert("realeselvis@gmail.com")
            },
            {
              icon: <Github className="w-4 h-4" />,
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
      <section id="timeline" className="">
        <h2 className="text-2xl font-allerta mb-10 sm:mb-15">Experiencia</h2>
        <Timeline events={timelineEvents} />
      </section>

      {/* Grid de cards */}

      {/* 
      <section>
        <h1>Mi Portfolio</h1>
        <PortfolioSwiper />
      </section>
      */}

<section
  id="projects"
  className="flex flex-col h-svh" // <- Section toma altura completa
>
  <div className="relative w-full flex-1 flex flex-col min-h-0"> 
    {/* ^ flex-1 para crecer, flex flex-col para layout vertical, min-h-0 para permitir shrink */}
    
    {/* Botones personalizados */}
    <button 
      ref={prevRef}
      className="swiper-button-prev custom-prev absolute top-1/2 left-[-60px] -translate-y-1/2 z-50 cursor-pointer w-12 h-12 flex items-center justify-center rounded-full bg-primary/80 hover:bg-primary text-secondary transition-all duration-300 hover:scale-110 shadow-custom"
      aria-label="Slide anterior"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
    <button 
      ref={nextRef}
      className="swiper-button-next custom-next absolute top-1/2 right-[-360px] -translate-y-1/2 z-50 cursor-pointer w-12 h-12 flex items-center justify-center rounded-full bg-primary/80 hover:bg-primary text-secondary transition-all duration-300 hover:scale-110 shadow-custom"
      aria-label="Slide siguiente"
    >
      <ChevronRight className="w-6 h-6" />
    </button>

     
    <h2 className="text-2xl font-allerta pt-15 sm:pt-10">
      Proyects & Collabs
    </h2>
    
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={3}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      pagination={{
        el: '.custom-pagination',
        clickable: true,
      }}
      onInit={(swiper) => {
        // Asignar los elementos de navegación después de la inicialización
        if (prevRef.current && nextRef.current) {
          // @ts-ignore - Swiper types pueden ser estrictos aquí
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }
      }}
      loop={true}
      className="w-full flex-1 mt-5 sm:mt-5 min-h-0 "
    >
      {cardsData.map((c) => (
        <SwiperSlide key={c.id} className="h-full">
          <ExperienceCard {...c} />
        </SwiperSlide>
      ))}
    </Swiper>
    
  </div>
  
  {/* Paginación fuera del div relativo pero dentro de la section */}
  <div className="custom-pagination mt-5 pb-4 flex justify-center"></div>
  {/* ^ pb-4 para espacio inferior */}
</section>

    </main>
  );
}
