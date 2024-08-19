import Link from "next/link";

export default function Navbar() {
  const routes: Array<{ label: string; href: string }> = [
    { label: "Nosotros", href: "/" },
    { label: "Productos", href: "/about" },
    { label: "Contacto", href: "/contact" },
  ];

  return (
    <div className="flex items-center justify-between w-full p-4 absolute top-0 left-0 z-10">
      <Link href="/" className="w-full">
        <h3 className="text-2xl text-slate-200 w-full">El Artesano</h3>
      </Link>

      <ul className="flex w-full items-center justify-end flex-wrap">
        {routes.map((route) => (
          <li key={route.label}>
            <Link href={route.href}>
              <span className="text-slate-200 hover:text-gray-500 transition-all duration-300 mr-6 text-xs uppercase tracking-[.4rem]">
                {route.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
