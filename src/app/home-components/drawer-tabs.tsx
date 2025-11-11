"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "products", label: "Produtos" },
  { id: "services", label: "Serviços" },
];

export function DrawerTabs({
  activeTab,
  handleTabChange,
}: {
  activeTab: string;
  handleTabChange: (tab: string) => void;
}) {
  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex border-b border-pink-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={cn(
              "flex-1 text-center py-2 text-sm font-medium transition-colors",
              activeTab === tab.id ? "text-pink-600" : "hover:text-pink-600"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Underline Indicator */}
      <div className="relative h-[2px] bg-transparent">
        <div
          className={cn(
            "absolute bottom-0 h-[2px] bg-pink-600 transition-all duration-300",
            activeTab === "products" && "left-0 w-1/2",
            activeTab === "services" && "left-1/2 w-1/2"
          )}
        />
      </div>

      {/* Tab Content */}
      <div className="mt-4 text-sm text-pink-700"></div>
    </div>
  );
}
