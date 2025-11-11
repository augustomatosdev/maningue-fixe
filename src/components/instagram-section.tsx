import { Instagram } from "lucide-react";
import React from "react";

export const InstagramSection = () => {
  return (
    <div className="my-12 max-w-screen-2xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-center text-4xl font-bold text-pink-600 w-full">
          siga @maninguefixe
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
        {Array.from({ length: 4 }).map((_, index: number) => (
          <a
            href="https://www.instagram.com/maninguefixe"
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="relative"
          >
            <img
              src="https://wepink.vtexassets.com/arquivos/ids/159560-1000-1000?v=638718488119000000&width=1000&height=1000&aspect=true"
              alt="instagram-1"
              className="w-full aspect-square object-cover rounded-lg"
            />

            {/* overlay with instagram logo */}
            <div className="absolute inset-0 flex items-center justify-center bg-pink-600/30 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Instagram className="w-10 h-10 text-pink-600" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
