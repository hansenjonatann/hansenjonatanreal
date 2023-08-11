import portfolioData from "/src/portfolio.json";

function Portfolio() {
  return (
    <section id="portfolio" className="pt-4 md:pt-6  pb-8 md:pb-6 bg-primary">
      <h2 className="text-center text-4xl text-secondary font-bold">
        Portfolio
      </h2>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 md:ml-8">
        {portfolioData.map((item) => {
          return (
            <div className="bg-secondary shadow-md p-4" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="font-bold text-lg mb-2 text-accsent">
                {item.title}
              </h3>
              <p className="text-accsent mb-4">{item.description}</p>

              <h3 className="mb-4 text-accsent ">{item.tech}</h3>

              <a
                href={item.url}
                className="bg-accsent text-secondary font-bold px-6 py-2 md:px-4 md:py-2 md:rounded-lg hover:underline"
              >
                Live Demo
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
