export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh] text-center">

      <h1 className="text-6xl font-bold mb-6">
        Plataforma Educacional
      </h1>

      <span className="text-blue-600">
        JOLUX
      </span>

      <p className="mt-6 max-w-2xl text-xl text-gray-500">
        Inteligência Artificial para transformar a educação.
      </p>

      <button className="mt-10 bg-blue-600 text-white px-8 py-4 rounded-xl">
        Começar agora
      </button>

    </section>
  );
}