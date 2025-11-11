import React from "react";
import { Button } from "./ui/button";

export const MonthHighlight = () => {
  return (
    <div className="my-12 max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 shadow-mb">
      <img
        src="https://wepink.vtexassets.com/arquivos/ids/161760/161514-1200-auto.webp?v=638980628975100000"
        alt="service-1"
        className="w-full h-full object-cover md:rounded-l-lg"
      />
      <div className="bg-pink-600 p-8 flex items-center text-white md:rounded-r-lg">
        <div className="space-y-4">
          <p className="font-bold">#destaque do mês</p>
          <p className="text-xl font-bold">
            Celebrate Sunset Desodorante Colônia 100ml - Wepink
          </p>
          <p>celebre a luz que brilha dentro de você</p>
          <div>
            <p className="line-through text-white/60 font-bold">R$ 100,00</p>
            <p>R$ 80,00</p>
          </div>
          <Button
            size="lg"
            variant="outline"
            className="bg-pink-600 text-white flex-1 font-bold hover:bg-pink-700"
          >
            eu quero!
          </Button>
        </div>
      </div>
    </div>
  );
};
