const Portfolio = () => {
  const portfolioList = [
    {
      id: 1,
      title: "Orange Laundry Batam",
      image: "project/orangelaundry.png",
      desc: "Orange Laundry merupakan sebuah website yang memberikan pelayanan laundry yang berada di kota Batam",
      teknologi: ["Bootstrap", ",", "Laravel"],
    },
    {
      id: 2,
      title: "Hansen Jonatan Personal Link Tree",
      image: "project/hansenjonatan-personal-linktree.png",
      desc: "Website yang berupa link tree yang dapat menyimpan berbagai situs web dan sosial media pengguna",
      teknologi: ["HTML", ",", "CSS", ",", "Javascript"],
    },
  ];
  return (
    <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">
              Portolio
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Project Terbaru
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              ut, enim sit vel temporibus ipsum eaque error iure! Eius,
              veritatis!
            </p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center  xl:w-10/12 xl:mx-auto" data-aos="flip-left">
          {portfolioList.map((item) => (
            <div className="mb-12 p-4 md:w-1/2" key={item.id}>
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                {item.title}
              </h3>
              <p className="font-medium text-base text-secondary">
                {item.desc}
              </p>
              <h4>Teknologi: {item.teknologi}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
