export default function DashboardPreview() {
  return (
    <section className="py-24 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-10">
          Dashboard Inteligente
        </h2>

        <div className="rounded-2xl bg-[#111827] border border-gray-700 p-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-blue-600 h-40 rounded-xl"></div>
            <div className="bg-green-600 h-40 rounded-xl"></div>
            <div className="bg-purple-600 h-40 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}