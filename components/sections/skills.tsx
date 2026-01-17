import { Section, SectionHeader } from "@/components/ui";

interface Skill {
  name: string;
  level: "expert" | "proficient" | "familiar";
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "Tailwind CSS", level: "proficient" },
      { name: "HTML/CSS", level: "expert" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: "proficient" },
      { name: "REST APIs", level: "proficient" },
      { name: "PostgreSQL", level: "familiar" },
      { name: "GraphQL", level: "familiar" },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", level: "expert" },
      { name: "VS Code", level: "expert" },
      { name: "Figma", level: "familiar" },
      { name: "CI/CD", level: "proficient" },
    ],
  },
];

const levelIndicator = {
  expert: "●●●",
  proficient: "●●○",
  familiar: "●○○",
};

const levelLabel = {
  expert: "Expert",
  proficient: "Proficient",
  familiar: "Learning",
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        title="Skills"
        subtitle="Technologies I work with (and actually enjoy)"
      />

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-border pb-2">
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center justify-between group"
                >
                  <span className="group-hover:text-accent transition-colors">
                    {skill.name}
                  </span>
                  <span
                    className="text-xs text-muted font-mono"
                    title={levelLabel[skill.level]}
                  >
                    {levelIndicator[skill.level]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-sm text-muted text-center">
          <span className="font-mono">●●●</span> Expert ·
          <span className="font-mono"> ●●○</span> Proficient ·
          <span className="font-mono"> ●○○</span> Learning
        </p>
      </div>
    </Section>
  );
}
