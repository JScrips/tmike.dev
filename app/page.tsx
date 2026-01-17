import { Navigation, Footer } from "@/components/layout";
import { Hero, About, Projects, BlogPreview, Contact } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <BlogPreview />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
