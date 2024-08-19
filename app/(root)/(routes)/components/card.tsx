import { Sandwich } from "lucide-react";
import { Croissant } from "lucide-react";
import { Cookie } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function CardGrid() {
  const cards = [
    {
      title: "Pan y facturas",
      icon: <Croissant size={40} />,
      text: "Nuestros artesanos mezclan la cantidad perfecta de ingredientes y hornean el pan usando la temperatura idónea del horno, obteniendo siempre como resultado único.",
    },
    {
      title: "Pastelería",
      icon: <Sandwich size={40} />,
      text: "Nuestra pastelería artesanal se destaca en la preparación, cocción y decoración de platos y piezas dulces tales como tortas, pasteles, mini tortas y muchos más.",
    },
    {
      title: "Masas finas",
      icon: <Cookie size={40} />,
      text: "Trabajamos con la experiencia y la dedicación que nuestros clientes merecen, elaborando alimentos frescos con materia prima de primera calidad.",
    },
  ];

  return (
    <div className="container mx-auto py-8 w-3/4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            text={card.text}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
}

const Card = ({ icon, text, title }: any) => {
  return (
    <div className="flex flex-col items-center py-4 bg-slate-100 rounded-lg hover:shadow-md transition-shadow duration-300">
      <div className="text-4xl text-yellow-400 mb-4">{icon}</div>
      <span className="mb-4 text-center text-gray-700 tracking-[.3rem] text-sm uppercase text-pretty">
        {title}
      </span>
      <p className="text-balance text-center text-gray-500 text-sm">{text}</p>
      <p className="pt-2 text-yellow-400 text-base relative flex items-center gap-x-2">
        ver productos
        <ArrowRight />
      </p>
    </div>
  );
};
