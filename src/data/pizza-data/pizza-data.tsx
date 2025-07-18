import { BiSolidPizza } from "react-icons/bi";
import { FaPizzaSlice, FaStar } from "react-icons/fa";
import { GiFullPizza } from "react-icons/gi";
import { LuPizza } from "react-icons/lu";
import { PiPizzaLight } from "react-icons/pi";
import {
  type PizzaData,
  type SectionTitles,
} from "../../types/pizza-type/pizza-types";

export const pizzaData: PizzaData = {
  giganti: {
    icon: GiFullPizza,
    color: "black",
    pizzas: [
      {
        name: "MARGHERITA",
        ingredients:
          "Le nostre pizze giganti sono ideali per 3/4 persone, da gustare in compagnia!",
        price: "€14,00",
        isSpecial: true,
      },
      {
        name: "1 GUSTO A SCELTA",
        ingredients:
          "Le nostre pizze giganti sono ideali per 3/4 persone, da gustare in compagnia!",
        price: "€17,00",
        isSpecial: true,
      },
      {
        name: "2 GUSTI A SCELTA",
        ingredients:
          "Le nostre pizze giganti sono ideali per 3/4 persone, da gustare in compagnia!",
        price: "€20,00",
        isSpecial: true,
      },
      {
        name: "3 GUSTI A SCELTA",
        ingredients:
          "Le nostre pizze giganti sono ideali per 3/4 persone, da gustare in compagnia!",
        price: "€23,00",
        isSpecial: true,
      },
      {
        name: "MILLEGUSTI",
        ingredients:
          "Le nostre pizze giganti sono ideali per 3/4 persone, da gustare in compagnia!",
        price: "€25,00",
        isSpecial: true,
      },
    ],
  },
  classiche: {
    icon: FaPizzaSlice,
    color: "black",
    pizzas: [
      {
        name: "MARGHERITA",
        ingredients: "Pomodoro, mozzarella",
        price: "€5,50",
      },
      {
        name: "WURSTEL",
        ingredients: "Pomodoro, mozzarella, wurstel",
        price: "€7,00",
      },
      {
        name: "FUNGHI",
        ingredients: "Pomodoro, mozzarella, funghi",
        price: "€7,00",
      },
      {
        name: "SALSICCIA",
        ingredients: "Pomodoro, mozzarella, salsiccia",
        price: "€7,00",
      },
      {
        name: "CARCIOFI",
        ingredients: "Pomodoro, mozzarella, carciofi",
        price: "€7,00",
      },
      {
        name: "NAPOLI",
        ingredients: "Pomodoro, mozzarella, acciughe",
        price: "€6,50",
      },
      {
        name: "ROSSINI",
        ingredients: "Pomodoro, mozzarella, uovo sodo",
        price: "€7,00",
      },
      {
        name: "PROSCIUTTO CRUDO",
        ingredients: "Pomodoro, mozzarella, prosciutto crudo",
        price: "€7,50",
      },
      {
        name: "ROMANA",
        ingredients: "Pomodoro, mozzarella, acciughe, capperi",
        price: "€7,50",
      },
      {
        name: "PROSCIUTTO COTTO",
        ingredients: "Pomodoro, mozzarella, prosciutto cotto",
        price: "€7,00",
      },
      {
        name: "PROSCIUTTO COTTO E FUNGHI",
        ingredients: "Pomodoro, mozzarella, prosciutto cotto, funghi",
        price: "€8,00",
      },
      {
        name: "FUNGHI E SALSICCIA",
        ingredients: "Pomodoro, mozzarella, funghi, salsiccia",
        price: "€8,00",
      },
      {
        name: "TONNO E CIPOLLA",
        ingredients: "Pomodoro, mozzarella, tonno e cipolla",
        price: "€8,00",
      },
      {
        name: "CALZONE",
        ingredients: "Pomodoro, mozzarella, funghi, carciofi, prosciutto cotto",
        price: "€8,50",
      },
      {
        name: "QUATTRO STAGIONI",
        ingredients:
          "Pomodoro, mozzarella, funghi, carciofini, prosciutto cotto, salsiccia",
        price: "€8,50",
      },
      {
        name: "CAPRICCIOSA",
        ingredients:
          "Pomodoro, mozzarella, funghi, carciofini, prosciutto cotto, olive nere",
        price: "€8,50",
      },
      {
        name: "DIAVOLA",
        ingredients: "Pomodoro, mozzarella, salame piccante, peperoni",
        price: "€8,00",
      },
      {
        name: "VERDURE GRIGLIATE",
        ingredients: "Pomodoro, mozzarella, verdure grigliate",
        price: "€7,00",
      },
      {
        name: "ORTOLANA",
        ingredients: "Pomodoro, mozzarella, verdure di stagione",
        price: "€8,50",
      },
      {
        name: "SPECK E SCAMORZA",
        ingredients: "Pomodoro, mozzarella, speck, scamorza",
        price: "€8,00",
      },
    ],
  },
  speciali: {
    icon: FaStar,
    color: "black",
    pizzas: [
      {
        name: "QUATTRO FORMAGGI",
        ingredients: "Quattro formaggi",
        price: "€8,00",
      },
      {
        name: "QUATTRO FORMAGGI E PORCINI",
        ingredients: "Quattro formaggi, porcini",
        price: "€9,50",
      },
      {
        name: "AFFUMICATA",
        ingredients: "Speck, rucola, grana",
        price: "€8,50",
      },
      { name: "CARBONARA", ingredients: "Uova, pancetta", price: "€8,00" },
      {
        name: "TREVIGIANA",
        ingredients: "Radicchio, pancetta, grana",
        price: "€8,50",
      },
      {
        name: "LA TRIFOLATA",
        ingredients: "Melanzane, zucchine, funghi",
        price: "€8,00",
      },
      {
        name: "LA GABRY",
        ingredients: "Salsiccia, wurstel, olive",
        price: "€8,50",
      },
      {
        name: "LA SFIZIOSA",
        ingredients: "Salame piccante, salsiccia, rucola",
        price: "€8,50",
      },
      {
        name: "LA SPECIALE",
        ingredients: "Mozzarella di bufala, rucola, pendolini, grana",
        price: "€9,00",
      },
      {
        name: "ROSA DEI VENTI",
        ingredients:
          "Mozzarella di bufala, acciughe, radicchio, olive, carciofi, grana",
        price: "€9,50",
      },
      {
        name: "CAPRESE",
        ingredients: "Mozzarella di bufala, pendolini, basilico, olive",
        price: "€8,50",
      },
      {
        name: "MOZART",
        ingredients: "Funghi, salsiccia, gorgonzola",
        price: "€8,50",
      },
      {
        name: "CINOMONTE",
        ingredients:
          "Funghi trifolati, salsiccia, salame piccante, carciofi, olive e capperi",
        price: "€9,50",
      },
      {
        name: "CINOMARE",
        ingredients: "Tonno, cipolla, capperi, acciughe, olive e origano",
        price: "€9,50",
      },
      {
        name: "LA RUSTICA",
        ingredients: "Salsiccia, pendolini, aglio e prezzemolo",
        price: "€8,50",
      },
      {
        name: "LA NINI",
        ingredients: "Mozzarella bufala, wurstel, salsiccia e prosciutto cotto",
        price: "€9,50",
      },
      {
        name: "LA CORRADO",
        ingredients: "Patate lesse, gorgonzola, aglio e prezzemolo",
        price: "€8,00",
      },
    ],
  },
  bianche: {
    icon: LuPizza,
    color: "black",
    pizzas: [
      {
        name: "LA LÙ",
        ingredients: "Mozzarella, quattro formaggi, salsiccia, olio tartufato",
        price: "€9,00",
      },
      {
        name: "LA CELENTANO",
        ingredients: "Mozzarella, erbe, salsiccia",
        price: "€8,00",
      },
      {
        name: "LA GRATÈ",
        ingredients: "Mozzarella, verdure gratinate",
        price: "€8,00",
      },
      {
        name: "LA BIANCA",
        ingredients: "Mozzarella di bufala, prosciutto crudo, pendolini",
        price: "€9,00",
      },
      {
        name: "LA PIZZETTA",
        ingredients:
          "Mozzarella di bufala, lardo di colonnata, rucola, pendolini",
        price: "€9,50",
      },
      {
        name: "LA SUPER",
        ingredients: "Mozzarella, patate lesse, salsiccia, radicchio, olive",
        price: "€9,00",
      },
      {
        name: "LA DELICATA",
        ingredients: "Mozzarella, gamberi, rucola, grana",
        price: "€9,50",
      },
    ],
  },
  marinare: {
    icon: BiSolidPizza,
    color: "black",
    pizzas: [
      {
        name: "MARINARA",
        ingredients: "Pomodoro, aglio, prezzemolo",
        price: "€5,00",
      },
      {
        name: "SARY",
        ingredients:
          "Pomodoro, aglio, prezzemolo, prosciutto crudo, melanzane, zucchine",
        price: "€8,50",
      },
    ],
  },
  fornarine: {
    icon: PiPizzaLight,
    color: "black",
    pizzas: [
      { name: "FORNARINA", ingredients: "", price: "€3,00" },
      { name: "FORNARINA ROSSA", ingredients: "", price: "€3,50" },
      { name: "PROSCIUTTO CRUDO", ingredients: "", price: "€6,50" },
      { name: "PROSCIUTTO CRUDO E INSALATA", ingredients: "", price: "€7,50" },
      {
        name: "PORCHETTA, FORMAGGIO, INSALATA",
        ingredients: "",
        price: "€8,50",
      },
      { name: "BRESAOLA, RUCOLA E GRANA", ingredients: "", price: "€8,50" },
      {
        name: "BURRATA, PENDOLINI, PROSCIUTTO CRUDO, BASILICO",
        ingredients: "",
        price: "€9,00",
      },
      {
        name: "BURRATA, MORTADELLA E GRANELLA DI PISTACCHI",
        ingredients: "",
        price: "€9,00",
      },
    ],
  },
};

export const sectionTitles: SectionTitles = {
  giganti: "Le Giganti",
  classiche: "Le Classiche",
  speciali: "Le Speciali",
  bianche: "Le Bianche",
  marinare: "Le Marinare",
  fornarine: "Le Fornarine",
};
