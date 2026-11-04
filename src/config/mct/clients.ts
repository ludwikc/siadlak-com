import accentureLogo from "@/assets/logos/accenture.svg";
import alstomLogo from "@/assets/logos/alstom.svg";
import assecoLogo from "@/assets/logos/asseco.svg";
import bphLogo from "@/assets/logos/bph.svg";
import geLogo from "@/assets/logos/ge.svg";
import gmLogo from "@/assets/logos/gm.svg";
import hpLogo from "@/assets/logos/hp.svg";
import ingLogo from "@/assets/logos/ing.svg";
import interCarsLogo from "@/assets/logos/inter-cars.svg";
import microsoftLogo from "@/assets/logos/microsoft.svg";
import mswiaLogo from "@/assets/logos/mswia.svg";
import nfzLogo from "@/assets/logos/nfz.svg";
import nikLogo from "@/assets/logos/nik.svg";
import nordeaLogo from "@/assets/logos/nordea.svg";
import orbisLogo from "@/assets/logos/orbis.svg";
import pwcLogo from "@/assets/logos/pwc.svg";
import pzuLogo from "@/assets/logos/pzu.svg";
import scaniaLogo from "@/assets/logos/scania.svg";
import skmLogo from "@/assets/logos/skm.svg";
import thomsonReutersLogo from "@/assets/logos/thomson-reuters.svg";
import ugLogo from "@/assets/logos/ug.svg";
import unileverLogo from "@/assets/logos/unilever.svg";
import volkswagenLogo from "@/assets/logos/volkswagen.svg";
import volvoLogo from "@/assets/logos/volvo.svg";
import zusLogo from "@/assets/logos/zus.svg";
import type { Localized } from "./types";

export type ClientGroupId = "defense" | "enterprise" | "education" | "partners";

export const brandLogos: { name: string; src: string }[] = [
  { name: "Microsoft", src: microsoftLogo },
  { name: "Unilever", src: unileverLogo },
  { name: "Hewlett-Packard", src: hpLogo },
  { name: "General Motors", src: gmLogo },
  { name: "General Electric", src: geLogo },
  { name: "Volkswagen", src: volkswagenLogo },
  { name: "Volvo", src: volvoLogo },
  { name: "Scania", src: scaniaLogo },
  { name: "Thomson Reuters", src: thomsonReutersLogo },
  { name: "PwC", src: pwcLogo },
  { name: "Accenture", src: accentureLogo },
  { name: "Alstom", src: alstomLogo },
  { name: "Nordea", src: nordeaLogo },
  { name: "ING", src: ingLogo },
  { name: "PZU", src: pzuLogo },
  { name: "Bank BPH", src: bphLogo },
  { name: "ZUS", src: zusLogo },
  { name: "NFZ", src: nfzLogo },
  { name: "NIK", src: nikLogo },
  { name: "MSWiA", src: mswiaLogo },
  { name: "Orbis", src: orbisLogo },
  { name: "Inter Cars", src: interCarsLogo },
  { name: "PKP Szybka Kolej Miejska", src: skmLogo },
  { name: "University of Gdansk", src: ugLogo },
  { name: "Asseco", src: assecoLogo },
];

export const textChips = [
  "NATO",
  "US Army Europe",
  "US Navy",
  "US Marines",
  "National Revenue Administration (KAS)",
  "ACTION Education Centre",
  "Postdata (Envelo)",
  "RINF TECH",
  "Military Institute of Medicine",
  "Warsaw City Guard",
  "mBank",
];

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
