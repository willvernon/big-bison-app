import Image from "next/image";

import NavBar from "@/components/layouts/Navbar";
import Logo from "../../public/hbbl.png";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full  ">
      <nav className="flex w-full justify-between">
        <div className="p-4  invert">
          <Image
            src={Logo}
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
        <NavBar />
      </nav>
      <div className="mx-auto h-full w-full max-w-screen-xl bg-[#111827]">
        {children}
      </div>
    </main>
  );
};

export default LandingLayout;
