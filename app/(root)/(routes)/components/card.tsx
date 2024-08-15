const Card = ({ icon, text, title = "panes y facturas" }: any) => {
  return (
    <div className="flex flex-col items-center py-4 bg-slate-50 rounded-lg hover:shadow-md transition-shadow duration-300">
      <div className="text-4xl text-yellow-400 mb-4">ICON</div>
      <span className="mb-4 text-center text-gray-700 tracking-[.3rem] text-sm uppercase text-pretty">
        {title}
      </span>
      <p className="text-balance text-center text-gray-500 text-sm">{text}</p>
      <p className="pt-2 text-yellow-400 text-base relative">
        ver productos
        <span className="relative ml-2 text-[.5rem] bottom-[.09rem]">
          {">"}
        </span>
      </p>
    </div>
  );
};

export default function CardGrid() {
  const cards = [
    {
      icon: "faHeart",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "faStar",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "faThumbsUp",
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
