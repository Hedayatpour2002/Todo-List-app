function Header() {
  return (
    <section className="bg-gray-700 min-h-44 gap-3 flex items-center justify-center">
      <img
        src="./src/images/rocket.svg"
        alt="TodoList logo"
        className="pt-3"
        width={22}
        height={36}
      />
      <div className="text-blue font-black text-[40px]">
        to<span className="text-purple-dark">do</span>
      </div>
    </section>
  );
}

export default Header;