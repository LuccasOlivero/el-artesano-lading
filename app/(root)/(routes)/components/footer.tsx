export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Llamanos</h3>
            <p>11 4798-6292</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Email</h3>
            <p>panaderia@quibeluma.com.ar</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Visitanos</h3>
            <p>Av. Fleming 1412, Martínez.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Abrimos</h3>
            <p>Lunes a Sábado: 7 a 20 hs.</p>
            <p>Domingos: 7 a 19.30 hs.</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Panadería Quibeluma. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
