"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import React from "react";
import SessionProvider from "../components/SessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Função para scroll suave
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Fecha o menu mobile após clicar
    setIsMobileMenuOpen(false);
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionProvider>
          <main>{children}</main>
        <footer className="w-full bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 backdrop-blur-xl border-t border-white/10 mt-16 py-12 px-4 flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <span className="font-bold text-cyan-300 text-lg">Contato:</span><br />
              <span className="text-cyan-100 text-lg font-semibold">(15) 97401-3939</span><br />
              <span className="text-cyan-100/80">contato@moraesfretamento.com.br</span>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <span className="font-bold text-purple-300 text-lg">Redes Sociais:</span><br />
              <a href="#" className="text-purple-100 hover:text-purple-300 transition-all duration-300 hover:scale-110 mx-2 font-semibold">Whatsapp</a>|
              <a href="https://www.instagram.com/moraesfretamento/" target="_blank" rel="noopener noreferrer" className="text-purple-100 hover:text-purple-300 transition-all duration-300 hover:scale-110 mx-2 font-semibold">Instagram</a>
            </div>
          </div>
          <div className="text-sm text-cyan-100/60 mt-4 font-light">✨ Deus seja louvado ✨</div>
        </footer>
        </SessionProvider>
      </body>
    </html>
  );
}
