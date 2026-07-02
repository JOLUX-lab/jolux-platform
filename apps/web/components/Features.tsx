import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="bg-[#0B1120] py-24">
      <div className="mx-auto max-w-7xl px-8">

        <h2 className="mb-16 text-center text-5xl font-bold text-white">
          Recursos da Plataforma
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <FeatureCard
            icon="🤖"
            title="IA Pedagógica"
            description="Crie planos de aula completos em segundos."
          />

          <FeatureCard
            icon="📝"
            title="Avaliações"
            description="Gere provas, simulados e listas automaticamente."
          />

          <FeatureCard
            icon="📊"
            title="Relatórios"
            description="Acompanhe o desempenho dos alunos em tempo real."
          />

          <FeatureCard
            icon="🏫"
            title="Gestão Escolar"
            description="Organize turmas, professores e calendários."
          />

        </div>

      </div>
    </section>
  );
}