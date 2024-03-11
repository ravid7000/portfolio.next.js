import Image from "next/image";
import { SocialLinksDropdown } from "./SocialLinkDropdown";

export default function Navbar() {
  return (
    <nav className="grid grid-cols-3 items-center px-4 gap-2 border-b border-b-gray-100">
      <div />
      <div className="flex justify-center items-center py-4">
        <Image
          width="50"
          height="50"
          src="./logo/logo-light.svg"
          alt="Ravi Dhiman"
          title="Ravi Dhiman"
          priority
        />
      </div>
      <div className="flex justify-end py-4">
        <SocialLinksDropdown />
      </div>
    </nav>
  );
}
