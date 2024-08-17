import { Sandwich } from "lucide-react";
import { Croissant } from "lucide-react";
import { Wheat } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function CardGrid() {
  const cards = [
    {
      icon: <Croissant size={40} />,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Wheat size={40} />,
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Sandwich size={40} />,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="container mx-auto py-8 w-3/4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <Card key={index} icon={card.icon} text={card.text} />
        ))}
      </div>
    </div>
  );
}

const Card = ({ icon, text, title = "panes y facturas" }: any) => {
  return (
    <div className="flex flex-col items-center py-4 bg-slate-50 rounded-lg hover:shadow-md transition-shadow duration-300">
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
