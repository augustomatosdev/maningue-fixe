"use client";
import React from "react";
import {
  ChevronUp,
  Phone,
  MessageCircle,
  CreditCard,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    Institucional: [
      { name: "Sobre Nós", href: "/sobre-nos" },
      { name: "Trabalhe Conosco", href: "/trabalhe-conosco" },
    ],
    Atendimento: [
      { name: "Central de Ajuda", href: "/ajuda" },
      { name: "Cadê Meu Pedido", href: "/rastreamento" },
      { name: "Canais de Atendimento", href: "/contato" },
      { name: "Solicitação de Troca", href: "/troca" },
      { name: "Solicitação de Devolução", href: "/devolucao" },
    ],
    Informações: [
      { name: "Regulamentos", href: "/regulamentos" },
      { name: "Política de Privacidade", href: "/privacy-policy" },
      { name: "Termos de Uso", href: "/terms-of-service" },
    ],
  };

  return (
    <footer className="bg-pink-600 text-white">
      {/* Voltar ao topo */}
      <div className="border-b border-white/20">
        <div className="max-w-screen-2xl mx-auto px-4">
          <button
            onClick={scrollToTop}
            className="w-full py-4 flex items-center justify-center gap-2 text-sm hover:opacity-80 transition-opacity"
          >
            <ChevronUp size={20} />
            <span>Voltar ao topo</span>
          </button>
        </div>
      </div>

      {/* Links principais */}
      <div className="max-w-screen-2xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm hover:opacity-80 transition-opacity"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Canais de atendimento */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <h3 className="text-lg font-semibold mb-6 text-center">
            Canais de Atendimento
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 bg-white/10 p-6 rounded-lg">
              <MessageCircle className="flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/5511995564258"
                  className="text-sm hover:opacity-80 transition-opacity"
                >
                  +244 923 000 000
                </a>
                <p className="text-xs opacity-90 mt-2">
                  Todos os dias das 07:00 às 21:30
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white/10 p-6 rounded-lg">
              <Phone className="flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold mb-1">Central de Atendimento</p>
                <a
                  href="tel:08001000146"
                  className="text-sm hover:opacity-80 transition-opacity"
                >
                  +244 923 000 000
                </a>
                <p className="text-xs opacity-90 mt-2">
                  Todos os dias das 08:00 às 20:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Formas de pagamento */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-sm font-semibold mb-4 flex items-center justify-center gap-2">
              <CreditCard size={20} />
              Formas de Pagamento
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <img
                src="/payment-methods.webp"
                alt="payment-methods"
                className="h-14"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Logo e Redes Sociais */}
      <div className="border-t border-white/20">
        <div className="max-w-screen-2xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img
              src="/mf-logo-white.svg"
              alt="Maningue Fixe"
              className="h-12"
            />
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-pink-600 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-pink-600 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-pink-600 transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 bg-pink-700">
        <div className="max-w-screen-2xl mx-auto px-4 py-6">
          <p className="text-center text-xs opacity-90">
            Todos os direitos reservados © 2025 | MANINGUE FIXE
          </p>
        </div>
      </div>
    </footer>
  );
}
