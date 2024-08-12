import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Main />
    </div>
  );
}

export function Main() {
  return (
    <div className="flex flex-col items-center justify-center h-72">
      <h1 className="text-4xl text-pretty text-slate-100 text-center uppercase pt-10">
        Panadería 100% artesanal <br /> con mas de 10 años de trayectoria
      </h1>
    </div>
  );
}
