import Navbar from "@/components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="mx-auto relative">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
