import copilotAsset from "@/assets/mct/microsoft-copilot.png.asset.json";
import fabricAsset from "@/assets/mct/microsoft-fabric.png.asset.json";
import sqlAsset from "@/assets/mct/microsoft-sql-server.svg.asset.json";
import type { Track } from "./types";

export const productLogos: Record<Track, { src: string; name: string }> = {
  copilot: { src: copilotAsset.url, name: "Microsoft Copilot" },
  fabric: { src: fabricAsset.url, name: "Microsoft Fabric" },
  sql: { src: sqlAsset.url, name: "Microsoft SQL Server" },
};