import type { Metadata } from "next";

import AnalystInteractivePage from "./components/AnalystInteractivePage";

export const metadata: Metadata = {
  title: "Analista de Aplicaciones | SQL | Analista TI — Elvis Reales",
  description:
    "Perfil profesional orientado al análisis de aplicaciones, soporte TI, SQL, bases de datos, troubleshooting e integración de sistemas.",
};

export default function AnalistaPage() {
  return <AnalystInteractivePage />;
}
