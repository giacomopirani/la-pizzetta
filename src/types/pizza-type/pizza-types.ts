import type { IconType } from "react-icons";
import type { JSX } from "react/jsx-runtime";

export interface Pizza {
  name: string;
  ingredients: string;
  price: string;
  isSpecial?: boolean;
}

export interface PizzaSection {
  map(arg0: (pizza: any) => JSX.Element): import("react").ReactNode;
  items: any;
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
