import Link from "next/link";
import { Instagram, Youtube, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/ps.barinagaivan",
    icon: Instagram,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@ps_barinagaivan",
    icon: Youtube,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@ps_barinagaivan",
    icon: Twitter,
  },
];

const footerLinks = [
  {
    title: "Contacto",
    links: [
      {
        name: "Agendar Cita",
        href: "https://wa.me/5493415698000?text=Hola%20vengo%20de%20tu%20sitio%20web%20y%20me%20gustaria%20saber%20mas",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-[600px]">
            <Link
              href="/"
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
            >
              Ivan Barinaga
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Psicólogo Cognitivo Conductual especializado en terapia para
              depresión, TDAH, TOC, ataques de pánico, ansiedad y fobias. Te
              ayudo a superar tus desafíos emocionales.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-300">
            &copy; {new Date().getFullYear()} Ivan Barinaga. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
