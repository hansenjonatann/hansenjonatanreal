import portfolioList from "../portfolio.json";

const Portfolio = () => {
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
              Berikut adalah beberapa project yang pernah saya kerjakan
            </p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center  xl:w-10/12 xl:mx-auto">
          {portfolioList.map((item) => (
            <div className="mb-12 p-4 md:w-1/2" key={item.id}>
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full" />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                {item.title}
              </h3>
              <p className="font-medium text-base text-secondary">
                {item.description}
              </p>
              <h4 className="mt-2">Teknologi: <span className="font-bold"> {item.tech}</span></h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
