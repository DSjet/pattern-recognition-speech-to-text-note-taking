function Footer() {
  return (
    <div className="relative bottom-0 bg-secondary-light  text-primary-light px-20 bg-slate-200 w-screen flex items-center justify-between mt-10 py-12 h-24">
      <div>
        <p>© {new Date().getFullYear()} - All Rights Reserved</p>
      </div>
      <div>
        <h1 className="hidden md:text-xs md:block lg:text-lg font-bold">
          Created by
        </h1>
        <div className="hidden md:text-xs md:block lg:text-lg my-0">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/antonius-t-kurniawan/"
          >
            Antonius Teddy Kurniawan - 21/472874/PA/20352
          </a>
          <br></br>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/peter-setiabudi/"
          >
            Peter Johan Arkadhira Setiabudi - 21/475025/PA/20510
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
