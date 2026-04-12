import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Portfolio />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
