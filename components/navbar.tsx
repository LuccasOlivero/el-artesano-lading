import Link from "next/link";

export default function Navbar() {
  const routes: Array<{ label: string; href: string }> = [
    { label: "Nosotros", href: "/" },
    { label: "Productos", href: "/about" },
    { label: "Contacto", href: "/contact" },
  ];

  return (
    <div className="flex w-full p-4">
      <Link href="/" className="relative">
        <img
          src="/logo.png"
          alt="logo"
          width="180"
          height="180"
          className="rounded-full"
        />
        <div className="top-0 left-0  absolute inset-0 w-full h-full bg-[rgba(34,34,34,0.3)] content-none"></div>
      </Link>

      <ul className="flex w-full items-center justify-end">
        <li>
          {routes.map((route) => (
            <Link key={route.label} href={route.href}>
              <span className="text-slate-200 hover:text-gray-800 transition-all duration-300 mr-6 uppercase">
                {route.label}
              </span>
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
}
