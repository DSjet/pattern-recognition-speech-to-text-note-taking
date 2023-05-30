function Navbar() {
  return (
    <nav className=" bg-secondary-light p-2 flex items-center justify-between sticky top-0 text-primary-light">
      <div className="flex space-x-1">
        <img src="./speakwrite.svg" className="ml-3 w-10 l-10" />
        <h1 className=" font-bold text-3xl p-3">SpeakWrite 1.0</h1>
      </div>
      <div className="mr-5">
        <ul className="flex space-x-5">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a className="">About</a>
          </li>
          <li>
            <a className="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
