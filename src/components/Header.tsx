import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white text-black justify-between">
      <nav className="flex justify-between w-full">
        <div className="px-2 font-bold flex justify-between  w-full">
          <Link to="/">Home</Link>
          <Link to="/auth/login">Login</Link>
        </div>
      </nav>
    </header>
  )
}
