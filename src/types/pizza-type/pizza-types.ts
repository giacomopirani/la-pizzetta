import type { IconType } from "react-icons";

export interface Pizza {
  name: string;
  ingredients: string;
  price: string;
  isSpecial?: boolean;
}

export interface PizzaSection {
  icon: IconType;
  color: string;
  pizzas: Pizza[];
}

export interface PizzaData {
  [key: string]: PizzaSection;
}

export type SectionKey =
  | "classiche"
  | "speciali"
  | "bianche"
  | "marinare"
  | "fornarine"
  | "giganti";

export interface SectionTitles {
  [key: string]: string;
}
