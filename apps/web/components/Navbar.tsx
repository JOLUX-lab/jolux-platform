export default function Navbar() {
  return (
    <nav className="w-full h-20 flex items-center justify-between px-10 border-b">
      <h1 className="text-2xl font-bold text-blue-600">
        JOLUX
      </h1>

      <div className="flex gap-8">
        <a href="#">Recursos</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </div>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
        Entrar
      </button>
    </nav>
  );
}