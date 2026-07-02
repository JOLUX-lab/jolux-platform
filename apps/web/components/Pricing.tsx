export default function Pricing() {
  return (
    <section className="py-24 bg-[#050816] text-center">
      <h2 className="text-4xl font-bold mb-16">
        Planos
      </h2>

      <div className="flex justify-center gap-8">

        <div className="p-8 bg-gray-900 rounded-xl">
          Starter
        </div>

        <div className="p-8 bg-blue-700 rounded-xl">
          Pro
        </div>

        <div className="p-8 bg-gray-900 rounded-xl">
          Enterprise
        </div>

      </div>
    </section>
  );
}