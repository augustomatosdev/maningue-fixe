import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ProductCategoriesFilter() {
  return (
    <Select defaultValue="recommended">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Classificar por" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectItem value="recommended">Recomendados</SelectItem>
          <SelectItem value="most-popular">Mais populares</SelectItem>
          <SelectItem value="new">Mais recenter</SelectItem>
          <SelectItem value="most-sold">Mais vendidos</SelectItem>
          <SelectItem value="lowest-price">Menor preço</SelectItem>
          <SelectItem value="highest-price">Maior preço</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
