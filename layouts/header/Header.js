import Navbar from "./Navbar";
import Logo from "@/layouts/Logo";

export default function Header() {
  return (
    <header className=" w-full h-16 sm:h-20 lg:h-24 relative z-20">
      <div className="pl-5 text-white fixed w-full h-16 sm:h-20 lg:h-24 z-20 ps-4 md:ps-0 lg:ps-6 pe-4 lg:pe-6 transition duration-200 ease-in-out bg-zinc-900">
        <div className="flex items-center justify-center mx-auto max-w-[1920px] h-full w-full">
          <Logo className="text-body text-sm" />

          <Navbar className="lg:flex md:ms-6 xl:ms-10" />
        </div>
      </div>
    </header>
  );
}
