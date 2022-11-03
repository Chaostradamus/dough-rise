import { BudgetCard } from "./BudgetCard";

export const budgets = () => {
  const budgets = [
    {
      title: "Gym App",
      description: "Design & Development",

      site: "https://gym-app-puce.vercel.app/",
    },
    {
      title: "Reddit",
      description: "Design & Development",

      site: "https://reddit2-eight.vercel.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <h2>Projects</h2>
      <p>Projects that I have been working on throughout the years...</p>
      <div>
        {budgets.map((project, index) => {
          return <BudgetCard key={index} {...project} />;
        })}
      </div>
    </section>
  );
};
