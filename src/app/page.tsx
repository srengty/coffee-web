import Image from "next/image";
import Carousel from "./_components/carousel";
import Menu from "./_components/menu";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">Landing page</h1>
      <hr className="w-full"/>
      <h1 className="text-2xl font-bold">Menu Here</h1>
      <Menu/>
      <hr className="w-full"/>
      <Carousel/>
    </div>
  );
}
