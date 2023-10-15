import Image from "next/image";
import { SocialBar } from "./social-bar";

export const Badge = () => (
  <div className="flex flex-col justify-center max-w-[350px] bg-white rounded-xl shadow-xl md:min-w-[350px]">
    <div className="p-10 flex justify-center items-center flex-col">
      <Image
        src="/images/pasalino.jpg"
        className="rounded-full mb-5"
        width={150}
        height={150}
        alt="Picture of Pasqualino de Simone (pasalino)"
      />
      <h1 className="font-bold text-2xl">Pasqualino de Simone</h1>
      <div className="mt-5">Software Engineer - Team Leader</div>
      <div className="mt-5 text-center">
        Multipotential person, Father, People and Technology lover, 3D printer
        addicted, Maker
      </div>
    </div>
    <SocialBar />
  </div>
);
