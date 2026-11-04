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
import dnbLogo from "@/assets/logos/clients/dnb.svg.asset.json";
import pekaoLogo from "@/assets/logos/clients/pekao.svg.asset.json";
import pkoLogo from "@/assets/logos/clients/pkobp.svg.asset.json";
import sygnityLogo from "@/assets/logos/clients/sygnity.svg.asset.json";
import tikkurilaLogo from "@/assets/logos/clients/tikkurila.svg.asset.json";
import mbankLogo from "@/assets/logos/clients/mbank.webp.asset.json";
import softronicLogo from "@/assets/logos/clients/softronic-poland.webp.asset.json";
import postdataLogo from "@/assets/logos/clients/postdata.svg.asset.json";
import natoLogo from "@/assets/logos/clients/nato.webp.asset.json";
import armyAfricaLogo from "@/assets/logos/clients/army-africa-historical.webp.asset.json";
import armyEuropeLogo from "@/assets/logos/clients/army-europe.svg.asset.json";
import navyLogo from "@/assets/logos/clients/navy.svg.asset.json";
import marinesLogo from "@/assets/logos/clients/marines.svg.asset.json";
import defenseLogo from "@/assets/logos/clients/us-department-of-defense.svg.asset.json";
import norwayPoliceLogo from "@/assets/logos/clients/norway-police.svg.asset.json";
import polandPoliceLogo from "@/assets/logos/clients/poland-police.webp.asset.json";
import mswiaLogo from "@/assets/logos/clients/mswia.webp.asset.json";
import financeLogo from "@/assets/logos/clients/finance.webp.asset.json";
import wimLogo from "@/assets/logos/clients/wim.svg.asset.json";
import cityGuardLogo from "@/assets/logos/clients/warsaw-city-guard.webp.asset.json";
import customsLogo from "@/assets/logos/clients/customs-service-historical.webp.asset.json";
import type { Localized } from "./types";

export type ClientGroupId = "defense" | "enterprise" | "education" | "partners";

type ClientLogo = { name: string; src: string; original?: boolean; reverse?: boolean };

export const brandLogos: ClientLogo[] = [
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
  { name: "Orbis", src: orbisLogo },
  { name: "Inter Cars", src: interCarsLogo },
  { name: "PKP Szybka Kolej Miejska", src: skmLogo },
  { name: "University of Gdansk", src: ugLogo },
  { name: "Asseco", src: assecoLogo },
  { name: "DNB", src: dnbLogo.url, original: true },
  { name: "PKO Bank Polski", src: pkoLogo.url, original: true },
  { name: "Bank Pekao", src: pekaoLogo.url, original: true },
  { name: "Tikkurila", src: tikkurilaLogo.url, original: true },
  { name: "Sygnity", src: sygnityLogo.url, original: true },
  { name: "mBank", src: mbankLogo.url, original: true },
  { name: "Softronic", src: softronicLogo.url, original: true },
  { name: "POSTDATA", src: postdataLogo.url, original: true, reverse: true },
  { name: "NATO", src: natoLogo.url, original: true },
  { name: "US Army Africa", src: armyAfricaLogo.url, original: true },
  { name: "US Army Europe", src: armyEuropeLogo.url, original: true },
  { name: "US Navy", src: navyLogo.url, original: true },
  { name: "US Marines", src: marinesLogo.url, original: true },
  { name: "US Department of Defense", src: defenseLogo.url, original: true },
  { name: "Police of Norway", src: norwayPoliceLogo.url, original: true },
  { name: "Police of Poland", src: polandPoliceLogo.url, original: true },
  { name: "MSWiA", src: mswiaLogo.url, original: true },
  { name: "Ministry of Finance", src: financeLogo.url, original: true },
  { name: "Military Institute of Medicine", src: wimLogo.url, original: true, reverse: true },
  { name: "Warsaw City Guard", src: cityGuardLogo.url, original: true },
  { name: "Customs Service", src: customsLogo.url, original: true },
];

export const textChips = [
  "National Revenue Administration (KAS)",
  "ACTION Education Centre",
  "RINF TECH",
  "ITMAGINATION",
  "Combidata",
  "BRE Bank",
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
