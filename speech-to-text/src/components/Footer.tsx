function Footer() {
  return (
    <div className="fixed bottom-0 bg-secondary-light text-primary-light px-8 bg-slate-200 w-screen flex items-center justify-between mt-10 py-12 h-24">
      <div>
        <p>© Copyright - 2023</p>
      </div>
      <div className="p-5">
        <h1 className="hidden md:text-xs md:block lg:text-lg font-bold">
          Created by
        </h1>
        <ul className="hidden md:text-xs md:block lg:text-lg list-none">
          <li>Antonius Teddy Kurniawan - 21/472874/PA/20352</li>
          <li>Peter Johan Arkadhira Setiabudi - 21/475025/PA/20510</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
