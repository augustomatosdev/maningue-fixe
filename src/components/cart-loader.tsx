"use client";
import { useCartStore } from "@/store/use-cart";
import React, { useEffect } from "react";

export const CartLoader = () => {
  const loadCart = useCartStore((state: any) => state.loadCart);

  useEffect(() => {
    loadCart();
  }, [loadCart]);
  return <></>;
};
