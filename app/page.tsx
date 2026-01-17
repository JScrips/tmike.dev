import { Navigation, Footer } from "@/components/layout";
import { Hero, About, Skills, Projects, BlogPreview, Contact } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
