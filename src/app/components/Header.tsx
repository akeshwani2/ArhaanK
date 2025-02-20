import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
   <header className="w-full px-4 md:px-0 lg:px-0 sticky top-0 z-50 backdrop-blur-md pt-2 pb-2 animate-fade-in-up">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl md:text-4xl lg:text-4xl justify-start">
          ak.
        </h1>
      </Link>
      <div className=" items-center">
        <Nav />
      </div>


    </div>
  </header>
  );
};

export default Header;