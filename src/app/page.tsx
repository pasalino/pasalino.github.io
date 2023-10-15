import { Badge } from "../components/badge";
import { Description } from "../components/description";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center md:flex-row">
      <Badge />
      <Description />
    </main>
  );
}
