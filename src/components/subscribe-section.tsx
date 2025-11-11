"use client";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const SubscribeSection = () => {
  return (
    <div className="py-8 px-4 flex items-center justify-center bg-pink-600 text-white">
      <div className="space-y-6">
        <p className="text-xl">
          receba dicas e novidades exclusivas! cadastre-se aqui 💖 👇
        </p>
        <Input type="nome" placeholder="Digite seu nome" className="w-full" />
        <Input type="email" placeholder="Digite seu email" className="w-full" />
        <Button
          size="lg"
          className="bg-white text-pink-600 flex-1 font-bold hover:bg-white/80"
        >
          cadastrar
        </Button>
      </div>
    </div>
  );
};
