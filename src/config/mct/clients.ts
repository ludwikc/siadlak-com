import geLogo from "@/assets/logos/ge.svg";
import gmLogo from "@/assets/logos/gm.svg";
import hpLogo from "@/assets/logos/hp.svg";
import scaniaLogo from "@/assets/logos/scania.svg";
import unileverLogo from "@/assets/logos/unilever.svg";
import volkswagenLogo from "@/assets/logos/volkswagen.svg";
import volvoLogo from "@/assets/logos/volvo.svg";
import type { Localized } from "./types";

export type ClientGroupId = "defense" | "enterprise" | "education" | "partners";

export const brandLogos: { name: string; src: string }[] = [
  { name: "Unilever", src: unileverLogo },
  { name: "Hewlett-Packard", src: hpLogo },
  { name: "General Motors", src: gmLogo },
  { name: "General Electric", src: geLogo },
  { name: "Volkswagen", src: volkswagenLogo },
  { name: "Volvo", src: volvoLogo },
  { name: "Scania", src: scaniaLogo },
];

export const textChips = ["NATO", "US Army Europe", "US Navy", "US Marines", "Nordea", "ING"];

export const clientWall: Record<ClientGroupId, string[]> = {
  defense: [
    "NATO",
    "US Army Europe",
    "US Army Africa",
    "US Navy",
    "US Marines",
    "Army of Poland",
    "Police of Norway",
    "Police of Poland",
    "Ministry of Finance",
    "Customs Service",
    "Ministry of Administration and Internal Affairs",
  ],
  enterprise: [
    "Unilever",
    "Hewlett-Packard",
    "Thomson-Reuters",
    "General Motors",
    "General Electric",
    "Volkswagen",
    "Volvo",
    "Scania",
    "Nordea",
    "DNB",
    "ING",
    "Tikkurila",
  ],
  education: ["Oxford University", "Oslo University", "Asseco", "Bisnode", "ITmagination", "Sygnity"],
  partners: [
    "Glasspaper",
    "Global Knowledge",
    "Asseco Data Academy",
    "ABC Data",
    "Combidata",
    "Softronic",
    "Action Education",
  ],
};

export const clientGroupLabels: Record<ClientGroupId, Localized> = {
  defense: { en: "Defense & Government", pl: "Obronność i administracja" },
  enterprise: { en: "Enterprise & Corporate", pl: "Enterprise i korporacje" },
  education: { en: "Education & Technology", pl: "Edukacja i technologia" },
  partners: { en: "Training Partners", pl: "Partnerzy szkoleniowi" },
};
