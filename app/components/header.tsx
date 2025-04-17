import { Menu } from "lucide-react";
const Header = () => {
  return (
    <header className="flex justify-between items-center mb-2">
      <div className="logo my-4 mx-8">
        <img src="images/MM_logo.png" height={60} width={60} />
      </div>
      <button className="my-4 mx-6 text-white font-bold">
        <Menu size={28} />
      </button>
    </header>
  );
};

export default Header;
