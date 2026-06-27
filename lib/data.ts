import fs from "fs";
import path from "path";
import { ResumeData } from "@/types/resume";

const dataDir = path.join(process.cwd(), "data");

export function getResumeData(client: string): ResumeData | null {
  const filePath = path.join(dataDir, `${client}.json`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as ResumeData;
}

export function getAvailableClients(): string[] {
  return fs
    .readdirSync(dataDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(".json", ""));
}
