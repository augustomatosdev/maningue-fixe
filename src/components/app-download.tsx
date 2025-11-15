import React from "react";

export const AppDownload = () => {
  return (
    <div className="my-12 max-w-screen-md mx-auto space-y-8 flex flex-col items-center justify-center">
      <h1 className="text-center text-4xl font-bold text-pink-600">
        baixe o app da Belleza
      </h1>
      <p className="text-center text-xl text-gray-500">
        Reserve experiências inesquecíveis, encontre promoções muito mais mais
        com o aplicativo para celular da Belleza
      </p>
      <div className="flex items-center justify-center gap-8">
        <a
          href="https://apps.apple.com/br/app/Belleza/id6733744901"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/apple-store-download.svg"
            alt="app-1"
            className="rounded-lg h-14"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.Belleza"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/google-play-download.svg"
            alt="app-1"
            className="rounded-lg h-14"
          />
        </a>
      </div>
    </div>
  );
};
