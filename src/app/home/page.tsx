import Hero from "@/components/Hero";

export default async function Home() {
  return (
    <div className="mx-12 my-8 grid grid-flow-col content-center justify-items-center gap-2 p-2">
      <Hero />
    </div>
  );
}
