import CardGrid from "./card";

export default function Main() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen relative bg-factura bg-fixed bg-cover bg-no-repeat">
        <span className="absolute inset-0 w-full h-full bg-[rgba(34,34,34,0.3)] content-none"></span>

        <h1 className="mt-28 text-4xl text-pretty text-slate-100 text-center uppercase relative z-20 tracking-[.5rem]">
          Panadería 100% artesanal <br />
          <span className="absolute bottom-[-1rem] left-0 right-0 text-center text-pretty text-slate-300 text-sm">
            con mas de 10 años de trayectoria
          </span>
        </h1>
      </div>

      <div className="bg-slate-50 w-full h-full py-16">
        <div className="text-center text-pretty text-slate-600 relative z-20 tracking-[.5rem]">
          <h3 className="uppercase text-xl">nuestros productos</h3>
        </div>
        <CardGrid />
      </div>

      <div className="relative w-full bg-fixed py-40 bg-miga bg-no-repeat bg-center bg-cover flex justify-center">
        <span className="absolute inset-0 w-full h-full bg-[rgba(34,34,34,0.3)] content-none"></span>

        <div className="container flex flex-col items-start justify-center mx-auto w-3/4 z-10">
          <h4 className="uppercase text-2xl text-pretty font-bold text-slate-100">
            sandwiches de miga por mayor
          </h4>
          <p className="text-pretty text-sm text-slate-200 mt-2 mb-4">
            ¡Listas para hornear! Completar tu oferta gastronómica <br />
            con medialunas artesanales recién horneadas es más fácil de lo que
            te imaginás!
          </p>
          <button className="flex h-full items-center text-sm font-normal text-black bg-yellow-600 shadow-sm px-6 py-1 uppercase">
            hace tu pedido
          </button>
        </div>
      </div>
    </>
  );
}
