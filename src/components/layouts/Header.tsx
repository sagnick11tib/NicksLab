import Link from "next/link";
import Logo from "../Icons/Logo";
import NavBar from "../Nav/Navbar";

const Header = () => {
  return (
    <header className="relative z-50 flex items-center justify-between">
      <Link href={"/"} className="absolute left-4 md:left-10 md:top-8">
        <Logo className=" h-60 w-60 sm:h-[96px] sm:w-[430px] dark:invert " />
      </Link>
      <NavBar />
    </header>
  );
};

export default Header;
