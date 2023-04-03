const Header = () => {
  return (
    <header className="bg-blue-100 h-12 md:h-20">
      {/* Header Contents */}
      <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
        <div>
          {/* Logo - 이미지로 교체가능 */}
          <div>Joy's Portfolio</div>
        </div>
        <ul className="flex text-xs md:text-base gap-2 md:gap-8">
          <li>Introduce</li>
          <li>Portfolio</li>
          <li>Contact Me</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
