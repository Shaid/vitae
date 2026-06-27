import { format, parseISO } from "date-fns";

interface FancyDateProps {
  date: string;
}

export function FancyDate({ date }: FancyDateProps) {
  if (date === "now") {
    return <span>Present</span>;
  }
  return <span>{format(parseISO(date), "MMMM yyyy")}</span>;
}
