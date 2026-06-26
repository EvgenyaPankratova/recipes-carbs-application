import { Nav } from "@/components/layout/Nav/Nav";

const Header = () => {
  return (
    <header className="sticky z-20 bg-beige rounded-4xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] mt-4 w-full">
      <Nav />
    </header>
  );
};

export default Header;
