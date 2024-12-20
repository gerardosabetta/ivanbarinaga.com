import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Brain, Heart, Shield, ChevronDown } from "lucide-react";
import { GridPattern } from "@/components/GridPattern";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Map from "@/components/Map";

export const metadata = {
  title: "Ivan Barinaga - Psicólogo Cognitivo Conductual en Rosario",
  description:
    "Psicólogo especializado en terapia cognitivo-conductual para depresión, TOC, ataques de pánico, ansiedad y fobias en Rosario, Argentina.",
};

const services = [
  {
    title: "Depresión",
    description: "Desafía tus cogniciones, rearma tu rutina",
    icon: Heart,
  },
  {
    title: "Ansiedad",
    description: "Herramientas prácticas para controlar y reducir tu ansiedad",
    icon: Brain,
  },
  {
    title: "Ataques de Pánico",
    description: "Afrontemos juntos las situaciones temidas",
    icon: Shield,
  },
];

const faqs = [
  {
    question: "¿Cómo son las sesiones de terapia?",
    answer:
      "Las sesiones son personalizadas y duran aproximadamente 50 minutos. Utilizamos un enfoque cognitivo-conductual para abordar tus preocupaciones específicas.",
  },
  {
    question: "¿Cuánto dura el tratamiento?",
    answer:
      "La duración del tratamiento depende de cada persona, sus síntomas y objetivos. Trabajaremos juntos para establecer metas claras y evaluaremos el progreso regularmente para que puedas alcanzar tus metas en un corto plazo.",
  },
  {
    question: "¿Las sesiones son presenciales o virtuales?",
    answer:
      "Ofrezco ambas modalidades. Las sesiones pueden ser presenciales en mi consultorio en Rosario o virtuales a través de videollamada.",
  },
];

export default function Home() {
  return (
    <>
      <GridPattern />
      <SpeedInsights />
      <Analytics />
      <div className="relative space-y-24">
        <section className="text-center pt-12 md:pt-24">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 mb-6">
            Psicología Cognitivo Conductual
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400">
            Del pensamiento a la acción,
            <br />
            del problema a la solución.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sesiones diseñadas para tus necesidades. Recuperá tu bienestar
            emocional con técnicas probadas y apoyo profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/5493415698000?text=Hola%20vengo%20de%20tu%20sitio%20web%20y%20me%20gustaria%20saber%20mas"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              target="_blank"
            >
              Agenda tu consulta <ArrowRight className="ml-2" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Explorar recursos
            </Link>
          </div>
        </section>

        <section className="relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20 dark:opacity-40 size-[550px] max-w-full max-h-full" />
              <Image
                src="/ivan-barinaga.webp"
                alt="Ivan Barinaga"
                width={500}
                height={500}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Sobre Mí
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Como psicólogo cognitivo conductual, me dedico a ayudarte a
                superar tus desafíos mentales, emocionales y de conducta. Mi
                enfoque se basa en técnicas probadas y respaldadas por la
                ciencia.
              </p>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li
                    key={service.title}
                    className="flex items-start bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm"
                  >
                    <div className="flex-shrink-0 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                      <service.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {service.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl bg-blue-600 dark:bg-blue-500">
          <div className="absolute inset-0 bg-grid-white/25 [mask-image:linear-gradient(0deg,white,transparent)]" />
          <div className="relative px-8 py-16 md:py-24 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para comenzar tu proceso de cambio?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              El primer paso hacia el bienestar emocional es pedir ayuda. Estoy
              aquí para acompañarte en tu proceso.
            </p>
            <Link
              href="https://wa.me/5493415698000?text=Hola%20vengo%20de%20tu%20sitio%20web%20y%20me%20gustaria%20saber%20mas"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-blue-600 bg-white rounded-full hover:bg-blue-50 transition-colors"
            >
              Contactar ahora <ArrowRight className="ml-2" />
            </Link>
          </div>
        </section>

        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Encuentra respuestas a las preguntas más comunes sobre el proceso
              terapéutico
            </p>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-800">
            {faqs.map((faq, index) => (
              <details key={index} className="group py-4 marker:content-['']">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                  <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 group-open:bg-blue-600 group-open:border-blue-600 dark:group-open:bg-blue-500">
                    <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform text-gray-700 dark:text-gray-300 group-open:text-white" />
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ubicación</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Montevideo 5965, Rosario, Santa Fe, Argentina
            </p>
          </div>
          <Map />
        </section>
      </div>
    </>
  );
}
