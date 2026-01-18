import { Section, SectionHeader } from "@/components/ui";

export function About() {
  return (
    <Section id="about" className="bg-card/50">
      <SectionHeader
        title="About"
        subtitle="The short version (I promise)"
      />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Story */}
        <div className="space-y-4 text-muted">
          <p className="text-lg text-foreground">
LA native. Learned to code hacking MMORPGs. Traded websites for tacos. 
Now building design systems at JP Morgan Chase.
          </p>
          <p>
            I didn't take the traditional path into software engineering.
I grew up in South Central Los Angeles. I was always glued to the computer — not for homework, but for escape. 
I spent nights on Ventrilo  servers gaming and talking with all types of people. Some of them were developers, and somewhere along the way, I began dipping my toe into computing through hacking the games I was playing. 
Nothing malicious — I was just finding exploits, <s>breaking</s> bending systems, and figuring out how things worked under the hood.
          </p>
          <p>
            My Ventrilo friends eventually told me to do something productive with my skills. So I did. 
            I started building websites for local restaurants in exchange for free meals. 
            One site became two, two became ten, and then I figured it would make senese to pivot into undertaking a small business.
Today, I'm a frontend engineer at JP Morgan Chase, building design systems and component libraries used across 15+ business units. 
I've created AI-powered tools that save my team 200+ engineering hours monthly. 
I care deeply about accessibility, clean code, and building things that make other developers' lives easier.
          </p>
          <p>
The input path was unconventional, but the output is the same: I like understanding how systems work — and making them work better.
When I'm not coding, I'm on the pickleball court, hunting for good craft beer, or gaming with friends. Some things never change.
          </p>
        </div>


        {/* Quick facts */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Quick Facts</h3>
          <dl className="space-y-4">
                        <div className="flex gap-4">
              <dt className="text-muted font-mono text-sm min-w-[100px]">Status</dt>
              <dd>Open to new quests</dd>
            </div>
            <div className="flex gap-4">
              <dt className="text-muted font-mono text-sm min-w-[100px]">Class</dt>
              <dd>Frontend Engineer — Design Systems spec</dd>
            </div>
            <div className="flex gap-4">
              <dt className="text-muted font-mono text-sm min-w-[100px]">Origin</dt>
              <dd>Los Angeles native, Plano TX based</dd>
            </div>            
            <div className="flex gap-4">
              <dt className="text-muted font-mono text-sm min-w-[100px]">Fuel</dt>
              <dd>Craft beer + pickleball rivalry</dd>
            </div>
            <div className="flex gap-4">
              <dt className="text-muted font-mono text-sm min-w-[100px]">Path</dt>
              <dd>MMORPG exploits → tacos for websites → enterprise</dd>
            </div>
            <div className="flex gap-4">
              <dt className="text-muted font-mono text-sm min-w-[100px]">Focus</dt>
              <dd>Accessible, scalable component libraries</dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}
