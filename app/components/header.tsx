import { Menu } from "lucide-react";
const Header = () => {
  return (
    <header className="flex justify-between items-center mb-12">
      <div className="logo">
        <span className="text-yellow-400 font-bold text-5xl">M</span>
      </div>
      <button className="text-white">
        <Menu size={32} />
      </button>
    </header>
  );
};

export default Header;
