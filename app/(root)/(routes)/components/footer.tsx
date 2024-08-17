import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Store } from "lucide-react";
import { Timer } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-200 pt-8 pb-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-black">
          <div className="flex">
            <span>
              <Phone />
            </span>
            <div>
              <h3 className="font-bold text-lg mb-1 tracking-[.3rem]">
                Llamanos
              </h3>
              <p className="text-sm font-light">388-352342</p>
            </div>
          </div>

          <div className="flex">
            <span>
              <Mail />
            </span>
            <div>
              <h3 className="font-bold text-lg mb-1 tracking-[.3rem]">Email</h3>
              <p className="text-sm font-light">elArtesano@gmail.com</p>
            </div>
          </div>

          <div className="flex">
            <span>
              <Store />
            </span>
            <div>
              <h3 className="font-bold text-lg mb-1 tracking-[.3rem]">
                Visitanos
              </h3>
              <p className="text-sm font-light">
                Esquina Oscar Orinas y 9 de Julio.
              </p>
            </div>
          </div>

          <div className="flex">
            <span>
              <Timer />
            </span>
            <div>
              <h3 className="font-bold text-lg mb-1 tracking-[.3rem]">
                Abrimos
              </h3>
              <p className="text-sm font-light">Lunes a Sábado: 06 a 22 hs.</p>
              <p className="text-sm font-light">Domingos: cerrado</p>
            </div>
          </div>
        </div>
      </div>

      <picture className="flex w-full h-full justify-center items-end mt-8 mb-6">
        <img src="./logo.png" alt="logo" className="rounded-full w-36" />
      </picture>

      <div className="mt-2 text-center text-sm text-black font-light">
        <p>
          &copy; {new Date().getFullYear()} Panadería El Artesano. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
}
