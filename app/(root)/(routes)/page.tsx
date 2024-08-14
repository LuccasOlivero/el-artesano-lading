import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="mx-auto relative">
      <Navbar />
      <Main />
    </div>
  );
}

export function Main() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen relative bg-factura bg-fixed bg-cover bg-no-repeat">
        <span className="absolute inset-0 w-full h-full bg-[rgba(34,34,34,0.3)] content-none"></span>

        <h1 className="mt-28 text-4xl text-pretty text-slate-100 text-center uppercase relative z-20 tracking-wider">
          Panadería 100% artesanal <br /> con mas de 10 años de trayectoria
        </h1>
      </div>

      {/* cards here */}
      <div className="bg-slate-100 w-full h-full">
        <CardGrid />
      </div>

      <div className="relative w-full bg-fixed h-screen bg-pan bg-no-repeat bg-center bg-cover"></div>

      <Footer />
    </>
  );
}

const Card = ({ icon, text }: any) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-4xl text-blue-500 mb-4">ICON</div>
      <p className="text-center text-gray-700">{text}</p>
    </div>
  );
};

const CardGrid = () => {
  const cards = [
    {
      icon: "faHeart",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "faStar",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "faThumbsUp",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card key={index} icon={card.icon} text={card.text} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
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
};
