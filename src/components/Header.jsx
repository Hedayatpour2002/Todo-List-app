function Header() {
  return (
    <section className="bg-gray-700 min-h-44 gap-3 flex items-center justify-center">
      <img
        src="./src/images/rocket.svg"
        alt="TodoList logo"
        className="pt-3 md:scale-125 lg:scale-150"
        width={22}
        height={36}
      />
      <div className="text-blue font-black text-[40px] md:text-6xl lg:text-7xl">
        to<span className="text-purple-dark">do</span>
      </div>
    </section>
  );
}

export default Header;
