import { title } from "@/src/components/primitives";

export default function Home() {
  return (
    <section className="h-screen bg-[url('/glass.jpg')]">
      <h1 className={title()}>Found X</h1>
    </section>
  );
}
