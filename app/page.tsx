import { redirect } from "next/navigation";

const DEFAULT_CLIENT = "cassandra-templeton";

export default function Home() {
  redirect(`/resume/${DEFAULT_CLIENT}`);
}
