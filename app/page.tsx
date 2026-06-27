import { redirect } from "next/navigation";

const DEFAULT_CLIENT = "jez-templeton";

export default function Home() {
  redirect(`/resume/${DEFAULT_CLIENT}`);
}
