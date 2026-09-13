"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  FileText,
  Github,
  Headphones,
  Mail,
  Network,
  Search,
  Terminal,
} from "lucide-react";

type FlowItem = {
  title: string;
  short: string;
  detail: string;
  question: string;
  tools: string[];
  icon: typeof Database;
};

type CaseStudy = {
  number: string;
  title: string;
  status: string;
  problem: string;
  solution: string;
  architecture: string[];
  technologies: string[];
  details: [string, string][];
};

const dataFlow: FlowItem[] = [
  { title: "Datos", short: "Captura", detail: "Los sistemas generan información que puede ayudar a explicar un comportamiento.", question: "¿Qué información necesitamos para entender el problema?", tools: ["Registros", "Contexto", "Eventos"], icon: FileText },
  { title: "Base de datos", short: "Estructura", detail: "La información queda almacenada y estructurada para poder consultarla.", question: "¿Dónde está el dato que confirma o contradice el síntoma?", tools: ["MySQL", "Bases de datos", "phpMyAdmin"], icon: Database },
  { title: "SQL", short: "Consulta", detail: "Consulto y relaciono la información para buscar evidencia, sin asumir una causa.", question: "¿Qué consulta permite aislar la diferencia?", tools: ["SELECT", "WHERE", "JOIN", "GROUP BY", "ORDER BY"], icon: Terminal },
  { title: "Análisis", short: "Contraste", detail: "Comparo lo que la aplicación muestra con lo que realmente ocurre en los datos.", question: "¿Coinciden la aplicación, el contexto y la información almacenada?", tools: ["Hipótesis", "Evidencia", "Incidencia"], icon: Search },
  { title: "Dashboard", short: "Seguimiento", detail: "La visualización puede convertir hallazgos en información útil para seguimiento.", question: "¿Cómo hacemos visible el estado sin inventar métricas?", tools: ["Hallazgos", "Filtros", "Reporting"], icon: BarChart3 },
  { title: "Decisión", short: "Acción", detail: "El análisis termina apoyando una decisión operativa o una siguiente investigación.", question: "¿Qué debe hacerse y cómo validamos que funcionó?", tools: ["Solución", "Validación", "Seguimiento"], icon: CheckCircle2 },
];

const diagnosticFlow = [
  ["Síntoma", "Identifico qué está fallando y cuál es el impacto."],
  ["Contexto", "Reúno pasos de reproducción, alcance e integraciones involucradas."],
  ["Evidencia", "Reviso mensajes, logs y condiciones del entorno."],
  ["Datos / SQL", "Valido si el comportamiento coincide con la información almacenada."],
  ["Hipótesis", "Relaciono las señales antes de proponer una causa."],
  ["Solución", "Aplico o coordino una corrección concreta."],
  ["Validación", "Compruebo el resultado en el flujo completo."],
];

const cases: CaseStudy[] = [
  {
    number: "01",
    title: "Cafecito con Mike",
    status: "Configurado y validado",
    problem: "La transmisión pasó de todos los lunes a cada dos semanas, pero el enlace de Zoom permanecía igual.",
    solution: "Una página intermedia dinámica decide cuándo mostrar información y cuándo habilitar el acceso.",
    architecture: ["Google Sheets", "Apps Script", "MasterTools", "JavaScript"],
    technologies: ["ANUNCIOS!D1", "Web App", "America/Bogota", "Pruebas de aceptación"],
    details: [["Qué estaba pasando", "Un enlace permanente podía llevar a usuarios a una sala sin transmisión."], ["Cómo funciona", "Apps Script expone la fecha; MasterTools consulta la Web App y JavaScript determina el estado."], ["Qué se validó", "Estados como Por programar, Próximo Cafecito, Hoy tenemos Cafecito y Estamos en vivo."]],
  },
  {
    number: "02",
    title: "Control de horarios y trazabilidad",
    status: "En evolución",
    problem: "Se necesitaba controlar registros de horarios y modificaciones con diferentes niveles de acceso.",
    solution: "Se estructuró una solución con registros, roles, filtros de seguridad, historial y automatizaciones.",
    architecture: ["Google Sheets", "AppSheet", "Registro_Horarios", "Historial_Modificaciones", "Reporting"],
    technologies: ["bd_usuarios", "Empleado / Admin / Super Admin", "Bots", "Copiar Horario"],
    details: [["Qué se estructuró", "Tablas de usuarios, horarios e historial con roles y permisos diferenciados."], ["Cómo funciona", "Filtros de seguridad, autocompletado, fórmulas y Bots apoyan el registro y la trazabilidad."], ["Próximas etapas", "Carga masiva avanzada, conexión con Looker Studio y despliegue final quedaron documentados como pendientes."]],
  },
  {
    number: "03",
    title: "Enrutamiento inteligente de soporte",
    status: "Implementación / flujo en evolución",
    problem: "Un bot de soporte debía interpretar mensajes, identificar el contexto y dirigir cada solicitud.",
    solution: "Se definió un flujo híbrido para clasificar intención, extraer correo, aplicar reglas y enrutar la conversación.",
    architecture: ["Mensaje", "IA", "Clasificación", "Variables", "Reglas", "Enrutamiento", "Respuesta"],
    technologies: ["Crisp Bot", "HTTP Request", "Set User Data", "Condiciones"],
    details: [["Qué se analiza", "Categorías BEMASTER, ECOMCLUB, MASTERSHOP, MASTERTOOLS, VENTAS y OTRO."], ["Cómo funciona", "La intención y el correo alimentan variables de sesión, horarios, condiciones y acciones."], ["Estado", "La disponibilidad del equipo/agentes aparece como un elemento pendiente de la evolución del flujo."]],
  },
];

const experience = [
  { period: "Jul 2024 - Actualidad", role: "Soporte Técnico · Privilege Team", tags: ["Soporte", "APIs", "SQL", "Integraciones"], detail: "Acompañamiento en plataformas, integraciones externas, automatizaciones con IA y consultas SQL." },
  { period: "Abr 2025 - Jun 2025", role: "Desarrollador Junior · SculApp", tags: ["Aplicación", "Mantenimiento", "React"], detail: "Apoyo freelance en una plataforma administrativa para la Clínica Panamericana." },
  { period: "Sep 2023 - Feb 2024", role: "Analista TI · Prácticas", tags: ["Segundo nivel", "Incidencias", "Integración", "SQL"], detail: "Soporte de segundo nivel, resolución de incidencias e integración de aplicaciones web y móviles." },
];

const primarySkills = ["SQL", "MySQL", "Bases de datos", "Troubleshooting", "Soporte de aplicaciones", "Análisis", "APIs / Integraciones", "Git"];
const complementarySkills = ["PHP", "WordPress", "JavaScript", "HTML", "Linux"];
const developmentSkills = ["React", "Next.js", "TypeScript", "Tailwind"];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 font-jetmono text-xs uppercase tracking-[0.18em] text-primary">{children}</p>;
}

function FlowArrow() {
  return <ArrowRight className="hidden h-4 w-4 shrink-0 text-primary/60 lg:block" aria-hidden="true" />;
}

export default function AnalystInteractivePage() {
  const [activeDataStep, setActiveDataStep] = useState(2);
  const [activeDiagnosticStep, setActiveDiagnosticStep] = useState(0);
  const [openCase, setOpenCase] = useState(0);
  const [openExperience, setOpenExperience] = useState<number | null>(null);
  const currentDataStep = dataFlow[activeDataStep];
  const CurrentDataIcon = currentDataStep.icon;

  return (
    <main className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-20 lg:pt-20">
      <section className="grid min-h-0 items-center gap-10 py-8 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-8">
        <div>
          <SectionLabel>Elvis Reales / Perfil profesional</SectionLabel>
          <h1 className="heading-gradient text-5xl leading-none sm:text-7xl">Analista de<br />Aplicaciones</h1>
          <p className="mt-6 font-allerta text-xl text-primary sm:text-2xl">SQL · Datos · Soporte TI</p>
          <p className="mt-6 max-w-xl text-base leading-7 text-foreground/80 sm:text-lg">Investigo problemas de aplicaciones relacionando datos, sistemas e integraciones.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#casos" className="custom-button h-10 gap-2 px-4">Ver casos <ArrowRight className="h-4 w-4" /></a>
            <a href="#contacto" className="flex h-10 items-center gap-2 rounded-sm border border-primary/60 px-4 font-jetmono text-sm text-primary transition-colors hover:bg-primary hover:text-secondary"><Mail className="h-4 w-4" /> Contacto</a>
          </div>
        </div>
        <div className="relative order-last mx-auto w-full max-w-md lg:order-none">
          <div className="absolute -inset-5 border border-primary/20" aria-hidden="true" />
          <div className="relative h-[18rem] border border-primary/60 bg-secondary/30 sm:h-[20rem] lg:h-[min(34rem,calc(100svh-12rem))]">
            <Image
              src="/images/elvis-reales-professional.png"
              alt="Elvis Reales, Analista de Aplicaciones"
              fill
              priority
              sizes="(max-width: 1023px) 85vw, 42vw"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 py-16" id="flujo-datos">
        <SectionLabel>01 / Del problema a la decisión</SectionLabel>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5"><h2 className="heading-gradient text-3xl sm:text-4xl">Datos → decisiones</h2><p className="max-w-sm font-jetmono text-xs leading-6 text-foreground/60">Selecciona una etapa para ver qué pregunta responde y qué herramientas la acompañan.</p></div>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
          {dataFlow.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeDataStep;
            return <div key={step.title} className="flex items-center gap-3 lg:contents"><button type="button" role="tab" aria-selected={isActive} aria-controls={`data-panel-${index}`} onClick={() => setActiveDataStep(index)} className={`group flex min-h-20 flex-1 items-center gap-3 border p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${isActive ? "border-primary bg-primary text-secondary shadow-custom" : "border-foreground/15 hover:border-primary/60"}`}><span className="font-jetmono text-xs opacity-70">0{index + 1}</span><Icon className="h-5 w-5 shrink-0" /><span className="font-allerta text-sm">{step.title}</span></button>{index < dataFlow.length - 1 && <FlowArrow />}</div>;
          })}
        </div>
        <div id={`data-panel-${activeDataStep}`} role="tabpanel" className="mt-5 grid gap-6 border border-primary/40 bg-secondary/20 p-6 sm:grid-cols-[1.2fr_0.8fr] sm:p-8">
          <div><div className="flex items-center gap-3 text-primary"><CurrentDataIcon className="h-6 w-6" /><span className="font-jetmono text-xs uppercase tracking-widest">Etapa 0{activeDataStep + 1} / {currentDataStep.short}</span></div><p className="mt-5 max-w-xl font-allerta text-2xl">{currentDataStep.detail}</p><p className="mt-5 font-jetmono text-sm text-foreground/70"><span className="text-primary">Pregunta:</span> {currentDataStep.question}</p></div>
          <div className="border-l border-primary/30 pl-5"><p className="font-jetmono text-xs uppercase tracking-widest text-foreground/50">Herramientas / señales</p><div className="mt-4 flex flex-wrap gap-2">{currentDataStep.tools.map((tool) => <span key={tool} className="custom-label font-alumi">{tool}</span>)}</div></div>
        </div>
      </section>

      <section className="py-16" id="diagnostico">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5"><div><SectionLabel>02 / Forma de pensar</SectionLabel><h2 className="heading-gradient text-3xl sm:text-4xl">Así investigo una incidencia</h2></div><p className="max-w-xs font-jetmono text-xs leading-6 text-foreground/60">Una incidencia no siempre está en el lugar donde aparece.</p></div>
        <div className="grid gap-3 md:grid-cols-7">{diagnosticFlow.map(([title], index) => <div key={title} className="contents"><button type="button" role="tab" aria-selected={activeDiagnosticStep === index} onClick={() => setActiveDiagnosticStep(index)} className={`min-h-16 border p-3 text-left font-allerta text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:min-h-28 ${activeDiagnosticStep === index ? "border-primary bg-primary text-secondary" : "border-foreground/15 hover:border-primary/60"}`}><span className="mb-2 block font-jetmono text-[10px] opacity-70">0{index + 1}</span>{title}</button>{index < diagnosticFlow.length - 1 && <ArrowDown className="mx-auto h-4 w-4 text-primary/60 md:hidden" aria-hidden="true" />}</div>)}</div>
        <div className="mt-5 flex items-start gap-4 border-l-2 border-primary p-5"><Activity className="mt-1 h-5 w-5 shrink-0 text-primary" /><p className="font-jetmono text-sm leading-6 text-foreground/80">{diagnosticFlow[activeDiagnosticStep][1]}</p></div>
      </section>

      <section className="border-y border-foreground/10 py-16" id="capacidades">
        <SectionLabel>03 / Lo que puedo conectar</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"><div><h2 className="heading-gradient text-3xl sm:text-4xl">Datos, soporte y aplicación</h2><div className="mt-8 flex flex-wrap gap-3">{primarySkills.map((skill) => <span key={skill} className="border border-primary/50 bg-primary/10 px-4 py-3 font-allerta text-sm text-primary">{skill}</span>)}</div></div><div className="space-y-6 border-l border-foreground/15 pl-6"><div><p className="font-jetmono text-xs uppercase tracking-widest text-foreground/50">Complementario</p><p className="mt-3 font-jetmono text-sm leading-7 text-foreground/70">{complementarySkills.join(" · ")}</p></div><div><p className="font-jetmono text-xs uppercase tracking-widest text-foreground/50">Desarrollo al servicio del análisis</p><p className="mt-3 font-jetmono text-sm leading-7 text-foreground/60">{developmentSkills.join(" · ")}</p></div><div className="flex items-center gap-3 border-t border-primary/30 pt-5"><Network className="h-5 w-5 text-primary" /><span className="font-jetmono text-xs text-foreground/70">Entender la conexión entre sistemas también es parte del soporte.</span></div></div></div>
      </section>

      <section className="py-16" id="casos">
        <SectionLabel>04 / Casos reales</SectionLabel>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5"><h2 className="heading-gradient text-3xl sm:text-4xl">Historias de solución</h2><p className="max-w-sm font-jetmono text-xs leading-6 text-foreground/60">Problema, arquitectura y estado. Abre cada caso para ver el razonamiento.</p></div>
        <div className="space-y-3">{cases.map((item, index) => { const isOpen = openCase === index; return <article key={item.title} className={`border transition-colors ${isOpen ? "border-primary" : "border-foreground/15"}`}><button type="button" aria-expanded={isOpen} aria-controls={`case-panel-${item.number}`} onClick={() => setOpenCase(isOpen ? -1 : index)} className="flex w-full items-center gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:p-6"><span className="font-jetmono text-sm text-primary">{item.number}</span><span className="flex-1"><span className="block font-allerta text-xl">{item.title}</span><span className="mt-1 block font-jetmono text-xs text-foreground/50">{item.status}</span></span><ArrowRight className={`h-5 w-5 text-primary transition-transform ${isOpen ? "rotate-90" : ""}`} /></button>{isOpen && <div id={`case-panel-${item.number}`} className="grid gap-8 border-t border-primary/30 p-5 sm:p-6 lg:grid-cols-[0.85fr_1.15fr]"><div className="space-y-5"><div><p className="font-jetmono text-[10px] uppercase tracking-widest text-primary">Problema</p><p className="mt-2 text-sm leading-6 text-foreground/75">{item.problem}</p></div><div><p className="font-jetmono text-[10px] uppercase tracking-widest text-primary">Solución</p><p className="mt-2 text-sm leading-6 text-foreground/75">{item.solution}</p></div><div className="flex flex-wrap gap-2">{item.technologies.map((tech) => <span key={tech} className="custom-label font-alumi">{tech}</span>)}</div></div><div><p className="mb-3 font-jetmono text-[10px] uppercase tracking-widest text-primary">Arquitectura</p><div className="flex flex-wrap items-center gap-2">{item.architecture.map((node, nodeIndex) => <div key={node} className="flex items-center gap-2"><span className="border border-primary/40 bg-secondary/30 px-3 py-2 font-jetmono text-xs">{node}</span>{nodeIndex < item.architecture.length - 1 && <ArrowRight className="h-3 w-3 text-primary" aria-hidden="true" />}</div>)}</div><div className="mt-6 space-y-4">{item.details.map(([label, detail]) => <div key={label} className="border-l border-primary/50 pl-4"><p className="font-allerta text-sm text-primary">{label}</p><p className="mt-1 font-jetmono text-xs leading-6 text-foreground/70">{detail}</p></div>)}</div></div></div>}</article>; })}</div>
      </section>

      <section className="border-t border-foreground/10 py-16" id="experiencia">
        <SectionLabel>05 / Experiencia y contacto</SectionLabel>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]"><div><h2 className="heading-gradient text-3xl sm:text-4xl">Cerca de la operación</h2><div className="mt-8 border-l-2 border-primary/60 pl-5">{experience.map((item, index) => { const isOpen = openExperience === index; return <div key={item.role} className="relative mb-7 last:mb-0"><span className="absolute -left-[1.85rem] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-[var(--background)]" /><button type="button" aria-expanded={isOpen} onClick={() => setOpenExperience(isOpen ? null : index)} className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><span className="font-jetmono text-xs text-primary">{item.period}</span><span className="mt-1 flex items-center justify-between gap-3 font-allerta text-lg"><span>{item.role}</span><ArrowRight className={`h-4 w-4 text-primary transition-transform ${isOpen ? "rotate-90" : ""}`} /></span></button><div className="mt-3 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="custom-label font-alumi">{tag}</span>)}</div>{isOpen && <p className="mt-3 font-jetmono text-xs leading-6 text-foreground/70">{item.detail}</p>}</div>; })}</div></div><div id="contacto" className="flex flex-col justify-between border-l border-primary/40 pl-6"><div><Headphones className="h-7 w-7 text-primary" /><h2 className="mt-5 font-allerta text-2xl">¿Tienes una aplicación que necesita análisis?</h2><p className="mt-4 max-w-sm font-jetmono text-sm leading-7 text-foreground/70">Hablemos de soporte, incidencias e integraciones.</p></div><div className="mt-8 flex flex-wrap gap-3"><a href="mailto:realeselvis@gmail.com" className="custom-button h-10 gap-2 px-4"><Mail className="h-4 w-4" /> Contactar</a><a href="https://github.com/realeselvis" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Elvis Reales" className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/60 text-primary transition-colors hover:bg-primary hover:text-secondary"><Github className="h-4 w-4" /></a></div></div></div>
      </section>
    </main>
  );
}
