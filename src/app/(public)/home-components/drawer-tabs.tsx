"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type DrawerTabId = "products" | "services";

const tabs: { id: DrawerTabId; label: string }[] = [
  { id: "products", label: "Produtos" },
  { id: "services", label: "Serviços" },
];

interface DrawerTabsProps {
  activeTab: DrawerTabId;
  handleTabChange: (tab: DrawerTabId) => void;
}

export function DrawerTabs({ activeTab, handleTabChange }: DrawerTabsProps) {
  return (
    <div className="w-full px-4">
      <div
        role="tablist"
        aria-label="Navegação categorias"
        className="flex rounded-full border border-pink-200 bg-pink-50 p-1"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`${tab.id}-tab`}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`${tab.id}-panel`}
            className={cn(
              "flex-1 rounded-full px-3 py-2 text-sm font-semibold capitalize transition-all",
              activeTab === tab.id
                ? "bg-white text-pink-600 shadow"
                : "text-pink-500 hover:text-pink-600"
            )}
            onClick={() => handleTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
