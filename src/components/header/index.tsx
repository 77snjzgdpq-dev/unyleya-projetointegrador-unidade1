import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-primary text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">Unybay</h1>

      <nav className="flex gap-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/quemsomos" className="hover:underline">Quem Somos</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </nav>
    </header>
  );
}
